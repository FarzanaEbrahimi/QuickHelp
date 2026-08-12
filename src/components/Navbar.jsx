import { Link, useLocation } from "react-router-dom";

import {
  Menu,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import Logo from "./Logo";


function Navbar({ onMenuClick }) {
  const location = useLocation();

  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/assistant";


  // =========================================================
  // Dark Mode
  // =========================================================

  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("quickhelp-theme") === "dark"
    );
  });


  const [showProfile, setShowProfile] = useState(false);


  // =========================================================
  // Workspace Name
  // =========================================================

  const [workspaceName, setWorkspaceName] = useState(() => {
    return (
      localStorage.getItem(
        "quickhelp-workspace-name"
      ) || "QuickHelp Workspace"
    );
  });


  // =========================================================
  // Apply Theme Globally
  // =========================================================

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");

      localStorage.setItem(
        "quickhelp-theme",
        "dark"
      );
    } else {
      root.classList.remove("dark");

      localStorage.setItem(
        "quickhelp-theme",
        "light"
      );
    }
  }, [darkMode]);


  // =========================================================
  // Keep Workspace Name Synchronized
  // =========================================================

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


  // =========================================================
  // Close Profile When Route Changes
  // =========================================================

  useEffect(() => {
    setShowProfile(false);
  }, [location.pathname]);


  // =========================================================
  // Toggle Dark Mode
  // =========================================================

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    setShowProfile(false);
  };


  // =========================================================
  // Dashboard Click
  // =========================================================

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
        sticky
        top-0
        z-40
        w-full

        border-b
        border-slate-200/80

        bg-white/90
        backdrop-blur-xl

        shadow-[0_1px_0_rgba(15,23,42,0.03)]

        transition-all
        duration-300

        dark:border-slate-800/80
        dark:bg-[#0b1120]/90
        dark:shadow-[0_1px_0_rgba(148,163,184,0.04)]
      "
    >
      {/* ===================================================== */}
      {/* Subtle Background Glow */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -right-20
            -top-24
            h-48
            w-48
            rounded-full
            bg-blue-500/5
            blur-3xl

            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute
            -left-20
            top-0
            h-40
            w-40
            rounded-full
            bg-cyan-400/5
            blur-3xl

            dark:bg-cyan-400/5
          "
        />
      </div>


      <div
        className="
          relative
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-5

          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================== */}
        {/* Left Side */}
        {/* =================================================== */}

        <div className="flex min-w-0 items-center">

          {/* Dashboard / Assistant Mobile Menu */}

          {isDashboard && (
            <button
              type="button"
              onClick={onMenuClick}
              className="
                mr-2
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl

                text-slate-600

                transition-all
                duration-200

                hover:bg-slate-100
                hover:text-slate-900

                dark:text-slate-300
                dark:hover:bg-slate-800/80
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

          <Logo />


          {/* ================================================= */}
          {/* Landing Navigation */}
          {/* ================================================= */}

          {!isDashboard && (
            <div
              className="
                ml-8
                hidden
                items-center
                gap-2
                lg:flex
                xl:ml-12
                xl:gap-3
              "
            >

              <a
                href="#features"
                className="
                  rounded-xl
                  px-4
                  py-2.5
                  text-[15px]
                  font-semibold

                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-slate-100
                  hover:text-blue-600

                  dark:text-slate-300
                  dark:hover:bg-slate-800/80
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
                  rounded-xl
                  px-4
                  py-2.5
                  text-[15px]
                  font-semibold

                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-slate-100
                  hover:text-blue-600

                  dark:text-slate-300
                  dark:hover:bg-slate-800/80
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
                  rounded-xl
                  px-4
                  py-2.5
                  text-[15px]
                  font-semibold

                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-slate-100
                  hover:text-blue-600

                  dark:text-slate-300
                  dark:hover:bg-slate-800/80
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


          {/* ================================================= */}
          {/* Dashboard / Assistant → Home */}
          {/* ================================================= */}

          {isDashboard && (
            <Link
              to="/"
              className="
                ml-3
                hidden
                rounded-xl
                px-4
                py-2.5
                text-[15px]
                font-semibold

                text-slate-500

                transition-all
                duration-200

                hover:bg-slate-100
                hover:text-slate-900

                dark:text-slate-400
                dark:hover:bg-slate-800/80
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


        {/* =================================================== */}
        {/* Right Side */}
        {/* =================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2

            sm:gap-3
          "
        >

          {/* ================================================= */}
          {/* Dark Mode */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={toggleDarkMode}
            className="
              group
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl

              border
              border-slate-200/70

              bg-slate-50/80

              text-slate-600

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
              hover:shadow-md

              dark:border-slate-700
              dark:bg-slate-900/80
              dark:text-slate-300

              dark:hover:border-slate-600
              dark:hover:bg-slate-800
              dark:hover:text-blue-400

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
              <Sun
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />
            ) : (
              <Moon
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:-rotate-12
                "
              />
            )}
          </button>


          {/* ================================================= */}
          {/* Landing Dashboard CTA */}
          {/* ================================================= */}

          {!isDashboard && (
            <Link
              to="/dashboard"
              onClick={handleDashboardClick}
              className="
                hidden
                rounded-xl

                bg-blue-600

                px-5
                py-2.5

                text-[15px]
                font-semibold
                text-white

                shadow-sm

                transition-all
                duration-200

                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-lg
                hover:shadow-blue-600/20

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2

                sm:inline-flex
              "
            >
              Dashboard
            </Link>
          )}


          {/* ================================================= */}
          {/* Dashboard / Assistant Profile */}
          {/* ================================================= */}

          {isDashboard && (
            <div className="relative">

              <button
                type="button"
                onClick={() => {
                  setShowProfile((prev) => !prev);
                }}
                className="
                  flex
                  items-center
                  gap-2.5
                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  px-2
                  py-2

                  shadow-sm

                  transition-all
                  duration-200

                  hover:border-slate-300
                  hover:bg-slate-50
                  hover:shadow-md

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:hover:border-slate-600
                  dark:hover:bg-slate-800

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500

                  sm:gap-3
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

                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500

                    text-sm
                    font-bold
                    text-white

                    shadow-md
                    shadow-blue-600/20
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
                      max-w-[170px]
                      truncate
                      text-xs
                      font-medium

                      text-blue-600

                      dark:text-blue-400
                    "
                  >
                    {workspaceName}
                  </p>


                  <p
                    className="
                      mt-0.5
                      text-[11px]

                      text-slate-400

                      dark:text-slate-500
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
                    duration-200
                    lg:block

                    ${
                      showProfile
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {/* ================================================= */}
              {/* Profile Dropdown */}
              {/* ================================================= */}

              {showProfile && (
                <div
                  className="
                    absolute
                    right-0
                    top-14
                    z-50
                    w-72
                    overflow-hidden
                    rounded-2xl

                    border
                    border-slate-200

                    bg-white

                    shadow-2xl

                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:shadow-black/40
                  "
                >

                  {/* Profile Header */}

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

                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500

                        text-sm
                        font-bold
                        text-white

                        shadow-md
                        shadow-blue-600/20
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
                          mt-0.5
                          truncate
                          text-xs
                          font-medium

                          text-blue-600

                          dark:text-blue-400
                        "
                      >
                        {workspaceName}
                      </p>


                      <p
                        className="
                          mt-0.5
                          text-[11px]

                          text-slate-400

                          dark:text-slate-500
                        "
                      >
                        Workspace Owner
                      </p>

                    </div>

                  </div>


                  {/* Profile Content */}

                  <div className="px-4 py-4">

                    <div
                      className="
                        rounded-xl

                        border
                        border-slate-100

                        bg-slate-50

                        px-3
                        py-3

                        dark:border-slate-700
                        dark:bg-slate-800/80
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

                          dark:text-slate-500
                        "
                      >
                        More account options
                        are coming soon.
                      </p>

                    </div>

                  </div>

                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </nav>
  );
}


export default Navbar;