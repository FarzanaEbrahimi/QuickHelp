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
    .rpc(
      "search_document_chunks",
      {
        query_embedding: embedding,
        match_count: 5,
      }
    );
    console.log("RPC error:", error);
    console.log("RPC data:", data);
    console.log("Embedding length:", embedding.length);


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
async function askAI(question, context) {

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

  console.log("Chat data:", data);
  console.log("Chat error:", error);

  if (error) {

    if (error.context) {
      const text = await error.context.text();
      console.log("Function response:", text);
    }

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



    console.log(
      "Question embedding created:",
      embedding
    );




    // 2. Search database

    const chunks =
      await searchSimilarChunks(
        embedding
      );



    console.log(
      "Matched chunks:",
      chunks
    );



    if (
      !chunks ||
      chunks.length === 0
    ) {

      return "متأسفانه اطلاعات مرتبطی در اسناد پیدا نشد.";

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



  } catch(error) {


    console.error(
      "Send message failed:",
      error
    );


    return "خطایی در ارتباط با هوش مصنوعی رخ داد.";

  }

}