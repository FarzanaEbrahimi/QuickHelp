import { supabase } from "../lib/supabase";

function cleanText(text) {
  return text
    .replace(/\u0000/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\t/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

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

    start += (chunkSize - overlap);
  }

  return chunks;
}

export async function createEmbeddings(
  documentId,
  text
) {

  const cleanedText = cleanText(text);

  const chunks = splitText(cleanedText);

  console.log(
    "Total chunks:",
    chunks.length
  );

  for (
    let i = 0;
    i < chunks.length;
    i++
  ) {

    const chunk = chunks[i];

    try {

      const { data, error } =
        await supabase.functions.invoke(
          "create-embedding",
          {
            body: {
              text: chunk
            }
          }
        );

      if (error) {

        console.error(
          "Embedding error:",
          error
        );

        continue;
      }

      const embedding =
        data?.embedding;

      if (!embedding) {

        console.error(
          "No embedding returned for chunk:",
          i
        );

        continue;
      }

      const { error: insertError } =
        await supabase
          .from("document_chunks")
          .insert([
            {
              document_id: documentId,
              chunk_index: i,
              content: chunk,
              embedding
            }
          ]);

      if (insertError) {

        console.error(
          "Database insert error:",
          insertError
        );

        continue;
      }

      console.log(
        `Chunk ${i} saved successfully`
      );

    } catch (error) {

      console.error(
        "Chunk processing failed:",
        error
      );

    }

  }

  console.log(
    "Embeddings created successfully"
  );

}