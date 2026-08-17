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
  // Close Mobile Sidebar With Escape
  // ==================================================

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);


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
          Mobile Backdrop
      ================================================== */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-40

            bg-slate-950/25

            backdrop-blur-[3px]

            transition-opacity
            duration-300

            dark:bg-black/50

            xl:hidden
          "
          onClick={onClose}
          aria-hidden="true"
        />
      )}


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
          max-w-[88vw]
          flex-col
          overflow-hidden

          border-r
          border-white/50

          bg-white/75

          px-5
          py-6

          shadow-2xl
          shadow-slate-900/10

          backdrop-blur-2xl
          backdrop-saturate-150

          transition-all
          duration-300
          ease-out

          dark:border-slate-700/50
          dark:bg-slate-950/75
          dark:shadow-black/40

          xl:sticky
          xl:top-20
          xl:z-0
          xl:max-w-none
          xl:border-r
          xl:border-slate-200/80
          xl:bg-gradient-to-b
          xl:from-white
          xl:via-slate-50
          xl:to-blue-50/40
          xl:shadow-none
          xl:backdrop-blur-none
          xl:backdrop-saturate-100

          dark:xl:border-slate-800/80
          dark:xl:bg-gradient-to-b
          dark:xl:from-slate-950
          dark:xl:via-slate-900
          dark:xl:to-[#0b172a]

          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 xl:translate-x-0 xl:opacity-100"
          }
        `}
      >

        {/* ==================================================
            Glass Decorative Background
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24

            h-64
            w-64

            rounded-full

            bg-blue-500/10

            blur-3xl

            dark:bg-blue-500/15
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-24

            h-64
            w-64

            rounded-full

            bg-cyan-400/10

            blur-3xl

            dark:bg-cyan-400/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/3

            h-40
            w-40

            -translate-x-1/2

            rounded-full

            bg-violet-400/5

            blur-3xl

            dark:bg-violet-500/5
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

          <div
            className="
              flex
              min-w-0
              items-center
              gap-3
            "
          >

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

              border
              border-slate-200/70

              bg-white/50

              p-2

              text-slate-500

              shadow-sm

              backdrop-blur-md

              transition-all
              duration-200

              hover:border-slate-300
              hover:bg-white/80
              hover:text-slate-900

              dark:border-slate-700/70
              dark:bg-slate-900/40
              dark:text-slate-400

              dark:hover:border-slate-600
              dark:hover:bg-slate-800/70
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
            scrollbar-thumb-slate-300/70

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

                    border

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

                          border-white/60

                          shadow-sm
                          shadow-slate-300/30

                          backdrop-blur-md

                          dark:border-slate-700/40
                          dark:shadow-none
                        `
                        : `
                          border-transparent

                          text-slate-600

                          ${item.hover}

                          hover:border-white/50
                          hover:text-slate-900

                          hover:shadow-sm
                          hover:backdrop-blur-md

                          dark:text-slate-400
                          dark:hover:border-slate-700/40
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
                            bg-slate-100/70

                            group-hover:scale-105

                            dark:bg-slate-800/70
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
            border-white/60

            pt-5

            dark:border-slate-700/60

            xl:border-slate-200/80
            dark:xl:border-slate-800
          "
        >

          {/* User Card */}

          <div
            className="
              rounded-2xl

              border
              border-white/60

              bg-white/55

              p-3

              shadow-sm
              shadow-slate-900/5

              backdrop-blur-xl

              dark:border-slate-700/50
              dark:bg-slate-900/55
              dark:shadow-black/20
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

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
                border-slate-200/70

                bg-white/45

                px-4
                py-2.5

                text-xs
                font-bold

                text-slate-600

                shadow-sm

                backdrop-blur-md

                transition-all
                duration-200

                hover:border-red-200
                hover:bg-red-50/70
                hover:text-red-600

                dark:border-slate-700/70
                dark:bg-slate-800/45
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