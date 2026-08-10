import {
  MessageSquareText,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function AIProcessingCard({ testChat }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-lg
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-slate-200
          p-7
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-emerald-100
              text-emerald-600
            "
          >
            <Sparkles className="h-7 w-7" />
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-black
                text-slate-900
              "
            >
              AI Assistant
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Your assistant is ready to answer questions.
            </p>
          </div>
        </div>
      </div>

      {/* Status */}

      <div className="p-6">
        <div
          className="
            rounded-2xl
            bg-emerald-50
            p-5
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-white
                shadow-sm
              "
            >
              <CheckCircle2
                className="
                  h-6
                  w-6
                  text-emerald-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-emerald-700
                "
              >
                Status
              </p>

              <h3
                className="
                  mt-1
                  text-xl
                  font-black
                  text-slate-900
                "
              >
                Ready
              </h3>
            </div>
          </div>

          <p
            className="
              mt-4
              text-sm
              leading-6
              text-emerald-700
            "
          >
            Your AI assistant is ready to answer questions
            using your uploaded documents.
          </p>
        </div>

        {/* Action */}

        <button
          type="button"
          onClick={testChat}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            py-3
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-md
          "
        >
          <MessageSquareText className="h-5 w-5" />

          Try the AI Assistant
        </button>
      </div>
    </div>
  );
}

export default AIProcessingCard;