import {
  Sparkles,
  Bell,
  Search,
  Plus,
  Activity,
  Cpu,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import { useMemo } from "react";

function DashboardHeader({
  documents = [],
  userName = "Farzana",
  workspace = "Pro",
  aiStatus = "Online",
}) {

  const greeting = useMemo(() => {

    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";

    if (hour < 18) return "Good Afternoon";

    return "Good Evening";

  }, []);

  const today = useMemo(() => {

    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  }, []);

  const totalDocs = documents.length;

  return (

    <header
      className="
      relative
      overflow-hidden
      border-b
      border-slate-200
      bg-gradient-to-br
      from-slate-50
      via-white
      to-blue-50
      "
    >

      {/* Background */}

      <div
        className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        "
      >

        <div
          className="
          absolute
          -top-28
          -right-28
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-0
          left-20
          h-52
          w-52
          rounded-full
          bg-cyan-400/10
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
              {/* Top Row */}

        <div
          className="
          flex
          flex-col
          gap-8
          xl:flex-row
          xl:items-center
          xl:justify-between
          "
        >

          {/* Left */}

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <span
                className="
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-blue-700
                "
              >
                Dashboard
              </span>

              <span
                className="
                flex
                items-center
                gap-2
                rounded-full
                bg-emerald-100
                px-4
                py-2
                text-xs
                font-bold
                text-emerald-700
                "
              >
                <Activity className="h-4 w-4" />

                {aiStatus}

              </span>

            </div>

            <h1
              className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              lg:text-5xl
              "
            >
              {greeting},{" "}
              <span className="text-blue-600">
                {userName}
              </span>
            </h1>

            <p
              className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
              "
            >
              Welcome back to your QuickHelp AI workspace.
              Upload documents, manage your knowledge base,
              and let AI answer customer questions instantly.
            </p>

            <div
              className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-6
              text-sm
              text-slate-500
              "
            >

              <div className="flex items-center gap-2">

                <CalendarDays className="h-5 w-5 text-blue-600" />

                {today}

              </div>

              <div className="flex items-center gap-2">

                <Cpu className="h-5 w-5 text-cyan-600" />

                Workspace

                <span className="font-bold text-slate-900">
                  {workspace}
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div
            className="
            flex
            w-full
            flex-col
            gap-5
            xl:w-[520px]
            "
          >

            {/* Search */}

            <div
              className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-4
              shadow-sm
              "
            >

              <Search className="h-5 w-5 text-slate-400" />

              <input
                type="text"
                placeholder="Search documents..."
                className="
                  w-full
                  bg-transparent
                  outline-none
                  placeholder:text-slate-400
                "
              />

              <button
                className="
                rounded-xl
                bg-slate-100
                px-3
                py-2
                text-xs
                font-semibold
                text-slate-500
                "
              >
                Ctrl K
              </button>

            </div>
                        {/* Actions */}

            <div className="grid gap-4 sm:grid-cols-2">

              {/* Notifications */}

              <button
                className="
                group
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    "
                  >

                    <Bell className="h-7 w-7 text-blue-600" />

                  </div>

                  <div className="text-left">

                    <p className="text-sm text-slate-500">
                      Notifications
                    </p>

                    <h3 className="mt-1 text-lg font-black text-slate-900">
                      3 New
                    </h3>

                  </div>

                </div>

                <ChevronRight
                  className="
                  h-5
                  w-5
                  text-slate-400
                  transition-all
                  group-hover:translate-x-1
                  "
                />

              </button>

              {/* Upload */}

              <button
                className="
                group
                flex
                items-center
                justify-between
                rounded-3xl
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-indigo-600
                p-5
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/20
                    "
                  >

                    <Plus className="h-7 w-7" />

                  </div>

                  <div className="text-left">

                    <p className="text-sm text-blue-100">
                      Quick Action
                    </p>

                    <h3 className="mt-1 text-lg font-black">
                      Upload Document
                    </h3>

                  </div>

                </div>

                <ChevronRight
                  className="
                  h-5
                  w-5
                  transition-all
                  group-hover:translate-x-1
                  "
                />

              </button>

            </div>

            {/* Workspace Card */}

            <div
              className="
              overflow-hidden
              rounded-[28px]
              border
              border-blue-100
              bg-gradient-to-br
              from-white
              via-blue-50
              to-cyan-50
              p-6
              "
            >

              <div className="flex items-start justify-between">

                <div>

                  <p
                    className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-blue-600
                    "
                  >
                    Workspace Overview
                  </p>

                  <h3
                    className="
                    mt-3
                    text-3xl
                    font-black
                    text-slate-900
                    "
                  >
                    {totalDocs}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Documents indexed successfully
                  </p>

                </div>

                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  text-white
                  shadow-lg
                  "
                >

                  <Sparkles className="h-8 w-8" />

                </div>

              </div>

              <div className="mt-8">

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-sm text-slate-600">
                    Workspace Health
                  </span>

                  <span className="font-bold text-blue-600">
                    100%
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="
                    h-full
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-emerald-500
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* Bottom Banner */}

        <div
          className="
          mt-10
          rounded-[32px]
          bg-gradient-to-r
          from-slate-900
          via-slate-800
          to-slate-900
          p-8
          text-white
          shadow-2xl
          "
        >

          <div
            className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            "
          >

            <div>

              <p
                className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-cyan-300
                "
              >
                QUICKHELP AI
              </p>

              <h2
                className="
                mt-3
                text-3xl
                font-black
                leading-tight
                "
              >
                Your AI workspace is fully operational.
              </h2>

              <p
                className="
                mt-4
                max-w-2xl
                leading-8
                text-slate-300
                "
              >
                Upload new knowledge, generate embeddings,
                manage documents and provide instant AI-powered
                customer support from one professional dashboard.
              </p>

            </div>

            <div
              className="
              grid
              grid-cols-2
              gap-5
              lg:w-[360px]
              "
            >

              <div
                className="
                rounded-3xl
                bg-white/10
                p-5
                backdrop-blur
                "
              >

                <p className="text-sm text-slate-300">
                  Documents
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {totalDocs}
                </h3>

              </div>

              <div
                className="
                rounded-3xl
                bg-white/10
                p-5
                backdrop-blur
                "
              >

                <p className="text-sm text-slate-300">
                  Workspace
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {workspace}
                </h3>

              </div>

              <div
                className="
                rounded-3xl
                bg-white/10
                p-5
                backdrop-blur
                "
              >

                <p className="text-sm text-slate-300">
                  AI Status
                </p>

                <h3 className="mt-2 text-3xl font-black text-emerald-300">
                  {aiStatus}
                </h3>

              </div>

              <div
                className="
                rounded-3xl
                bg-white/10
                p-5
                backdrop-blur
                "
              >

                <p className="text-sm text-slate-300">
                  System
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Ready
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>

  );

}

export default DashboardHeader;
