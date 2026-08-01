import {
  Database,
  FileText,
  Layers3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function KnowledgeCard({
  documents,
}) {

  const totalDocuments = documents.length;

  const totalChunks =
    totalDocuments * 24;

  return (

    <div
      className="
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

      <div className="p-8">

        <div className="flex items-center justify-between">

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
                from-violet-600
                to-indigo-500
                text-white
                shadow-lg
              "
            >

              <Database className="h-8 w-8" />

            </div>

            <div>

              <h2 className="text-2xl font-black text-slate-900">
                Knowledge Base
              </h2>

              <p className="mt-1 text-slate-500">
                AI Knowledge Center
              </p>

            </div>

          </div>

          <span
            className="
              rounded-full
              bg-violet-100
              px-4
              py-2
              text-xs
              font-bold
              text-violet-700
            "
          >
            LIVE
          </span>

        </div>
                {/* Stats */}

        <div className="mt-8 grid gap-5">

          {/* Documents */}

          <div
            className="
              flex
              items-center
              justify-between
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-5
              transition-all
              duration-300
              hover:border-violet-200
              hover:bg-white
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-100
                "
              >
                <FileText className="h-6 w-6 text-blue-600" />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Documents
                </p>

                <h3 className="text-2xl font-black text-slate-900">
                  {totalDocuments}
                </h3>

              </div>

            </div>

            <CheckCircle2 className="h-6 w-6 text-emerald-500" />

          </div>

          {/* Chunks */}

          <div
            className="
              flex
              items-center
              justify-between
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-5
              transition-all
              duration-300
              hover:border-violet-200
              hover:bg-white
            "
          >

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
                <Layers3 className="h-6 w-6 text-violet-600" />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  AI Chunks
                </p>

                <h3 className="text-2xl font-black text-slate-900">
                  {totalChunks}
                </h3>

              </div>

            </div>

            <Sparkles className="h-6 w-6 text-violet-500" />

          </div>

          {/* Status */}

          <div
            className="
              rounded-3xl
              bg-gradient-to-r
              from-emerald-500
              to-green-500
              p-6
              text-white
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-emerald-100">
                  AI Status
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Ready
                </h3>

              </div>

              <CheckCircle2 className="h-10 w-10" />

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">

              <div
                className="
                  h-full
                  w-full
                  rounded-full
                  bg-white
                "
              />

            </div>

            <p className="mt-3 text-sm text-emerald-100">
              Your knowledge base is fully synchronized and ready for AI search.
            </p>

          </div>

        </div>
      </div>
          </div>

  );
}

export default KnowledgeCard;