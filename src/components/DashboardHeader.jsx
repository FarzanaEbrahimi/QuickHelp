import { Search, Sparkles } from "lucide-react";
import { useMemo, useEffect, useState } from "react";

function DashboardHeader({
  userName = "Farzana",
  onSearch,
  showSearch = true,
}) {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";

    return "Good evening";
  }, []);

  const [workspaceName, setWorkspaceName] = useState(() => {
    return (
      localStorage.getItem(
        "quickhelp-workspace-name"
      ) || "QuickHelp Workspace"
    );
  });

  useEffect(() => {
    const syncWorkspaceName = () => {
      setWorkspaceName(
        localStorage.getItem(
          "quickhelp-workspace-name"
        ) || "QuickHelp Workspace"
      );
    };

    window.addEventListener(
      "quickhelp-settings-updated",
      syncWorkspaceName
    );

    window.addEventListener(
      "storage",
      syncWorkspaceName
    );

    return () => {
      window.removeEventListener(
        "quickhelp-settings-updated",
        syncWorkspaceName
      );

      window.removeEventListener(
        "storage",
        syncWorkspaceName
      );
    };
  }, []);

  return (
    <header
      className="
        relative
        overflow-hidden
        border-b
        border-slate-200
        bg-gradient-to-r
        from-white
        via-blue-50/50
        to-cyan-50/70
        transition-all
        duration-300

        dark:border-slate-800
        dark:bg-gradient-to-r
        dark:from-slate-950
        dark:via-slate-900
        dark:to-blue-950/40
      "
    >
      {/* ==================================================
          Decorative Background
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Blue Glow */}

        <div
          className="
            absolute
            -right-20
            -top-28
            h-72
            w-72
            rounded-full
            bg-blue-400/10
            blur-3xl

            dark:bg-blue-500/10
          "
        />

        {/* Cyan Glow */}

        <div
          className="
            absolute
            -bottom-32
            left-1/3
            h-72
            w-72
            rounded-full
            bg-cyan-400/10
            blur-3xl

            dark:bg-cyan-400/10
          "
        />

        {/* Very subtle center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-56
            w-56
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-300/5
            blur-3xl

            dark:bg-blue-500/5
          "
        />
      </div>

      {/* ==================================================
          Header Container
      ================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1700px]
          px-5
          py-7

          lg:px-8
          lg:py-8

          xl:px-10
        "
      >
        <div
          className={`
            flex
            flex-col
            gap-6

            ${
              showSearch
                ? "xl:flex-row xl:items-center xl:justify-between"
                : ""
            }
          `}
        >
          {/* ==================================================
              Welcome Content
          ================================================== */}

          <div>
            {/* Workspace Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-white/80
                px-3
                py-1.5
                text-xs
                font-bold
                text-blue-700
                shadow-sm
                backdrop-blur-sm

                dark:border-blue-800/50
                dark:bg-slate-900/70
                dark:text-blue-300
              "
            >
              <Sparkles
                className="
                  h-3.5
                  w-3.5
                  text-blue-500

                  dark:text-blue-400
                "
              />

              <span className="max-w-[220px] truncate">
                {workspaceName}
              </span>
            </div>

            {/* Greeting */}

            <h1
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900

                dark:text-slate-50

                sm:text-4xl
                lg:text-5xl
              "
            >
              {greeting},{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-500
                  bg-clip-text
                  text-transparent

                  dark:from-blue-400
                  dark:via-cyan-400
                  dark:to-cyan-300
                "
              >
                {userName}
              </span>

              <span className="ml-1 inline-block">
                👋
              </span>
            </h1>

            {/* Subtitle */}

            <p
              className="
                mt-3
                max-w-xl
                text-base
                font-medium
                leading-7
                text-slate-600

                dark:text-slate-300

                sm:text-lg
              "
            >
              Your workspace is ready.
              <span
                className="
                  ml-2
                  hidden
                  text-slate-400

                  dark:text-slate-500

                  sm:inline
                "
              >
                Manage your knowledge and AI tools
                from one place.
              </span>
            </p>
          </div>

          {/* ==================================================
              Search
          ================================================== */}

          {showSearch && (
            <div
              className="
                group
                flex
                w-full
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white/90
                px-4
                py-3
                shadow-sm
                backdrop-blur-sm
                transition-all
                duration-300

                hover:border-blue-200
                hover:shadow-md

                focus-within:border-blue-300
                focus-within:ring-4
                focus-within:ring-blue-500/10

                dark:border-slate-700
                dark:bg-slate-900/90
                dark:hover:border-blue-800
                dark:hover:shadow-black/20
                dark:focus-within:border-blue-500/50

                xl:max-w-[520px]
              "
            >
              {/* Search Icon */}

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                  transition-colors

                  group-focus-within:bg-blue-100

                  dark:bg-blue-500/10
                  dark:text-blue-400
                  dark:group-focus-within:bg-blue-500/20
                "
              >
                <Search className="h-4.5 w-4.5" />
              </div>

              {/* Input */}

              <input
                type="text"
                placeholder="Search documents..."
                onChange={(e) =>
                  onSearch?.(e.target.value)
                }
                className="
                  w-full
                  bg-transparent
                  text-sm
                  font-medium
                  text-slate-700
                  outline-none

                  placeholder:text-slate-400

                  dark:text-slate-100
                  dark:placeholder:text-slate-500
                "
              />

              

            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;