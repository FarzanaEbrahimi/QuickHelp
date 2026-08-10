import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

function Navbar({ onMenuClick }) {
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("quickhelp-theme") === "dark";
  });

  const [showProfile, setShowProfile] = useState(false);

  // Apply theme globally
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("quickhelp-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("quickhelp-theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    setShowProfile(false);
  };

  const handleDashboardClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <nav
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white
        px-4
        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-slate-950

        sm:px-6
      "
    >
      {/* ========================================= */}
      {/* Left Side */}
      {/* ========================================= */}

      <div className="flex min-w-0 items-center gap-2 sm:gap-3">

        {/* Mobile / Tablet Hamburger */}

        {isDashboard && (
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-slate-600
              transition

              hover:bg-slate-100
              hover:text-slate-900

              dark:text-slate-300
              dark:hover:bg-slate-800
              dark:hover:text-white

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500

              xl:hidden
            "
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}

        {/* Logo */}

        <Link
          to="/"
          className="
            flex
            min-w-0
            items-center
            gap-2
            rounded-xl
            outline-none
            transition
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
          "
        >
          {/* Logo Mark */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              text-lg
              font-black
              text-white
              shadow-sm
            "
          >
            Q
          </div>

          {/* Brand Text */}

          <div className="min-w-0 leading-tight">
            <h1
              className="
                truncate
                text-base
                font-bold
                tracking-tight
                text-slate-900

                dark:text-white

                sm:text-lg
              "
            >
              QuickHelp AI
            </h1>

            <p
              className="
                mt-0.5
                hidden
                text-[11px]
                font-medium
                text-slate-500

                dark:text-slate-400

                sm:block
              "
            >
              AI Support Platform
            </p>
          </div>
        </Link>

        {/* ========================================= */}
        {/* Landing Page Navigation */}
        {/* ========================================= */}

        {!isDashboard && (
          <div
            className="
              ml-4
              hidden
              items-center
              gap-7
              lg:flex
              xl:ml-8
            "
          >
            <a
              href="#features"
              className="
                rounded-lg
                px-2
                py-1
                text-sm
                font-medium
                text-slate-600
                transition-colors
                hover:text-blue-600

                dark:text-slate-300
                dark:hover:text-blue-400

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
              "
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="
                rounded-lg
                px-2
                py-1
                text-sm
                font-medium
                text-slate-600
                transition-colors
                hover:text-blue-600

                dark:text-slate-300
                dark:hover:text-blue-400

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
              "
            >
              How It Works
            </a>

            <a
              href="#about"
              className="
                rounded-lg
                px-2
                py-1
                text-sm
                font-medium
                text-slate-600
                transition-colors
                hover:text-blue-600

                dark:text-slate-300
                dark:hover:text-blue-400

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
              "
            >
              About
            </a>
          </div>
        )}

        {/* ========================================= */}
        {/* Dashboard → Home */}
        {/* ========================================= */}

        {isDashboard && (
          <Link
            to="/"
            className="
              ml-2
              hidden
              rounded-xl
              px-3
              py-2
              text-sm
              font-medium
              text-slate-500
              transition

              hover:bg-slate-100
              hover:text-slate-900

              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-white

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-500

              md:block
            "
          >
            ← Home
          </Link>
        )}
      </div>

      {/* ========================================= */}
      {/* Right Side */}
      {/* ========================================= */}

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">

        {/* ========================================= */}
        {/* Dark Mode */}
        {/* ========================================= */}

        <button
          type="button"
          onClick={toggleDarkMode}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            text-slate-600
            transition-all
            duration-200

            hover:bg-slate-100
            hover:text-slate-900

            dark:text-slate-300
            dark:hover:bg-slate-800
            dark:hover:text-white

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
          "
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            darkMode
              ? "Light mode"
              : "Dark mode"
          }
        >
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {/* ========================================= */}
        {/* Dashboard Actions */}
        {/* ========================================= */}

        {isDashboard ? (
          <>
            {/* User Profile */}

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setShowProfile((prev) => !prev);
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-1.5
                  py-1.5
                  transition

                  hover:border-slate-300
                  hover:bg-slate-50

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:hover:border-slate-600
                  dark:hover:bg-slate-800

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500

                  sm:gap-3
                  sm:px-2
                "
                aria-label="Open user profile"
                aria-expanded={showProfile}
              >
                {/* Avatar */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  F
                </div>

                {/* User Information */}

                <div className="hidden text-left lg:block">
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-900

                      dark:text-white
                    "
                  >
                    Farzana
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    Workspace Owner
                  </p>
                </div>

                <ChevronDown
                  className={`
                    hidden
                    h-4
                    w-4
                    text-slate-400
                    transition-transform
                    lg:block
                    ${showProfile ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Profile Dropdown */}

              {showProfile && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-50
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-xl

                    dark:border-slate-700
                    dark:bg-slate-900
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      border-b
                      border-slate-100
                      px-4
                      py-4

                      dark:border-slate-800
                    "
                  >
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
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      F
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-sm
                          font-semibold
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
                          text-slate-500

                          dark:text-slate-400
                        "
                      >
                        Workspace Owner
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-4">
                    <div
                      className="
                        rounded-xl
                        bg-slate-50
                        px-3
                        py-3

                        dark:bg-slate-800
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-semibold
                          text-slate-700

                          dark:text-slate-200
                        "
                      >
                        Profile settings
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-slate-400
                        "
                      >
                        More account options are coming soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Dashboard Link */}

            <Link
              to="/dashboard"
              onClick={handleDashboardClick}
              className="
                hidden
                rounded-xl
                px-3
                py-2
                text-sm
                font-medium
                text-slate-600
                transition

                hover:bg-slate-50
                hover:text-blue-600

                dark:text-slate-300
                dark:hover:bg-slate-800
                dark:hover:text-blue-400

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500

                sm:block
              "
            >
              Dashboard
            </Link>

            {/* Get Started */}

            <Link
              to="/dashboard#chat"
              className="
                rounded-xl
                bg-blue-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition

                hover:bg-blue-700
                hover:shadow-md

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2

                sm:px-5
              "
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;