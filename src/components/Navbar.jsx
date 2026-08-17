import { Link, useLocation } from "react-router-dom";

import {
  Menu,
  X,
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

  // =========================================================
  // Profile / Mobile Menu
  // =========================================================

  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
  // Close Profile / Mobile Menu When Route Changes
  // =========================================================

  useEffect(() => {
    setShowProfile(false);
    setShowMobileMenu(false);
  }, [location.pathname]);

  // =========================================================
  // Prevent Background Scroll While Mobile Menu Is Open
  // =========================================================

  useEffect(() => {
    if (!showMobileMenu) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

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
    setShowMobileMenu(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  // =========================================================
  // Mobile Navigation
  // =========================================================

  const handleMobileNavigation = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* ===================================================== */}
      {/* Navbar */}
      {/* ===================================================== */}

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
        {/* =================================================== */}
        {/* Subtle Background Glow */}
        {/* =================================================== */}

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

        {/* =================================================== */}
        {/* Navbar Container */}
        {/* =================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-4

            sm:px-6
            lg:px-8
          "
        >
          {/* ================================================= */}
          {/* Left Side */}
          {/* ================================================= */}

          <div className="flex min-w-0 items-center">

            {/* ================================================= */}
            {/* Dashboard / Assistant Mobile Menu */}
            {/* ================================================= */}

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

            {/* ================================================= */}
            {/* Landing Page Mobile Menu Button */}
            {/* ================================================= */}

            {!isDashboard && (
              <button
                type="button"
                onClick={() =>
                  setShowMobileMenu((prev) => !prev)
                }
                className="
                  mr-2
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl

                  border
                  border-slate-200/80

                  bg-slate-50/80

                  text-slate-600

                  shadow-sm

                  transition-all
                  duration-200

                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600

                  dark:border-slate-700
                  dark:bg-slate-900/80
                  dark:text-slate-300

                  dark:hover:border-slate-600
                  dark:hover:bg-slate-800
                  dark:hover:text-blue-400

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500

                  lg:hidden
                "
                aria-label={
                  showMobileMenu
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={showMobileMenu}
              >
                {showMobileMenu ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            )}

            {/* ================================================= */}
            {/* Logo */}
            {/* ================================================= */}

            <Logo />

            {/* ================================================= */}
            {/* Landing Navigation - Desktop */}
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

      {/* ===================================================== */}
      {/* LANDING PAGE MOBILE MENU */}
      {/* ===================================================== */}

      {!isDashboard && showMobileMenu && (
        <>
          {/* ================================================= */}
          {/* Backdrop */}
          {/* ================================================= */}

          <div
            className="
              fixed
              inset-0
              z-40

              bg-slate-950/30

              backdrop-blur-[2px]

              dark:bg-black/50

              lg:hidden
            "
            onClick={() =>
              setShowMobileMenu(false)
            }
            aria-hidden="true"
          />

          {/* ================================================= */}
          {/* Mobile Sidebar */}
          {/* ================================================= */}

          <aside
            className="
              fixed
              left-0
              top-20
              z-50

              flex
              h-[calc(100vh-5rem)]
              w-72
              max-w-[85vw]
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

              dark:border-slate-800/80

              dark:bg-gradient-to-b
              dark:from-slate-950
              dark:via-slate-900
              dark:to-[#0b172a]

              dark:shadow-black/40

              lg:hidden
            "
          >
            {/* ================================================= */}
            {/* Decorative Background */}
            {/* ================================================= */}

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

            {/* ================================================= */}
            {/* Mobile Menu Header */}
            {/* ================================================= */}

            <div
              className="
                relative
                mb-7
                flex
                items-center
                justify-between
              "
            >
              <div className="flex min-w-0 items-center gap-3">
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
                    AI Knowledge Platform
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowMobileMenu(false)
                }
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

            {/* ================================================= */}
            {/* Navigation */}
            {/* ================================================= */}

            <nav
              className="
                relative
                flex-1
                space-y-2
                overflow-y-auto
                pr-1
              "
            >
              {/* Section Header */}

              <p
                className="
                  mb-2
                  mt-2
                  px-3

                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]

                  text-slate-400

                  dark:text-slate-500
                "
              >
                Navigation
              </p>

              {/* Features */}

              <a
                href="#features"
                onClick={handleMobileNavigation}
                className="
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

                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-blue-50/70
                  hover:text-slate-900

                  dark:text-slate-400
                  dark:hover:bg-blue-500/10
                  dark:hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
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
                    rounded-xl

                    bg-blue-50

                    text-blue-600

                    transition-all
                    duration-200

                    group-hover:scale-105

                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <span className="text-sm font-black">
                    01
                  </span>
                </div>

                <span
                  className="
                    font-semibold
                    text-slate-700

                    dark:text-slate-200
                  "
                >
                  Features
                </span>
              </a>

              {/* How It Works */}

              <a
                href="#how-it-works"
                onClick={handleMobileNavigation}
                className="
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

                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-violet-50/70
                  hover:text-slate-900

                  dark:text-slate-400
                  dark:hover:bg-violet-500/10
                  dark:hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
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
                    rounded-xl

                    bg-violet-50

                    text-violet-600

                    transition-all
                    duration-200

                    group-hover:scale-105

                    dark:bg-violet-500/10
                    dark:text-violet-400
                  "
                >
                  <span className="text-sm font-black">
                    02
                  </span>
                </div>

                <span
                  className="
                    font-semibold
                    text-slate-700

                    dark:text-slate-200
                  "
                >
                  How It Works
                </span>
              </a>

              {/* About */}

              <a
                href="#about"
                onClick={handleMobileNavigation}
                className="
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

                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-emerald-50/70
                  hover:text-slate-900

                  dark:text-slate-400
                  dark:hover:bg-emerald-500/10
                  dark:hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
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
                    rounded-xl

                    bg-emerald-50

                    text-emerald-600

                    transition-all
                    duration-200

                    group-hover:scale-105

                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <span className="text-sm font-black">
                    03
                  </span>
                </div>

                <span
                  className="
                    font-semibold
                    text-slate-700

                    dark:text-slate-200
                  "
                >
                  About
                </span>
              </a>

              {/* Dashboard */}

              <Link
                to="/dashboard"
                onClick={handleDashboardClick}
                className="
                  group
                  relative
                  mt-2
                  flex
                  w-full
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  px-3
                  py-3

                  text-left

                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-orange-50/70
                  hover:text-slate-900

                  dark:text-slate-400
                  dark:hover:bg-orange-500/10
                  dark:hover:text-white

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
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
                    rounded-xl

                    bg-orange-50

                    text-orange-600

                    transition-all
                    duration-200

                    group-hover:scale-105

                    dark:bg-orange-500/10
                    dark:text-orange-400
                  "
                >
                  <span className="text-sm font-black">
                    04
                  </span>
                </div>

                <span
                  className="
                    font-semibold
                    text-slate-700

                    dark:text-slate-200
                  "
                >
                  Dashboard
                </span>
              </Link>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

export default Navbar;