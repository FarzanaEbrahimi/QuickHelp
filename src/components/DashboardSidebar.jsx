import {
  LayoutDashboard,
  FileText,
  Upload,
  Bot,
  Settings,
  LogOut,
  X,
  MessageSquare,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";


function DashboardSidebar({
  isOpen = false,
  onClose = () => {},
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [showSignOutConfirm, setShowSignOutConfirm] =
    useState(false);

  const [workspaceName, setWorkspaceName] = useState(() => {
    return (
      localStorage.getItem(
        "quickhelp-workspace-name"
      ) || "QuickHelp Workspace"
    );
  });


  // ==================================================
  // Sync Workspace Name
  // ==================================================

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


  // ==================================================
  // Sidebar Items
  // ==================================================

  const items = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      section: "Overview",

      iconColor:
        "text-blue-600 dark:text-blue-400",

      iconBg:
        "bg-blue-50 dark:bg-blue-500/10",

      activeBg:
        "bg-blue-50 dark:bg-blue-500/10",

      activeText:
        "text-blue-700 dark:text-blue-300",

      activeIcon:
        "text-blue-600 dark:text-blue-400",

      hover:
        "hover:bg-blue-50/70 dark:hover:bg-blue-500/10",
    },

    {
      label: "Documents",
      icon: FileText,
      path: "/dashboard/documents",
      section: "Knowledge",

      iconColor:
        "text-violet-600 dark:text-violet-400",

      iconBg:
        "bg-violet-50 dark:bg-violet-500/10",

      activeBg:
        "bg-violet-50 dark:bg-violet-500/10",

      activeText:
        "text-violet-700 dark:text-violet-300",

      activeIcon:
        "text-violet-600 dark:text-violet-400",

      hover:
        "hover:bg-violet-50/70 dark:hover:bg-violet-500/10",
    },

    {
      label: "Upload Center",
      icon: Upload,
      path: "/dashboard/upload",
      section: "Knowledge",

      iconColor:
        "text-orange-600 dark:text-orange-400",

      iconBg:
        "bg-orange-50 dark:bg-orange-500/10",

      activeBg:
        "bg-orange-50 dark:bg-orange-500/10",

      activeText:
        "text-orange-700 dark:text-orange-300",

      activeIcon:
        "text-orange-600 dark:text-orange-400",

      hover:
        "hover:bg-orange-50/70 dark:hover:bg-orange-500/10",
    },

    {
      label: "AI Assistant",
      icon: Bot,
      path: "/assistant",
      section: "AI",

      iconColor:
        "text-emerald-600 dark:text-emerald-400",

      iconBg:
        "bg-emerald-50 dark:bg-emerald-500/10",

      activeBg:
        "bg-emerald-50 dark:bg-emerald-500/10",

      activeText:
        "text-emerald-700 dark:text-emerald-300",

      activeIcon:
        "text-emerald-600 dark:text-emerald-400",

      hover:
        "hover:bg-emerald-50/70 dark:hover:bg-emerald-500/10",
    },

    {
      label: "Messages",
      icon: MessageSquare,
      path: "/dashboard/messages",
      section: "Communication",

      iconColor:
        "text-pink-600 dark:text-pink-400",

      iconBg:
        "bg-pink-50 dark:bg-pink-500/10",

      activeBg:
        "bg-pink-50 dark:bg-pink-500/10",

      activeText:
        "text-pink-700 dark:text-pink-300",

      activeIcon:
        "text-pink-600 dark:text-pink-400",

      hover:
        "hover:bg-pink-50/70 dark:hover:bg-pink-500/10",
    },

    {
      label: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
      section: "Settings",

      iconColor:
        "text-indigo-600 dark:text-indigo-400",

      iconBg:
        "bg-indigo-50 dark:bg-indigo-500/10",

      activeBg:
        "bg-indigo-50 dark:bg-indigo-500/10",

      activeText:
        "text-indigo-700 dark:text-indigo-300",

      activeIcon:
        "text-indigo-600 dark:text-indigo-400",

      hover:
        "hover:bg-indigo-50/70 dark:hover:bg-indigo-500/10",
    },
  ];


  // ==================================================
  // Navigation
  // ==================================================

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };


  // ==================================================
  // Sign Out
  // ==================================================

  const handleSignOut = () => {
    setShowSignOutConfirm(false);
    onClose();
    navigate("/");
  };


  // ==================================================
  // Active Route
  // ==================================================

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }

    return location.pathname === path;
  };


  let lastSection = "";


  return (
    <>
      {/* ==================================================
          Sidebar
      ================================================== */}

      <aside
        className={`
          fixed
          left-0
          top-20
          z-50
          flex
          h-[calc(100vh-5rem)]
          w-72
          flex-col
          overflow-hidden

          border-r
          border-slate-200/80

          bg-gradient-to-b
          from-white
          via-slate-50
          to-blue-50/40

          px-5
          py-6

          shadow-xl
          shadow-slate-200/40

          transition-all
          duration-300

          dark:border-slate-800/80

          dark:bg-gradient-to-b
          dark:from-slate-950
          dark:via-slate-900
          dark:to-[#0b172a]

          dark:shadow-black/40

          xl:sticky
          xl:top-20
          xl:z-0
          xl:shadow-none

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full xl:translate-x-0"
          }
        `}
      >

        {/* ==================================================
            Decorative Background
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-56
            w-56
            rounded-full
            bg-blue-500/5
            blur-3xl

            dark:bg-blue-500/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-24
            h-56
            w-56
            rounded-full
            bg-cyan-400/5
            blur-3xl

            dark:bg-cyan-400/10
          "
        />


        {/* ==================================================
            Mobile Header
        ================================================== */}

        <div
          className="
            relative
            mb-7
            flex
            items-center
            justify-between
            xl:hidden
          "
        >

          <div className="flex min-w-0 items-center gap-3">

            {/* Logo */}

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl

                bg-gradient-to-br
                from-blue-600
                via-blue-500
                to-cyan-500

                text-lg
                font-black
                text-white

                shadow-lg
                shadow-blue-600/20
              "
            >
              Q
            </div>


            <div className="min-w-0">

              <h2
                className="
                  truncate
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                QuickHelp AI
              </h2>

              <p
                className="
                  mt-0.5
                  truncate
                  text-xs
                  font-medium
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {workspaceName}
              </p>

            </div>
          </div>


          {/* Close */}

          <button
            type="button"
            onClick={onClose}
            className="
              shrink-0
              rounded-xl
              p-2

              text-slate-500
              transition-all

              hover:bg-slate-100
              hover:text-slate-900

              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-white

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

        </div>


        {/* ==================================================
            Navigation
        ================================================== */}

        <nav
          className="
            relative
            flex-1
            space-y-2
            overflow-y-auto
            pr-1

            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-slate-200

            dark:scrollbar-thumb-slate-700
          "
        >

          {items.map((item) => {

            const Icon = item.icon;

            const showHeader =
              item.section !== lastSection;

            lastSection = item.section;

            const active = isActive(item.path);


            return (
              <div key={item.path}>

                {/* Section Header */}

                {showHeader && (
                  <p
                    className="
                      mb-2
                      mt-5
                      px-3

                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.18em]

                      text-slate-400

                      dark:text-slate-500
                    "
                  >
                    {item.section}
                  </p>
                )}


                {/* Navigation Button */}

                <button
                  type="button"
                  onClick={() =>
                    handleNavigation(item.path)
                  }
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-2xl
                    px-3
                    py-3

                    text-left

                    transition-all
                    duration-200

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500

                    ${
                      active
                        ? `
                          ${item.activeBg}
                          ${item.activeText}

                          shadow-sm
                          shadow-slate-200/50

                          dark:shadow-none
                        `
                        : `
                          text-slate-600
                          ${item.hover}

                          hover:text-slate-900

                          dark:text-slate-400
                          dark:hover:text-white
                        `
                    }
                  `}
                >

                  {/* Active Indicator */}

                  {active && (
                    <span
                      className={`
                        absolute
                        left-0
                        top-1/2
                        h-8
                        w-1
                        -translate-y-1/2
                        rounded-r-full

                        ${
                          item.label === "Dashboard"
                            ? "bg-blue-500"
                            : item.label === "Documents"
                            ? "bg-violet-500"
                            : item.label === "Upload Center"
                            ? "bg-orange-500"
                            : item.label === "AI Assistant"
                            ? "bg-emerald-500"
                            : item.label === "Messages"
                            ? "bg-pink-500"
                            : "bg-indigo-500"
                        }
                      `}
                    />
                  )}


                  {/* Icon Container */}

                  <div
                    className={`
                      relative
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl

                      transition-all
                      duration-200

                      ${
                        active
                          ? item.iconBg
                          : `
                            bg-slate-100/80
                            group-hover:scale-105

                            dark:bg-slate-800/80
                          `
                      }
                    `}
                  >

                    <Icon
                      size={19}
                      strokeWidth={2}
                      className={`
                        transition-all
                        duration-200

                        ${
                          active
                            ? item.activeIcon
                            : item.iconColor
                        }

                        group-hover:scale-110
                      `}
                    />

                  </div>


                  {/* Label */}

                  <span
                    className={`
                      font-semibold
                      transition-colors
                      duration-200

                      ${
                        active
                          ? ""
                          : "text-slate-600 dark:text-slate-300"
                      }
                    `}
                  >
                    {item.label}
                  </span>


                  {/* Active Dot */}

                  {active && (
                    <span
                      className={`
                        ml-auto
                        h-2
                        w-2
                        shrink-0
                        rounded-full

                        ${
                          item.label === "Dashboard"
                            ? "bg-blue-500"
                            : item.label === "Documents"
                            ? "bg-violet-500"
                            : item.label === "Upload Center"
                            ? "bg-orange-500"
                            : item.label === "AI Assistant"
                            ? "bg-emerald-500"
                            : item.label === "Messages"
                            ? "bg-pink-500"
                            : "bg-indigo-500"
                        }
                      `}
                    />
                  )}

                </button>

              </div>
            );
          })}

        </nav>


        {/* ==================================================
            User Section
        ================================================== */}

        <div
          className="
            relative
            mt-6
            border-t
            border-slate-200/80
            pt-5

            dark:border-slate-800
          "
        >

          {/* User Card */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200/80

              bg-white/70

              p-3

              shadow-sm

              backdrop-blur-sm

              dark:border-slate-800
              dark:bg-slate-900/60
            "
          >

            <div className="flex items-center gap-3">

              {/* Avatar */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full

                  bg-gradient-to-br
                  from-blue-600
                  via-blue-500
                  to-cyan-500

                  font-bold
                  text-white

                  shadow-md
                  shadow-blue-600/20
                "
              >
                F
              </div>


              {/* User Information */}

              <div className="min-w-0">

                <p
                  className="
                    truncate
                    text-sm
                    font-bold
                    text-slate-900

                    dark:text-white
                  "
                >
                  Farzana
                </p>

                <p
                  className="
                    truncate
                    text-xs
                    font-semibold
                    text-blue-600

                    dark:text-blue-400
                  "
                >
                  {workspaceName}
                </p>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-[10px]
                    font-medium
                    text-slate-400

                    dark:text-slate-500
                  "
                >
                  Workspace Owner
                </p>

              </div>

            </div>


            {/* Sign Out */}

            <button
              type="button"
              onClick={() =>
                setShowSignOutConfirm(true)
              }
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl

                border
                border-slate-200

                bg-slate-50/80

                px-4
                py-2.5

                text-xs
                font-bold
                text-slate-600

                transition-all
                duration-200

                hover:border-red-200
                hover:bg-red-50
                hover:text-red-600

                dark:border-slate-700
                dark:bg-slate-800/60
                dark:text-slate-400

                dark:hover:border-red-900/60
                dark:hover:bg-red-500/10
                dark:hover:text-red-400

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-red-400
              "
            >
              <LogOut size={15} />

              Sign Out
            </button>

          </div>

        </div>

      </aside>


      {/* ==================================================
          Sign Out Confirmation
      ================================================== */}

      {showSignOutConfirm && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center

            bg-slate-950/40

            px-5

            backdrop-blur-sm

            dark:bg-black/60
          "
          onClick={() =>
            setShowSignOutConfirm(false)
          }
        >

          <div
            className="
              w-full
              max-w-md

              rounded-3xl

              border
              border-slate-200

              bg-white

              p-7

              shadow-2xl

              dark:border-slate-700
              dark:bg-slate-900
              dark:shadow-black/50
            "
            onClick={(event) =>
              event.stopPropagation()
            }
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

                bg-red-100

                text-red-600

                dark:bg-red-500/10
                dark:text-red-400
              "
            >
              <LogOut size={22} />
            </div>


            {/* Title */}

            <h3
              className="
                mt-6
                text-2xl
                font-black
                tracking-tight

                text-slate-900

                dark:text-white
              "
            >
              Sign out?
            </h3>


            {/* Description */}

            <p
              className="
                mt-3
                leading-7

                text-slate-500

                dark:text-slate-400
              "
            >
              Are you sure you want to leave
              QuickHelp AI?
            </p>


            {/* Actions */}

            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowSignOutConfirm(false)
                }
                className="
                  flex-1
                  rounded-xl

                  border
                  border-slate-200

                  px-5
                  py-3

                  font-semibold
                  text-slate-700

                  transition

                  hover:bg-slate-50

                  dark:border-slate-700
                  dark:text-slate-300
                  dark:hover:bg-slate-800
                "
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={handleSignOut}
                className="
                  flex-1
                  rounded-xl

                  bg-red-600

                  px-5
                  py-3

                  font-semibold
                  text-white

                  transition

                  hover:bg-red-700

                  dark:bg-red-600
                  dark:hover:bg-red-500
                "
              >
                Sign Out
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}


export default DashboardSidebar;