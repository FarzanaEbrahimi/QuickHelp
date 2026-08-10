import {
  Database,
  FileText,
  CheckCircle2,
} from "lucide-react";

function KnowledgeCard({ documents = [] }) {
  const totalDocuments = documents.length;

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
              bg-violet-100
              text-violet-600
            "
          >
            <Database className="h-7 w-7" />
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-black
                text-slate-900
              "
            >
              Your Knowledge
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Information your AI assistant can use.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
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
              <FileText
                className="
                  h-5
                  w-5
                  text-violet-600
                "
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Documents
              </p>

              <p
                className="
                  mt-1
                  text-2xl
                  font-black
                  text-slate-900
                "
              >
                {totalDocuments}
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            rounded-2xl
            bg-emerald-50
            px-4
            py-3
            text-sm
            font-medium
            text-emerald-700
          "
        >
          <CheckCircle2
            className="
              h-5
              w-5
              shrink-0
            "
          />

          <span>
            Your documents are ready to use.
          </span>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeCard;