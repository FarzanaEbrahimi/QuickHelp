import "@supabase/functions-js/edge-runtime.d.ts";


const OPENROUTER_API_KEY = Deno.env.get(
  "OPENROUTER_API_KEY"
);



const corsHeaders = {

  "Access-Control-Allow-Origin": "*",

  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",

};



Deno.serve(async (req) => {


  if (req.method === "OPTIONS") {

    return new Response(
      "ok",
      {
        headers: corsHeaders,
      }
    );

  }



  try {


    if (!OPENROUTER_API_KEY) {

      throw new Error(
        "Missing OpenRouter API Key"
      );

    }



    const { text } = await req.json();



    if (!text) {

      return new Response(

        JSON.stringify({
          error: "Text is required"
        }),

        {
          status: 400,

          headers: {
            ...corsHeaders,
            "Content-Type": "application/json"
          }
        }

      );

    }




    const response = await fetch(

      "https://openrouter.ai/api/v1/embeddings",

      {

        method: "POST",


        headers: {

          "Authorization":
            `Bearer ${OPENROUTER_API_KEY}`,

          "Content-Type":
            "application/json"

        },


        body: JSON.stringify({

          model:
            "openai/text-embedding-3-small",

          input: text

        })

      }

    );




    const data = await response.json();




    if (!response.ok) {

      throw new Error(
        JSON.stringify(data)
      );

    }




    const embedding =
      data.data?.[0]?.embedding;



    if (!embedding) {

      throw new Error(
        "Embedding was not returned"
      );

    }




    return new Response(

      JSON.stringify({

        embedding

      }),

      {

        headers: {

          ...corsHeaders,

          "Content-Type":
            "application/json"

        }

      }

    );




  } catch(error) {


    return new Response(

      JSON.stringify({

        error:
          error.message

      }),

      {

        status: 500,


        headers: {

          ...corsHeaders,

          "Content-Type":
            "application/json"

        }

      }

    );


  }


});