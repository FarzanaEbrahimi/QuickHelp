import {
  Sparkles,
  Rocket,
  BrainCircuit,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Built For Modern Teams",
    text: "QuickHelp helps businesses create smarter support experiences without complex setups.",
    gradient: "from-blue-500 to-cyan-500",
    background: "from-blue-50 via-white to-cyan-50",
    darkBackground:
      "dark:from-blue-950/50 dark:via-slate-900 dark:to-cyan-950/30",
    border: "hover:border-blue-200 dark:hover:border-blue-900",
  },
  {
    icon: BrainCircuit,
    title: "Knowledge Driven AI",
    text: "Turn existing business knowledge into an intelligent assistant that understands your data.",
    gradient: "from-violet-500 to-purple-500",
    background: "from-violet-50 via-white to-purple-50",
    darkBackground:
      "dark:from-violet-950/50 dark:via-slate-900 dark:to-purple-950/30",
    border: "hover:border-violet-200 dark:hover:border-violet-900",
  },
  {
    icon: Zap,
    title: "Faster Customer Experience",
    text: "Help customers get accurate answers faster while reducing repetitive support work.",
    gradient: "from-emerald-500 to-green-500",
    background: "from-emerald-50 via-white to-green-50",
    darkBackground:
      "dark:from-emerald-950/50 dark:via-slate-900 dark:to-green-950/30",
    border: "hover:border-emerald-200 dark:hover:border-emerald-900",
  },
];

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        transition-colors
        duration-300
        sm:py-24
        lg:py-28
        dark:bg-slate-950
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-32
            top-24
            h-72
            w-72
            rounded-full
            bg-blue-500/5
            blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-20
            h-72
            w-72
            rounded-full
            bg-violet-500/5
            blur-3xl
            dark:bg-violet-500/10
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ====================================================== */}
        {/* Header */}
        {/* ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-blue-700
              sm:text-sm
              dark:bg-blue-950/60
              dark:text-blue-300
            "
          >
            <Sparkles className="h-4 w-4" />
            ABOUT QUICKHELP
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              sm:text-4xl
              md:text-5xl
              dark:text-white
            "
          >
            Building Smarter
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Customer Support
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
              dark:text-slate-300
            "
          >
            QuickHelp was created to help businesses transform their
            existing knowledge into a smarter support experience powered
            by artificial intelligence.
          </p>
        </div>

        {/* ====================================================== */}
        {/* Main Content */}
        {/* ====================================================== */}

        <div
          className="
            mt-14
            grid
            gap-8
            sm:mt-16
            lg:mt-20
            lg:grid-cols-2
            lg:items-center
            lg:gap-10
          "
        >

          {/* ==================================================== */}
          {/* Why QuickHelp */}
          {/* ==================================================== */}

          <div
            className="
              rounded-3xl
              border
              border-blue-100
              bg-gradient-to-br
              from-blue-50
              via-white
              to-slate-50
              p-7
              shadow-sm
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-xl

              sm:p-8
              lg:p-10

              dark:border-blue-900/50
              dark:from-blue-950/40
              dark:via-slate-900
              dark:to-slate-900
              dark:hover:border-blue-900
            "
          >

            {/* Icon */}

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-cyan-500
                text-white
                shadow-lg
              "
            >
              <Sparkles className="h-6 w-6" />
            </div>

            {/* Title */}

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              Why QuickHelp?
            </h3>

            {/* Paragraph 1 */}

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                sm:leading-8
                dark:text-slate-300
              "
            >
              Customer support teams often spend valuable time answering
              the same questions repeatedly. QuickHelp focuses on making
              that process faster, smarter, and more efficient.
            </p>

            {/* Paragraph 2 */}

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                sm:leading-8
                dark:text-slate-300
              "
            >
              By combining artificial intelligence with business knowledge,
              companies can deliver better experiences while keeping their
              information organized and accessible.
            </p>

            {/* Bottom Accent */}

            <div
              className="
                mt-7
                h-1
                w-12
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-cyan-500
                transition-all
                duration-300
                hover:w-20
              "
            />
          </div>

          {/* ==================================================== */}
          {/* Values */}
          {/* ==================================================== */}

          <div className="grid gap-5 sm:gap-6">

            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    group
                    flex
                    gap-4
                    rounded-3xl
                    border
                    border-slate-200
                    bg-gradient-to-br
                    ${item.background}
                    ${item.darkBackground}
                    p-5
                    shadow-sm
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-xl

                    ${item.border}

                    sm:gap-5
                    sm:p-6

                    dark:border-slate-800
                  `}
                >

                  {/* Icon */}

                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.gradient}
                      shadow-md
                      transition-transform
                      duration-300
                      group-hover:scale-105

                      sm:h-14
                      sm:w-14
                    `}
                  >
                    <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                  </div>

                  {/* Content */}

                  <div className="min-w-0">

                    <h4
                      className="
                        text-lg
                        font-bold
                        text-slate-900
                        sm:text-xl
                        dark:text-white
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-7
                        text-slate-600
                        sm:text-base
                        dark:text-slate-300
                      "
                    >
                      {item.text}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;