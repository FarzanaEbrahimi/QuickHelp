import {
  Sparkles,
  LayoutDashboard,
  Upload,
  Database,
  FileText,
  Brain,
  MessageSquareText,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
  Cpu,
  Activity,
} from "lucide-react";

const menu = [
  {
    id: "overview",
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: "upload",
    title: "Upload",
    icon: Upload,
  },
  {
    id: "knowledge",
    title: "Knowledge Base",
    icon: Database,
  },
  {
    id: "documents",
    title: "Documents",
    icon: FileText,
  },
  {
    id: "processing",
    title: "AI Processing",
    icon: Brain,
  },
  {
    id: "chat",
    title: "AI Chat",
    icon: MessageSquareText,
    badge: "NEW",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: BarChart3,
  },
  {
    id: "settings",
    title: "Settings",
    icon: Settings,
  },
];

function DashboardSidebar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside
      className="
      hidden
      lg:flex
      sticky
      top-20
      h-[calc(100vh-5rem)]
      w-[310px]
      shrink-0
      flex-col
      overflow-hidden
      border-r
      border-slate-200
      bg-white/90
      backdrop-blur-xl
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
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            via-cyan-500
            to-indigo-600
            shadow-xl
            shadow-blue-200
            "
          >

            <Sparkles className="h-8 w-8 text-white" />

            <span
              className="
              absolute
              -right-1
              -top-1
              h-4
              w-4
              rounded-full
              border-2
              border-white
              bg-green-500
              "
            />

          </div>

          <div>

            <h2 className="text-xl font-black text-slate-900">
              QuickHelp AI
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Business Workspace
            </p>

          </div>

        </div>
      </div>

      {/* Workspace */}

      <div className="px-6 pt-7">

        <div
          className="
          overflow-hidden
          rounded-3xl
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

              <p className="text-xs uppercase tracking-[0.3em] text-blue-100">
                Workspace
              </p>

              <h3 className="mt-2 text-2xl font-black">
                AI Ready
              </h3>

            </div>

            <Cpu className="h-9 w-9 opacity-90" />

          </div>

          <p className="mt-5 text-sm leading-7 text-blue-100">
            Your AI assistant is connected and ready to answer customer
            questions.
          </p>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-6 py-7">

        <p
          className="
          mb-5
          px-3
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
          text-slate-400
          "
        >
          Navigation
        </p>

        <div className="space-y-2">
                    {menu.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-between
                  overflow-hidden
                  rounded-2xl
                  px-5
                  py-4
                  transition-all
                  duration-300

                  ${
                    item.active
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-100"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                `}
              >
                {/* Active Indicator */}

                {item.active && (
                  <span
                    className="
                      absolute
                      left-0
                      top-3
                      bottom-3
                      w-1.5
                      rounded-r-full
                      bg-white
                    "
                  />
                )}

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
                        item.active
                          ? "bg-white/20"
                          : "bg-slate-100 group-hover:bg-white"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="text-left">

                    <p className="font-semibold">
                      {item.title}
                    </p>

                    <p
                      className={`
                        text-xs

                        ${
                          item.active
                            ? "text-blue-100"
                            : "text-slate-400"
                        }
                      `}
                    >
                      Open section
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2">

                  {item.badge && (
                    <span
                      className="
                        rounded-full
                        bg-emerald-500
                        px-2.5
                        py-1
                        text-[10px]
                        font-bold
                        text-white
                      "
                    >
                      {item.badge}
                    </span>
                  )}

                  <ChevronRight
                    className={`
                      h-4
                      w-4
                      transition-all
                      duration-300

                      ${
                        item.active
                          ? "opacity-100"
                          : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  />

                </div>

              </button>
            );
          })}
        </div>

        {/* AI Status Card */}

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-blue-100
            bg-gradient-to-br
            from-blue-50
            via-white
            to-cyan-50
            p-6
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                AI STATUS
              </p>

              <h3 className="mt-2 text-lg font-black text-slate-900">
                Online
              </h3>

            </div>

            <Activity className="h-7 w-7 text-green-500" />

          </div>

          <div
            className="
              mt-5
              h-2
              overflow-hidden
              rounded-full
              bg-slate-200
            "
          >
            <div
              className="
                h-full
                w-full
                rounded-full
                bg-gradient-to-r
                from-green-500
                via-emerald-500
                to-cyan-500
              "
            />
          </div>

          <div className="mt-5 flex items-center justify-between">

            <span className="text-sm text-slate-500">
              System Health
            </span>

            <span className="font-bold text-green-600">
              100%
            </span>

          </div>

        </div>

      </div>
            {/* User */}

      <div
        className="
          border-t
          border-slate-200
          bg-white
          p-6
        "
      >

        <div
          className="
            rounded-3xl
            border
            border-slate-200
            bg-gradient-to-br
            from-white
            to-slate-50
            p-5
            shadow-sm
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
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-lg
                font-bold
                text-white
                shadow-lg
              "
            >
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

          <div
            className="
              mt-5
              rounded-2xl
              bg-slate-100
              p-4
            "
          >

            <div className="flex items-center justify-between">

              <span className="text-sm text-slate-500">
                Workspace
              </span>

              <span className="font-bold text-blue-600">
                Pro
              </span>

            </div>

            <div
              className="
                mt-3
                h-2
                overflow-hidden
                rounded-full
                bg-slate-200
              "
            >
              <div
                className="
                  h-full
                  w-[82%]
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                "
              />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              AI resources are active and your knowledge base is synchronized.
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
              py-3
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