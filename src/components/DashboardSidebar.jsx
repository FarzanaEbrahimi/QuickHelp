import {
  LayoutDashboard,
  FileText,
  Upload,
  Bot,
  Settings,
  LogOut,
  X
} from "lucide-react";
function DashboardSidebar({
  isOpen = false,
  onClose = () => {},
  onNavigate = () => {}
}) {
  const items = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      key: "overview",
      section: "Overview"
    },
    {
      label: "Documents",
      icon: FileText,
      key: "documents",
      section: "Knowledge"
    },
    {
      label: "Upload Center",
      icon: Upload,
      key: "upload",
      section: "Knowledge"
    },
    {
      label: "AI Assistant",
      icon: Bot,
      key: "chat",
      section: "AI"
    },
    {
      label: "Settings",
      icon: Settings,
      key: "settings",
      section: "Settings"
    },
  ];
  let lastSection = "";
  return (
    <aside
      className={`
        fixed
        left-0
        top-16
        z-50
        h-[calc(100vh-4rem)]
        w-72
        border-r
        border-slate-200
        bg-white
        transition-transform
        duration-300
        xl:sticky
        xl:top-16
        xl:z-0
        xl:translate-x-0
        ${
          isOpen
          ? "translate-x-0"
          : "-translate-x-full xl:translate-x-0"
        }
      `}
    >
      <div
        className="
          flex
          h-full
          flex-col
          p-5
        "
      >
        {/* Mobile Header */}
        <div
          className="
            mb-6
            flex
            items-center
            justify-between
            xl:hidden
          "
        >
          <div>
            <h2
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              QuickHelp AI
            </h2>
            <p
              className="
                text-xs
                text-slate-500
              "
            >
              Business Dashboard
            </p>
          </div>
          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2
              text-slate-600
              transition
              hover:bg-slate-100
            "
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>
                {/* Desktop Brand */}
        <div
          className="
            hidden
            mb-8
            xl:block
          "
        >
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
        {/* Navigation */}
        <nav
          className="
            flex-1
            space-y-2
          "
        >
          {items.map((item) => {
            const Icon = item.icon;
            const showHeader =
              item.section !== lastSection;
            lastSection =
              item.section;
            return (
              <div
                key={item.label}
              >
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
                  onClick={() => {
                    onNavigate(
                      item.key
                    );
                    onClose();
                  }}
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
                  "
                >
                  <Icon size={18} />
                  <span
                    className="
                      font-medium
                    "
                  >
                    {item.label}
                  </span>
                </button>
              </div>
            );
          })}
        </nav>
                {/* Storage Card */}
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-4
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-wide
              text-slate-400
            "
          >
            Storage
          </p>
          <div
            className="
              mt-3
              space-y-2
              text-sm
              text-slate-600
            "
          >
            <div
              className="
                flex
                justify-between
              "
            >
              <span>
                Documents
              </span>
              <span>
                1
              </span>
            </div>
            <div
              className="
                flex
                justify-between
              "
            >
              <span>
                Chunks
              </span>
              <span>
                24
              </span>
            </div>
            <div
              className="
                flex
                justify-between
              "
            >
              <span>
                Status
              </span>
              <span
                className="
                  font-medium
                  text-emerald-600
                "
              >
                Ready
              </span>
            </div>
          </div>
        </div>
        {/* User Section */}
        <div
          className="
            mt-6
            border-t
            border-slate-200
            pt-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
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
            <div>
              <p
                className="
                  font-medium
                  text-slate-900
                "
              >
                Farzana
              </p>
              <p
                className="
                  text-xs
                  text-slate-500
                "
              >
                Workspace Owner
              </p>
            </div>
          </div>
                    {/* Sign Out Button */}
          <button
            type="button"
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
              hover:bg-slate-100
            "
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
export default DashboardSidebar;