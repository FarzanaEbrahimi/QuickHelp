import { supabase } from "../lib/supabase";

/**
 * Read saved AI preferences from localStorage.
 */
function getAISettings() {
  const savedStyle =
    localStorage.getItem("quickhelp-response-style") ||
    "Professional";

  const savedSourceCount =
    localStorage.getItem("quickhelp-source-count") ||
    "5";

  const allowedStyles = [
    "Professional",
    "Friendly",
    "Concise",
  ];

  const responseStyle = allowedStyles.includes(savedStyle)
    ? savedStyle
    : "Professional";

  const parsedSourceCount = Number(savedSourceCount);

  const sourceCount =
    Number.isInteger(parsedSourceCount) &&
    parsedSourceCount >= 1 &&
    parsedSourceCount <= 10
      ? parsedSourceCount
      : 5;

  return {
    responseStyle,
    sourceCount,
  };
}

/**
 * Create embedding for user question.
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
    console.error("Embedding error:", error);
    throw error;
  }

  if (!data?.embedding) {
    throw new Error("No embedding returned from create-embedding.");
  }

  return data.embedding;
}

/**
 * Search relevant chunks from database.
 */
async function searchSimilarChunks(
  embedding,
  matchCount
) {
  const { data, error } = await supabase.rpc(
    "search_document_chunks",
    {
      query_embedding: embedding,
      match_count: matchCount,
    }
  );

  console.log("RPC error:", error);
  console.log("RPC data:", data);
  console.log("Embedding length:", embedding?.length);
  console.log("Requested source count:", matchCount);

  if (error) {
    console.error("Vector search error:", error);
    throw error;
  }

  return data || [];
}

/**
 * Convert Response Style setting into an instruction
 * that is included in the actual AI question.
 */
function getResponseStyleInstruction(responseStyle) {
  switch (responseStyle) {
    case "Friendly":
      return `
Respond in a warm, friendly, and helpful tone.
Keep the answer clear and natural.
Do not sound robotic.
`;

    case "Concise":
      return `
Respond concisely and directly.
Focus only on the information needed to answer the user's question.
Avoid unnecessary explanations or repetition.
`;

    case "Professional":
    default:
      return `
Respond in a professional, clear, and accurate tone.
Use well-structured answers and avoid unnecessary wording.
`;
  }
}

/**
 * Send context + question to AI chat function.
 */
async function askAI(
  question,
  context,
  responseStyle
) {
  const styleInstruction =
    getResponseStyleInstruction(responseStyle);

  const aiQuestion = `
${styleInstruction}

User question:
${question}
`.trim();

  const { data, error } =
    await supabase.functions.invoke(
      "chat",
      {
        body: {
          question: aiQuestion,
          context,
        },
      }
    );

  console.log("Chat data:", data);
  console.log("Chat error:", error);
  console.log("Response style:", responseStyle);

  if (error) {
    if (error.context) {
      try {
        const text = await error.context.text();
        console.log(
          "Function response:",
          text
        );
      } catch (contextError) {
        console.error(
          "Could not read function response:",
          contextError
        );
      }
    }

    throw error;
  }

  if (!data?.answer) {
    throw new Error("No answer returned from chat function.");
  }

  return data.answer;
}

/**
 * Main function used by Chat UI.
 */
export async function sendMessage(question) {
  try {
    // Read the latest saved settings on every message.
    const {
      responseStyle,
      sourceCount,
    } = getAISettings();

    // 1. Create question embedding
    // IMPORTANT:
    // We embed the original question, not the style instruction.
    const embedding =
      await createQueryEmbedding(question);

    console.log(
      "Question embedding created:",
      embedding
    );

    // 2. Search database using selected source count
    const chunks =
      await searchSimilarChunks(
        embedding,
        sourceCount
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
    const context = chunks
      .map((item) => item.content)
      .filter(Boolean)
      .join("\n\n");

    // 4. Ask AI using selected response style
    const answer =
      await askAI(
        question,
        context,
        responseStyle
      );

    return answer;
  } catch (error) {
    console.error(
      "Send message failed:",
      error
    );

    return "خطایی در ارتباط با هوش مصنوعی رخ داد.";
  }
}