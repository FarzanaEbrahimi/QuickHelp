import { Ticket, Clock3, Smile } from "lucide-react";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Ticket,
    number: 15000,
    suffix: "+",
    title: "Support Tickets",
    description: "Questions answered by AI",
    color: "from-blue-500 to-cyan-500",
    background: "from-blue-50 via-white to-cyan-50",
    darkBackground:
      "dark:from-blue-950/50 dark:via-slate-900 dark:to-cyan-950/30",
    glow: "bg-blue-400/10 dark:bg-blue-500/10",
    hoverBorder:
      "hover:border-blue-200 dark:hover:border-blue-900",
  },
  {
    icon: Clock3,
    number: 2,
    suffix: " sec",
    title: "Response Time",
    description: "Average AI response",
    color: "from-violet-500 to-purple-500",
    background: "from-violet-50 via-white to-purple-50",
    darkBackground:
      "dark:from-violet-950/50 dark:via-slate-900 dark:to-purple-950/30",
    glow: "bg-violet-400/10 dark:bg-violet-500/10",
    hoverBorder:
      "hover:border-violet-200 dark:hover:border-violet-900",
  },
  {
    icon: Smile,
    number: 99,
    suffix: "%",
    title: "Customer Satisfaction",
    description: "Positive feedback",
    color: "from-emerald-500 to-green-500",
    background: "from-emerald-50 via-white to-green-50",
    darkBackground:
      "dark:from-emerald-950/50 dark:via-slate-900 dark:to-green-950/30",
    glow: "bg-emerald-400/10 dark:bg-emerald-500/10",
    hoverBorder:
      "hover:border-emerald-200 dark:hover:border-emerald-900",
  },
];

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="
        bg-gradient-to-b
        from-slate-50
        to-white
        py-16
        transition-colors
        duration-300

        sm:py-20
        lg:py-24
        xl:py-28

        dark:from-slate-950
        dark:to-slate-900
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
            RESULTS
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
            QuickHelp in Numbers
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
            Helping businesses save time with fast, intelligent customer
            support.
          </p>
        </div>

        {/* Stats Cards */}

        <div
          className="
            mt-12
            grid
            gap-5

            sm:mt-14
            sm:grid-cols-2
            sm:gap-6

            lg:mt-18
            lg:grid-cols-3
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
                  isolate
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-gradient-to-br
                  ${item.background}
                  ${item.darkBackground}
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300

                  sm:p-7

                  hover:-translate-y-2
                  hover:shadow-xl

                  ${item.hoverBorder}

                  dark:border-slate-800
                `}
              >
                {/* Soft Color Glow */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    -z-10
                    h-32
                    w-32
                    rounded-full
                    blur-3xl
                    ${item.glow}
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    mx-auto
                    flex
                    h-18
                    w-18
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    ${item.color}
                    shadow-lg
                    shadow-slate-900/10
                    transition-transform
                    duration-300

                    sm:h-20
                    sm:w-20

                    group-hover:scale-105
                  `}
                >
                  <Icon
                    className="
                      h-9
                      w-9
                      text-white

                      sm:h-10
                      sm:w-10
                    "
                  />
                </div>

                {/* Number */}

                <h3
                  className="
                    mt-6
                    text-4xl
                    font-extrabold
                    tracking-tight
                    text-slate-900

                    sm:mt-7
                    sm:text-5xl
                    lg:text-6xl

                    dark:text-white
                  "
                >
                  <Counter
                    end={item.number}
                    start={inView}
                  />

                  {item.suffix}
                </h3>

                {/* Title */}

                <h4
                  className="
                    mt-3
                    text-xl
                    font-bold
                    text-slate-900

                    sm:mt-4
                    sm:text-2xl

                    dark:text-white
                  "
                >
                  {item.title}
                </h4>

                {/* Description */}

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-xs
                    text-sm
                    leading-7
                    text-slate-600

                    sm:text-base

                    dark:text-slate-300
                  "
                >
                  {item.description}
                </p>

                {/* Bottom Accent */}

                <div
                  className={`
                    mx-auto
                    mt-5
                    h-1
                    w-10
                    rounded-full
                    bg-gradient-to-r
                    ${item.color}
                    opacity-70
                    transition-all
                    duration-300

                    group-hover:w-16
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;