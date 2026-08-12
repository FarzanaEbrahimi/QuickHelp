import {
  FileText,
  Bot,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

function DashboardStats({ documents = [] }) {
  const totalDocuments = documents.length;

  const stats = [
    {
      title: "Documents",
      value: totalDocuments,
      subtitle:
        totalDocuments === 1
          ? "1 document added"
          : `${totalDocuments} documents added`,

      icon: FileText,

      // Light Mode
      cardBackground:
        "from-blue-50 via-white to-cyan-50",

      // Dark Mode
      darkCardBackground:
        "dark:from-blue-500/[0.08] dark:via-slate-900 dark:to-cyan-500/[0.06]",

      iconBackground:
        "bg-blue-100",

      darkIconBackground:
        "dark:bg-blue-500/15",

      iconColor:
        "text-blue-600",

      darkIconColor:
        "dark:text-blue-400",

      accent:
        "bg-blue-500",

      badge: null,
    },

    {
      title: "AI Assistant",
      value: "Ready",
      subtitle: "Ready to answer your questions",

      icon: Bot,

      // Light Mode
      cardBackground:
        "from-emerald-50 via-white to-cyan-50",

      // Dark Mode
      darkCardBackground:
        "dark:from-emerald-500/[0.08] dark:via-slate-900 dark:to-cyan-500/[0.06]",

      iconBackground:
        "bg-emerald-100",

      darkIconBackground:
        "dark:bg-emerald-500/15",

      iconColor:
        "text-emerald-600",

      darkIconColor:
        "dark:text-emerald-400",

      accent:
        "bg-emerald-500",

      badge: "Online",
    },
  ];

  return (
    <section
      className="
        grid
        gap-5

        sm:grid-cols-2
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
              rounded-[26px]
              border
              border-slate-200/80
              bg-gradient-to-br
              ${item.cardBackground}
              ${item.darkCardBackground}

              p-6

              shadow-[0_8px_30px_rgba(15,23,42,0.06)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-slate-300
              hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]

              dark:border-slate-800
              dark:shadow-black/20

              dark:hover:border-slate-700
              dark:hover:shadow-black/30

              sm:p-7
            `}
          >
            {/* ================================================= */}
            {/* Decorative Background */}
            {/* ================================================= */}

            <div
              className={`
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                blur-3xl

                ${item.iconBackground}
                opacity-40

                dark:opacity-20
              `}
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                h-32
                w-32
                rounded-full
                bg-white/50
                blur-3xl

                dark:bg-white/[0.02]
              "
            />

            {/* ================================================= */}
            {/* Top Row */}
            {/* ================================================= */}

            <div
              className="
                relative
                flex
                items-start
                justify-between
              "
            >
              {/* Icon */}

              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl

                  ${item.iconBackground}
                  ${item.darkIconBackground}

                  shadow-sm

                  transition-all
                  duration-300

                  group-hover:scale-105
                  group-hover:shadow-md
                `}
              >
                <Icon
                  className={`
                    h-6
                    w-6

                    ${item.iconColor}
                    ${item.darkIconColor}
                  `}
                />
              </div>

              {/* Small Top Badge */}

              {item.badge ? (
                <div
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-emerald-200
                    bg-white/80
                    px-2.5
                    py-1.5
                    text-[11px]
                    font-bold
                    text-emerald-600
                    shadow-sm
                    backdrop-blur-sm

                    dark:border-emerald-900/50
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-500

                      dark:bg-emerald-400
                    "
                  />

                  {item.badge}
                </div>
              ) : (
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/70
                    text-slate-400
                    opacity-0
                    transition-all
                    duration-300

                    group-hover:opacity-100

                    dark:bg-white/[0.03]
                    dark:text-slate-500
                  "
                >
                  <ArrowUpRight size={15} />
                </div>
              )}
            </div>

            {/* ================================================= */}
            {/* Content */}
            {/* ================================================= */}

            <div className="relative mt-7">
              <p
                className="
                  text-sm
                  font-bold
                  tracking-wide
                  text-slate-500

                  dark:text-slate-400
                "
              >
                {item.title}
              </p>

              <div className="mt-2 flex items-end gap-3">
                <h2
                  className="
                    text-4xl
                    font-black
                    tracking-tight
                    text-slate-900

                    dark:text-white

                    sm:text-[42px]
                  "
                >
                  {item.value}
                </h2>

                {item.title === "AI Assistant" && (
                  <div
                    className="
                      mb-1
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      bg-emerald-100
                      px-2
                      py-1
                      text-[11px]
                      font-bold
                      text-emerald-700

                      dark:bg-emerald-500/10
                      dark:text-emerald-400
                    "
                  >
                    <CheckCircle2 size={12} />

                    Active
                  </div>
                )}
              </div>

              <p
                className="
                  mt-2
                  text-sm
                  font-medium
                  leading-6
                  text-slate-500

                  dark:text-slate-400
                "
              >
                {item.subtitle}
              </p>
            </div>

            {/* ================================================= */}
            {/* Bottom Accent */}
            {/* ================================================= */}

            <div
              className={`
                absolute
                bottom-0
                left-0
                h-1
                w-full
                ${item.accent}
                opacity-80
                transition-all
                duration-300

                group-hover:h-1.5
                group-hover:opacity-100
              `}
            />

            {/* ================================================= */}
            {/* Corner Highlight */}
            {/* ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                h-24
                w-24
                translate-x-8
                translate-y-8
                rounded-full
                bg-white/30
                blur-2xl

                dark:bg-white/[0.03]
              "
            />
          </div>
        );
      })}
    </section>
  );
}

export default DashboardStats;