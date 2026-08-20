import {
  Bot,
  Database,
  Search,
  Upload,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat",
    text: "Answer customer questions instantly with AI-powered conversations.",
    color: "from-blue-500 to-cyan-500",
    background:
      "bg-gradient-to-br from-blue-50 via-white to-cyan-50",
    darkBackground:
      "dark:from-blue-950/40 dark:via-slate-900 dark:to-cyan-950/30",
    border:
      "hover:border-blue-200 dark:hover:border-blue-900",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    text: "Store FAQs, manuals and support documents in one place.",
    color: "from-violet-500 to-purple-500",
    background:
      "bg-gradient-to-br from-violet-50 via-white to-purple-50",
    darkBackground:
      "dark:from-violet-950/40 dark:via-slate-900 dark:to-purple-950/30",
    border:
      "hover:border-violet-200 dark:hover:border-violet-900",
  },
  {
    icon: Search,
    title: "Semantic Search",
    text: "Find the most relevant answers using vector similarity search.",
    color: "from-emerald-500 to-green-500",
    background:
      "bg-gradient-to-br from-emerald-50 via-white to-green-50",
    darkBackground:
      "dark:from-emerald-950/40 dark:via-slate-900 dark:to-green-950/30",
    border:
      "hover:border-emerald-200 dark:hover:border-emerald-900",
  },
  {
    icon: Upload,
    title: "Document Upload",
    text: "Upload PDFs and build your AI knowledge base in seconds.",
    color: "from-orange-500 to-amber-500",
    background:
      "bg-gradient-to-br from-orange-50 via-white to-amber-50",
    darkBackground:
      "dark:from-orange-950/40 dark:via-slate-900 dark:to-amber-950/30",
    border:
      "hover:border-orange-200 dark:hover:border-orange-900",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="
        bg-white
        py-16
        transition-colors
        duration-300

        sm:py-20
        lg:py-24
        xl:py-28

        dark:bg-slate-950
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-blue-700

              sm:px-5
              sm:text-sm

              dark:bg-blue-950/60
              dark:text-blue-300
            "
          >
            FEATURES
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900

              sm:text-4xl
              lg:text-5xl

              dark:text-white
            "
          >
            Everything You Need
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8

              dark:text-slate-300
            "
          >
            Powerful tools designed to automate customer support and
            deliver accurate AI responses.
          </p>
        </div>

        {/* Feature Cards */}

        <div
          className="
            mt-12
            grid
            gap-5

            sm:mt-14
            sm:grid-cols-2
            sm:gap-6

            lg:mt-18

            xl:grid-cols-4
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  p-6
                  shadow-sm
                  transition-all
                  duration-300

                  sm:p-7

                  ${feature.background}
                  ${feature.darkBackground}
                  ${feature.border}

                  hover:-translate-y-1
                  hover:shadow-xl

                  dark:border-slate-800
                `}
              >
                {/* Icon */}

                <div
                  className={`
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${feature.color}
                    shadow-lg
                    transition-transform
                    duration-300

                    sm:h-14
                    sm:w-14

                    group-hover:scale-105
                  `}
                >
                  <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900

                    sm:mt-7
                    sm:text-2xl

                    dark:text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-slate-600

                    sm:text-base

                    dark:text-slate-300
                  "
                >
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;