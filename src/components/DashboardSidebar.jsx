import {
  LayoutDashboard,
  FileText,
  Upload,
  Bot,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DashboardSidebar({
  isOpen = false,
  onClose = () => {},
  onNavigate = () => {},
}) {
  const navigate = useNavigate();

  const [showComingSoon, setShowComingSoon] = useState(false);

  const items = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      key: "overview",
      section: "Overview",
    },
    {
      label: "Documents",
      icon: FileText,
      key: "documents",
      section: "Knowledge",
    },
    {
      label: "Upload Center",
      icon: Upload,
      key: "upload",
      section: "Knowledge",
    },
    {
      label: "AI Assistant",
      icon: Bot,
      key: "chat",
      section: "AI",
    },
    {
      label: "Settings",
      icon: Settings,
      key: "settings",
      section: "Settings",
    },
  ];

  let lastSection = "";

  const handleNavigation = (item) => {
    if (item.key === "settings") {
      setShowComingSoon(true);
      onClose();
      return;
    }

    onNavigate(item.key);
    onClose();
  };

  const handleSignOut = () => {
    onClose();
    navigate("/");
  };

  return (
    <>
      {/* ========================================= */}
      {/* Sidebar */}
      {/* ========================================= */}

      <aside
        className={`
          fixed
          left-0
          top-16
          z-50
          flex
          h-[calc(100vh-4rem)]
          w-72
          flex-col
          border-r
          border-slate-200
          bg-white
          px-5
          py-6
          shadow-xl
          transition-transform
          duration-300
          xl:sticky
          xl:top-16
          xl:z-0
          xl:shadow-none
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full xl:translate-x-0"
          }
        `}
      >
        {/* ========================================= */}
        {/* Mobile Header */}
        {/* فقط وقتی Sidebar با Hamburger باز می‌شود */}
        {/* ========================================= */}

        <div className="mb-7 flex items-center justify-between xl:hidden">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                text-lg
                font-bold
                text-white
              "
            >
              Q
            </div>

            <div className="min-w-0">
              <h2 className="truncate font-bold text-slate-900">
                QuickHelp AI
              </h2>

              <p className="text-xs text-slate-500">
                Business Dashboard
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              shrink-0
              rounded-xl
              p-2
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-900
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500
            "
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* ========================================= */}
        {/* Navigation */}
        {/* ========================================= */}

        <nav className="flex-1 space-y-2 overflow-y-auto">
          {items.map((item) => {
            const Icon = item.icon;

            const showHeader =
              item.section !== lastSection;

            lastSection = item.section;

            return (
              <div key={item.label}>
                {showHeader && (
                  <p
                    className="
                      mb-2
                      mt-5
                      px-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    {item.section}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => handleNavigation(item)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-left
                    text-slate-600
                    transition
                    hover:bg-slate-100
                    hover:text-slate-900
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                  "
                >
                  <Icon size={18} />

                  <span className="font-medium">
                    {item.label}
                  </span>

                  {item.key === "settings" && (
                    <span
                      className="
                        ml-auto
                        rounded-full
                        bg-slate-100
                        px-2
                        py-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-400
                      "
                    >
                      Soon
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        {/* ========================================= */}
        {/* User Section */}
        {/* ========================================= */}

        <div className="mt-6 border-t border-slate-200 pt-5">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-blue-600
                font-semibold
                text-white
              "
            >
              F
            </div>

            <div className="min-w-0">
              <p className="font-medium text-slate-900">
                Farzana
              </p>

              <p className="text-xs text-slate-500">
                Workspace Owner
              </p>
            </div>
          </div>

          {/* ========================================= */}
          {/* Sign Out */}
          {/* ========================================= */}

          <button
            type="button"
            onClick={handleSignOut}
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-200
              px-4
              py-3
              text-sm
              font-medium
              text-slate-600
              transition
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-600
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-red-400
            "
          >
            <LogOut size={16} />

            Sign Out
          </button>
        </div>
      </aside>

      {/* ========================================= */}
      {/* Settings Coming Soon Modal */}
      {/* ========================================= */}

      {showComingSoon && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-slate-900/40
            px-5
            backdrop-blur-sm
          "
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="
              w-full
              max-w-md
              rounded-3xl
              bg-white
              p-7
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="flex items-start justify-between">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                "
              >
                <Settings size={22} />
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowComingSoon(false)
                }
                className="
                  rounded-xl
                  p-2
                  text-slate-400
                  transition
                  hover:bg-slate-100
                  hover:text-slate-700
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                "
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-black
                text-slate-900
              "
            >
              Settings
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              Workspace settings are currently being
              prepared and will be available soon.
            </p>

            <button
              type="button"
              onClick={() =>
                setShowComingSoon(false)
              }
              className="
                mt-6
                w-full
                rounded-xl
                bg-blue-600
                px-5
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardSidebar;