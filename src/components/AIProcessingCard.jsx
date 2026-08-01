import {
  BrainCircuit,
  Sparkles,
  MessageSquareText,
  CheckCircle2,
  Cpu,
  Zap,
  Activity,
} from "lucide-react";


function AIProcessingCard({
  testChat,
}) {


  const handleGenerate = () => {
    console.log("Generate embeddings clicked");
  };


  return (

    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >


      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          p-8
        "
      >

        <div className="flex items-center gap-4">


          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-orange-500
              via-pink-500
              to-purple-600
              text-white
              shadow-lg
            "
          >

            <BrainCircuit className="h-8 w-8"/>

          </div>


          <div>

            <h2
              className="
                text-2xl
                font-black
                text-slate-900
              "
            >
              AI Processing
            </h2>


            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Intelligence engine status
            </p>


          </div>


        </div>


        <span
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-emerald-100
            px-4
            py-2
            text-xs
            font-bold
            text-emerald-700
          "
        >

          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/>

          ONLINE

        </span>


      </div>
            {/* AI Status */}

      <div className="px-8 pb-8">

        <div
          className="
            rounded-3xl
            border
            border-slate-200
            bg-slate-50
            p-6
          "
        >

          {/* AI Engine */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-orange-100
                "
              >

                <Cpu className="h-6 w-6 text-orange-600"/>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  AI Engine
                </p>

                <h3 className="font-bold text-slate-900">
                  OpenRouter + RAG
                </h3>

              </div>

            </div>

            <CheckCircle2 className="h-6 w-6 text-emerald-500"/>

          </div>

          {/* Embedding */}

          <div className="mt-6 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-violet-100
                "
              >

                <Zap className="h-6 w-6 text-violet-600"/>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Embedding Status
                </p>

                <h3 className="font-bold text-slate-900">
                  Ready
                </h3>

              </div>

            </div>

            <span
              className="
                rounded-full
                bg-emerald-100
                px-3
                py-1
                text-xs
                font-bold
                text-emerald-700
              "
            >
              ACTIVE
            </span>

          </div>

          {/* Progress */}

          <div className="mt-8">

            <div className="mb-2 flex items-center justify-between">

              <span className="text-sm font-semibold text-slate-700">
                AI Processing
              </span>

              <span className="text-sm font-bold text-blue-600">
                100%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="
                  h-full
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-emerald-500
                "
              />

            </div>

            <p className="mt-3 text-sm text-slate-500">
              Your AI knowledge base is fully indexed and ready to answer customer questions.
            </p>

          </div>

        </div>
                {/* Action Buttons */}

        <div className="mt-7 space-y-4">

          <button
            onClick={handleGenerate}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              py-4
              font-bold
              text-white
              shadow-lg
              shadow-blue-200
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <Sparkles className="h-5 w-5" />

            Generate Embeddings
          </button>

          <button
            onClick={testChat}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              py-4
              font-bold
              text-slate-700
              transition-all
              duration-300
              hover:border-blue-300
              hover:bg-blue-50
            "
          >
            <MessageSquareText className="h-5 w-5 text-blue-600" />

            Test AI Assistant
          </button>

        </div>

        {/* Footer */}

        <div
          className="
            mt-8
            rounded-3xl
            bg-gradient-to-r
            from-slate-900
            to-slate-800
            p-5
            text-white
          "
        >

          <div className="flex items-center gap-3">

            <Activity className="h-5 w-5 text-cyan-400" />

            <span className="font-bold">
              System Activity
            </span>

          </div>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-slate-300
            "
          >
            QuickHelp AI is connected successfully. Documents are indexed,
            embeddings are available, and the assistant is ready to answer
            customer questions instantly.
          </p>

        </div>

      </div>

    </div>

  );

}

export default AIProcessingCard;