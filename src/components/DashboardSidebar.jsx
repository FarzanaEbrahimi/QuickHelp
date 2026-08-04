import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  UploadCloud,
  Database,
  BrainCircuit,
  MessageSquareText,
  Settings,
  ArrowLeft,
  Sparkles,
  ChevronRight,
  Cpu,
  LogOut
} from "lucide-react";

function DashboardSidebar({
  onNavigate,
}) {

  const location = useLocation();

  const currentPath = location.pathname;

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      section: null,
      path: "/dashboard",
    },
    {
      id: "upload",
      label: "Upload Center",
      icon: UploadCloud,
      section: "upload",
    },
    {
      id: "knowledge",
      label: "Knowledge Base",
      icon: Database,
      section: "knowledge",
    },
    {
      id: "processing",
      label: "AI Processing",
      icon: BrainCircuit,
      section: "processing",
    },
    {
      id: "documents",
      label: "Documents",
      icon: Cpu,
      section: "documents",
    },
    {
      id: "chat",
      label: "AI Assistant",
      icon: MessageSquareText,
      section: "chat",
    },
  ];

  return (

    <aside
      className="
      sticky
      top-20
      hidden
      h-[calc(100vh-5rem)]
      w-[290px]
      shrink-0
      border-r
      border-slate-200
      bg-white
      xl:flex
      xl:flex-col
      "
    >

      {/* Logo */}

      <div
        className="
        border-b
        border-slate-200
        px-8
        py-8
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
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            via-cyan-500
            to-indigo-600
            text-white
            shadow-lg
            "
          >

            <Sparkles className="h-7 w-7"/>

          </div>

          <div>

            <h2
              className="
              text-xl
              font-black
              text-slate-900
              "
            >
              QuickHelp AI
            </h2>

            <p
              className="
              mt-1
              text-sm
              text-slate-500
              "
            >
              Business Dashboard
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div
        className="
        flex-1
        overflow-y-auto
        px-5
        py-6
        "
      >

        <p
          className="
          mb-4
          px-4
          text-xs
          font-bold
          uppercase
          tracking-[0.2em]
          text-slate-400
          "
        >
          Workspace
        </p>
                <nav className="space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const active =
              item.path
                ? currentPath === item.path
                : false;

            return (

              <button
                key={item.id}
                onClick={() => {

                  if (item.section) {

                    onNavigate(item.section);

                  }

                }}
                className={`
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  px-4
                  py-4
                  text-left
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        text-white
                        shadow-lg
                        shadow-blue-600/20
                      `
                      : `
                        text-slate-600
                        hover:bg-slate-100
                        hover:text-slate-900
                      `
                  }
                `}
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      transition-all

                      ${
                        active
                          ? "bg-white/20"
                          : "bg-slate-100 group-hover:bg-white"
                      }
                    `}
                  >

                    <Icon className="h-5 w-5"/>

                  </div>

                  <div>

                    <p
                      className="
                        font-semibold
                        text-[15px]
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className={`
                        text-xs

                        ${
                          active
                            ? "text-blue-100"
                            : "text-slate-400"
                        }
                      `}
                    >

                      {item.id === "dashboard" && "Overview"}

                      {item.id === "upload" && "Upload files"}

                      {item.id === "knowledge" && "Knowledge base"}

                      {item.id === "processing" && "Embeddings"}

                      {item.id === "documents" && "Manage files"}

                      {item.id === "chat" && "Ask AI"}

                    </p>

                  </div>

                </div>

                <ChevronRight
                  className={`
                    h-5
                    w-5
                    transition-all

                    ${
                      active
                        ? "translate-x-1"
                        : "opacity-40 group-hover:translate-x-1"
                    }
                  `}
                />

              </button>

            );

          })}

        </nav>

        <div
          className="
            my-8
            border-t
            border-slate-200
          "
        />

        <p
          className="
            mb-4
            px-4
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-slate-400
          "
        >
          System
        </p>
                {/* AI Status */}

        <div
          className="
            rounded-[28px]
            bg-gradient-to-br
            from-blue-600
            via-cyan-500
            to-indigo-600
            p-6
            text-white
            shadow-xl
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-blue-100">
                AI Status
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Online
              </h3>

            </div>

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

              <BrainCircuit className="h-7 w-7"/>

            </div>

          </div>

          <div className="mt-6">

            <div className="mb-2 flex items-center justify-between">

              <span className="text-sm text-blue-100">
                System Health
              </span>

              <span className="font-bold">
                100%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/20">

              <div
                className="
                  h-full
                  w-full
                  rounded-full
                  bg-white
                "
              />

            </div>

          </div>

          <p
            className="
              mt-5
              text-sm
              leading-6
              text-blue-100
            "
          >
            Your AI assistant is connected and ready to answer
            questions using your uploaded knowledge base.
          </p>

        </div>

        {/* Quick Actions */}

        <div className="mt-8 space-y-3">

          <button
            onClick={() => onNavigate("upload")}
            className="
              flex
              w-full
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-4
              text-slate-700
              transition-all
              duration-300
              hover:border-blue-300
              hover:bg-blue-50
            "
          >

            <UploadCloud className="h-5 w-5 text-blue-600"/>

            <span className="font-semibold">
              Upload New Document
            </span>

          </button>

          <button
            onClick={() => onNavigate("chat")}
            className="
              flex
              w-full
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-4
              text-slate-700
              transition-all
              duration-300
              hover:border-blue-300
              hover:bg-blue-50
            "
          >

            <MessageSquareText className="h-5 w-5 text-blue-600"/>

            <span className="font-semibold">
              Open AI Chat
            </span>

          </button>

          <button
            className="
              flex
              w-full
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-4
              text-slate-700
              transition-all
              duration-300
              hover:border-blue-300
              hover:bg-blue-50
            "
          >

            <Settings className="h-5 w-5 text-blue-600"/>

            <span className="font-semibold">
              Settings
            </span>

          </button>

        </div>
                {/* AI Insights */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                AI Insights
              </p>

              <h3 className="mt-2 text-lg font-black text-slate-900">
                Knowledge Growth
              </h3>

            </div>

            <Sparkles className="h-6 w-6 text-blue-600" />

          </div>

          <div className="mt-6 space-y-5">

            <div>

              <div className="mb-2 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Documents Indexed
                </span>

                <span className="font-bold text-slate-900">
                  96%
                </span>

              </div>

              <div className="h-2 rounded-full bg-slate-200 overflow-hidden">

                <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

              </div>

            </div>

            <div>

              <div className="mb-2 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Embeddings
                </span>

                <span className="font-bold text-slate-900">
                  Active
                </span>

              </div>

              <div className="h-2 rounded-full bg-slate-200 overflow-hidden">

                <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 bg-white p-6">

        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
              F
            </div>

            <div className="flex-1">

              <h4 className="font-bold text-slate-900">
                Farzana
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Administrator
              </p>

            </div>

          </div>

          <div className="mt-5 rounded-2xl bg-slate-100 p-4">

            <div className="flex items-center justify-between">

              <span className="text-sm text-slate-500">
                Workspace
              </span>

              <span className="font-bold text-blue-600">
                Pro
              </span>

            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">

              <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

            </div>

            <p className="mt-3 text-xs leading-6 text-slate-500">
              Your workspace is synchronized with the latest uploaded knowledge and AI services.
            </p>

          </div>

          <button
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-red-100
              py-3.5
              font-semibold
              text-red-500
              transition-all
              duration-300
              hover:bg-red-50
            "
          >

            <LogOut className="h-5 w-5" />

            Sign Out

          </button>

        </div>

      </div>

    </aside>

  );

}

export default DashboardSidebar;
