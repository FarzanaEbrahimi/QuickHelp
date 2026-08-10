import { Search } from "lucide-react";
import { useMemo } from "react";

function DashboardHeader({
  userName = "Farzana",
  onSearch,
}) {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";

    return "Good evening";
  }, []);

  return (
    <header className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-blue-500/5
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-32
            left-1/4
            h-64
            w-64
            rounded-full
            bg-cyan-400/5
            blur-3xl
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-[1700px]
          px-6
          py-8
          lg:px-10
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6
            xl:flex-row
            xl:items-center
            xl:justify-between
          "
        >
          {/* Welcome */}

          <div>
            <h1
              className="
                text-3xl
                font-black
                tracking-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              {greeting},{" "}
              <span className="text-blue-600">
                {userName}
              </span>{" "}
              👋
            </h1>

            <p
              className="
                mt-3
                text-base
                leading-7
                text-slate-500
                sm:text-lg
              "
            >
              Your workspace is ready.
            </p>
          </div>

          {/* Search */}

          <div
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              shadow-sm
              transition
              focus-within:border-blue-300
              focus-within:ring-4
              focus-within:ring-blue-500/10
              xl:max-w-[520px]
            "
          >
            <Search
              className="
                h-5
                w-5
                shrink-0
                text-slate-400
              "
            />

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
                text-slate-700
                outline-none
                placeholder:text-slate-400
              "
            />

            <span
              className="
                hidden
                shrink-0
                rounded-lg
                bg-slate-100
                px-2.5
                py-1.5
                text-[11px]
                font-semibold
                text-slate-500
                sm:block
              "
            >
              Ctrl K
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;