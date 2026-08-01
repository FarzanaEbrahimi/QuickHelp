import {
  Bell,
  Search,
  Sparkles,
  CalendarDays,
} from "lucide-react";

function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header
      className="
      sticky
      top-20
      z-20
      border-b
      border-slate-200
      bg-white/80
      backdrop-blur-xl
    "
    >
      <div className="flex flex-col gap-8 px-8 py-8 xl:flex-row xl:items-center xl:justify-between">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-3">

            <span className="rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Dashboard
            </span>

            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>

              <span className="text-xs font-semibold text-emerald-700">
                AI Ready
              </span>

            </div>

          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
            Welcome back, Farzana
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-slate-500 leading-8">
            Manage documents, monitor AI performance and build a smarter
            customer support experience.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

            <CalendarDays className="h-4 w-4" />

            {today}

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-wrap items-center gap-4">

          {/* SEARCH */}

          <div className="relative">

            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search documents..."
              className="
              h-12
              w-72
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              pl-12
              pr-5
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:bg-white
              focus:ring-4
              focus:ring-blue-100
            "
            />

          </div>

          {/* Notification */}

          <button
            className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            transition
            hover:border-blue-300
            hover:shadow-lg
          "
          >

            <Bell className="h-5 w-5 text-slate-700" />

            <span
              className="
              absolute
              right-3
              top-3
              h-2.5
              w-2.5
              rounded-full
              bg-red-500
            "
            />

          </button>

          {/* Profile */}

          <div
            className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-3
            py-2
            transition
            hover:shadow-lg
          "
          >

            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              font-bold
              text-white
            "
            >
              F
            </div>

            <div>

              <p className="font-semibold text-slate-900">
                Farzana
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>

            </div>

            <Sparkles className="h-5 w-5 text-blue-500" />

          </div>

        </div>

      </div>
    </header>
  );
}

export default DashboardHeader;