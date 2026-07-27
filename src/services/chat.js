import { supabase } from "../lib/supabase";


/**
 * Create embedding for user question
 */
async function createQueryEmbedding(text) {

  const { data, error } = await supabase.functions.invoke(
    "create-embedding",
    {
      body: {
        text,
      },
    }
  );


  if (error) {
    console.error(
      "Embedding error:",
      error
    );

    throw error;
  }


  return data.embedding;
}



/**
 * Search relevant chunks from database
 */
async function searchSimilarChunks(
  embedding
) {

  const { data, error } = await supabase
    .schema("public")
    .rpc(
      "search_document_chunks",
      {
        match_count: 5,
        query_embedding: embedding,
      }
    );


  if (error) {

    console.error(
      "Vector search error:",
      error
    );

    throw error;
  }


  return data;
}



/**
 * Send context + question to AI chat function
 */
async function askAI(
  question,
  context
) {


  const { data, error } =
    await supabase.functions.invoke(
      "chat",
      {
        body: {
          question,
          context,
        },
      }
    );


  if (error) {

    console.error(
      "Chat function error:",
      error
    );

    throw error;
  }


  return data.answer;
}



/**
 * Main function used by Chat UI
 */
export async function sendMessage(
  question
) {


  try {


    // 1. Create question embedding

    const embedding =
      await createQueryEmbedding(
        question
      );



    // 2. Search database

    const chunks =
      await searchSimilarChunks(
        embedding
      );



    if (
      !chunks ||
      chunks.length === 0
    ) {

      return "متأسفانه اطلاعاتی مرتبط با این سوال در اسناد پیدا نشد.";

    }



    // 3. Prepare context

    const context =
      chunks
        .map(
          item => item.content
        )
        .join("\n\n");



    // 4. Ask AI

    const answer =
      await askAI(
        question,
        context
      );


    return answer;



  } catch(error){

    console.error(
      "Send message failed:",
      error
    );


    return "خطایی در ارتباط با هوش مصنوعی رخ داد.";

  }

}