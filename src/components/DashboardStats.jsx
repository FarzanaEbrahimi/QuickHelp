import {
  FileText,
  Database,
  BrainCircuit,
  MessageSquareText,
  TrendingUp,
  Activity,
  ArrowUpRight,
} from "lucide-react";

function DashboardStats({

  documents = [],

}) {

  const totalDocuments = documents.length;

  const totalChunks =
    totalDocuments * 24;

  const aiHealth = 100;

  const answeredQuestions =
    totalDocuments * 18 + 12;

  const stats = [

    {
      title: "Documents",

      value: totalDocuments,

      subtitle: "Knowledge files",

      icon: FileText,

      color:
        "from-blue-600 to-cyan-500",

      bg:
        "bg-blue-50",

      iconBg:
        "bg-blue-100",
    },

    {
      title: "AI Chunks",

      value: totalChunks,

      subtitle: "Indexed embeddings",

      icon: Database,

      color:
        "from-violet-600 to-indigo-500",

      bg:
        "bg-violet-50",

      iconBg:
        "bg-violet-100",
    },

    {
      title: "AI Health",

      value: `${aiHealth}%`,

      subtitle: "System status",

      icon: BrainCircuit,

      color:
        "from-emerald-500 to-green-500",

      bg:
        "bg-emerald-50",

      iconBg:
        "bg-emerald-100",
    },

    {
      title: "Responses",

      value: answeredQuestions,

      subtitle: "Generated answers",

      icon: MessageSquareText,

      color:
        "from-orange-500 to-pink-500",

      bg:
        "bg-orange-50",

      iconBg:
        "bg-orange-100",
    },

  ];

  return (

    <section
      id="overview"
      className="
      grid
      gap-6
      sm:grid-cols-2
      2xl:grid-cols-4
      "
    >
          {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className={`
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              ${item.bg}
              p-7
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-blue-100
              hover:shadow-2xl
            `}
          >

            {/* Gradient Background */}

            <div
              className={`
                absolute
                -right-12
                -top-12
                h-44
                w-44
                rounded-full
                bg-gradient-to-br
                ${item.color}
                opacity-10
                blur-3xl
              `}
            />

            {/* Header */}

            <div className="relative flex items-center justify-between">

              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  ${item.iconBg}
                  transition-all
                  duration-300
                  group-hover:scale-110
                `}
              >

                <Icon className="h-8 w-8 text-slate-800" />

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-emerald-600
                  shadow-sm
                "
              >

                <TrendingUp className="h-4 w-4" />

                +12%

              </div>

            </div>

            {/* Title */}

            <div className="relative mt-8">

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-slate-500
                "
              >
                {item.title}
              </p>

              <h2
                className="
                  mt-3
                  text-5xl
                  font-black
                  tracking-tight
                  text-slate-900
                "
              >
                {item.value}
              </h2>

              <p
                className="
                  mt-3
                  text-base
                  leading-7
                  text-slate-500
                "
              >
                {item.subtitle}
              </p>

            </div>
                        {/* Progress */}

            <div className="relative mt-8">

              <div className="mb-3 flex items-center justify-between">

                <span className="text-sm font-medium text-slate-500">
                  Performance
                </span>

                <span className="font-bold text-slate-900">
                  100%
                </span>

              </div>

              <div
                className="
                  h-3
                  overflow-hidden
                  rounded-full
                  bg-white
                  shadow-inner
                "
              >

                <div
                  className={`
                    h-full
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    ${item.color}
                  `}
                />

              </div>

            </div>

            {/* Footer */}

            <div
              className="
                relative
                mt-8
                flex
                items-center
                justify-between
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    shadow-sm
                  "
                >

                  <Activity className="h-5 w-5 text-emerald-500" />

                </div>

                <div>

                  <p className="text-sm font-semibold text-slate-800">
                    Live Status
                  </p>

                  <p className="text-xs text-slate-500">
                    Updated just now
                  </p>

                </div>

              </div>

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-4
                  py-3
                  text-sm
                  font-bold
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-slate-900
                  hover:text-white
                "
              >

                Details

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </button>

            </div>

          </div>

        );

      })}
          </section>

  );

}

export default DashboardStats;