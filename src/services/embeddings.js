import { supabase } from "../lib/supabase";

/**
 * Clean extracted document text before chunking.
 */
function cleanText(text) {
  return String(text || "")
    .replace(/\u0000/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\t/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Split text into overlapping chunks.
 *
 * chunkSize:
 * Maximum number of characters per chunk.
 *
 * overlap:
 * Number of characters shared between consecutive chunks.
 */
function splitText(
  text,
  chunkSize = 1200,
  overlap = 200
) {
  const chunks = [];

  let start = 0;

  while (start < text.length) {
    const end = Math.min(
      start + chunkSize,
      text.length
    );

    const chunk = text
      .slice(start, end)
      .trim();

    if (chunk.length > 0) {
      chunks.push(chunk);
    }

    if (end >= text.length) {
      break;
    }

    start += chunkSize - overlap;
  }

  return chunks;
}

/**
 * Create embeddings for all document chunks
 * and save them into document_chunks.
 *
 * IMPORTANT:
 * If any chunk fails, the entire operation fails.
 * Any chunks already inserted during this operation
 * are removed to prevent partial/incomplete data.
 */
export async function createEmbeddings(
  documentId,
  text
) {
  // --------------------------------------------------
  // Validate input
  // --------------------------------------------------

  if (!documentId) {
    throw new Error(
      "Document ID is required to create embeddings."
    );
  }

  if (!text?.trim()) {
    throw new Error(
      "No text available for embedding."
    );
  }

  // --------------------------------------------------
  // Clean document text
  // --------------------------------------------------

  const cleanedText = cleanText(text);

  if (!cleanedText) {
    throw new Error(
      "The document contains no readable text."
    );
  }

  // --------------------------------------------------
  // Create chunks
  // --------------------------------------------------

  const chunks = splitText(cleanedText);

  if (chunks.length === 0) {
    throw new Error(
      "No text chunks were created from the document."
    );
  }

  console.log(
    `Total chunks created: ${chunks.length}`
  );

  // Keep track of chunks inserted during this run.
  const insertedChunkIds = [];

  try {
    // --------------------------------------------------
    // Process chunks one by one
    // --------------------------------------------------

    for (
      let i = 0;
      i < chunks.length;
      i++
    ) {
      const chunk = chunks[i];

      console.log(
        `Processing chunk ${i + 1}/${chunks.length}`
      );

      // ------------------------------------------------
      // Create embedding
      // ------------------------------------------------

      const {
        data,
        error,
      } =
        await supabase.functions.invoke(
          "create-embedding",
          {
            body: {
              text: chunk,
            },
          }
        );

      if (error) {
        console.error(
          `Embedding error for chunk ${i + 1}:`,
          error
        );

        throw new Error(
          `Failed to create embedding for chunk ${
            i + 1
          }/${chunks.length}.`
        );
      }

      const embedding =
        data?.embedding;

      if (
        !Array.isArray(embedding) ||
        embedding.length === 0
      ) {
        throw new Error(
          `No valid embedding returned for chunk ${
            i + 1
          }/${chunks.length}.`
        );
      }

      // ------------------------------------------------
      // Save chunk + embedding
      // ------------------------------------------------

      const {
        data: insertedChunk,
        error: insertError,
      } =
        await supabase
          .from("document_chunks")
          .insert([
            {
              document_id: documentId,
              chunk_index: i,
              content: chunk,
              embedding,
            },
          ])
          .select("id")
          .single();

      if (insertError) {
        console.error(
          `Database insert error for chunk ${
            i + 1
          }:`,
          insertError
        );

        throw new Error(
          `Failed to save chunk ${
            i + 1
          }/${chunks.length}.`
        );
      }

      // ------------------------------------------------
      // Track inserted chunk
      // ------------------------------------------------

      if (insertedChunk?.id) {
        insertedChunkIds.push(
          insertedChunk.id
        );
      }

      console.log(
        `Chunk ${i + 1}/${chunks.length} saved successfully.`
      );
    }

    // --------------------------------------------------
    // Everything succeeded
    // --------------------------------------------------

    console.log(
      `Embeddings created successfully. ${chunks.length} chunks saved.`
    );

    return {
      success: true,
      chunkCount: chunks.length,
    };
  } catch (error) {
    console.error(
      "Embedding pipeline failed:",
      error
    );

    // --------------------------------------------------
    // Remove partial chunks
    // --------------------------------------------------

    if (insertedChunkIds.length > 0) {
      const {
        error: cleanupError,
      } = await supabase
        .from("document_chunks")
        .delete()
        .in(
          "id",
          insertedChunkIds
        );

      if (cleanupError) {
        console.error(
          "Failed to clean up partial chunks:",
          cleanupError
        );
      } else {
        console.log(
          `Cleaned up ${insertedChunkIds.length} partial chunk(s).`
        );
      }
    }

    // Important:
    // Re-throw so UploadCenter can detect
    // that embedding generation failed.
    throw error;
  }
}