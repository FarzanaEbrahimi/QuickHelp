import { supabase } from "../lib/supabase";


function splitText(text, chunkSize = 800) {
  const chunks = [];

  let start = 0;

  while (start < text.length) {
    chunks.push(
      text.slice(start, start + chunkSize)
    );

    start += chunkSize;
  }

  return chunks;
}
function cleanText(text) {
  return text.replace(/\u0000/g, "");
}



export async function createEmbeddings(
  documentId,
  text
) {

  const cleanedText = cleanText(text);

  const chunks = splitText(cleanedText);


  for (let i = 0; i < chunks.length; i++) {

    const chunk = chunks[i];


    // Call Supabase Edge Function

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
      console.log(
        "Embedding error:",
        error
      );
      continue;
    }


    const embedding = data.embedding;



    // Save chunk + vector

    const { error: insertError } =
      await supabase
        .from("document_chunks")
        .insert([
          {
            document_id: documentId,

            chunk_index: i,

            content: chunk,

            embedding: embedding
          }
        ]);



    if (insertError) {

        console.log(
            "Database insert error:",
            JSON.stringify(insertError, null, 2)
        );

        return;
    }

  }


  console.log(
    "Embeddings created successfully"
  );

}