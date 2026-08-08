import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Bell,
  ChevronDown,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Navbar({ onMenuClick }) {
  const location = useLocation();

  const isDashboard =
    location.pathname === "/dashboard";

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // ---------------------------------------------
  // Close dropdowns when clicking outside
  // ---------------------------------------------

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // ---------------------------------------------
  // Dashboard navigation
  // ---------------------------------------------

  const goToDashboard = () => {
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
        border-b
        border-slate-200
        bg-white/95
        backdrop-blur
      "
    >
      <div
        className="
          flex
          h-16
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* ========================================= */}
        {/* Left Side */}
        {/* ========================================= */}

        <div className="flex items-center gap-3">

          {/* Mobile Hamburger */}

          {isDashboard && (
            <button
              type="button"
              onClick={onMenuClick}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                text-slate-600
                transition
                hover:bg-slate-100
                hover:text-slate-900
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
              items-center
              gap-3
              rounded-xl
              outline-none
              transition
              focus-visible:ring-2
              focus-visible:ring-blue-500
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

            <div className="leading-tight">

              <h1
                className="
                  text-base
                  font-bold
                  tracking-tight
                  text-slate-900
                "
              >
                QuickHelp AI
              </h1>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  font-medium
                  text-slate-500
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
                ml-8
                hidden
                items-center
                gap-7
                lg:flex
              "
            >

              <a
                href="#features"
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-colors
                  hover:text-blue-600
                "
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-colors
                  hover:text-blue-600
                "
              >
                How It Works
              </a>

              <a
                href="#about"
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition-colors
                  hover:text-blue-600
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
                ml-3
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

        <div className="flex items-center gap-2 sm:gap-3">

          {isDashboard ? (
            <>

              {/* ===================================== */}
              {/* Notifications */}
              {/* ===================================== */}

              <div
                ref={notificationRef}
                className="relative"
              >

                <button
                  type="button"
                  onClick={() => {
                    setShowNotifications(
                      (prev) => !prev
                    );

                    setShowProfile(false);
                  }}
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    text-slate-600
                    transition
                    hover:bg-slate-100
                    hover:text-slate-900
                  "
                  aria-label="Notifications"
                  aria-expanded={showNotifications}
                >

                  <Bell className="h-5 w-5" />

                  <span
                    className="
                      absolute
                      right-2
                      top-2
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-500
                      ring-2
                      ring-white
                    "
                  />

                </button>


                {/* Notification Dropdown */}

                {showNotifications && (
                  <div
                    className="
                      absolute
                      right-0
                      top-12
                      w-72
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-xl
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-100
                        px-4
                        py-3
                      "
                    >

                      <div>

                        <p
                          className="
                            text-sm
                            font-bold
                            text-slate-900
                          "
                        >
                          Notifications
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-xs
                            text-slate-500
                          "
                        >
                          Stay updated
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setShowNotifications(false)
                        }
                        className="
                          rounded-lg
                          p-1.5
                          text-slate-400
                          hover:bg-slate-100
                          hover:text-slate-700
                        "
                        aria-label="Close notifications"
                      >
                        <X className="h-4 w-4" />
                      </button>

                    </div>

                    <div className="px-4 py-6 text-center">

                      <div
                        className="
                          mx-auto
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-50
                          text-blue-600
                        "
                      >
                        <Bell className="h-5 w-5" />
                      </div>

                      <p
                        className="
                          mt-3
                          text-sm
                          font-semibold
                          text-slate-800
                        "
                      >
                        Coming Soon
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-slate-500
                        "
                      >
                        Notification features will
                        be available soon.
                      </p>

                    </div>

                  </div>
                )}

              </div>


              {/* ===================================== */}
              {/* User Profile */}
              {/* ===================================== */}

              <div
                ref={profileRef}
                className="relative"
              >

                <button
                  type="button"
                  onClick={() => {
                    setShowProfile(
                      (prev) => !prev
                    );

                    setShowNotifications(false);
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-2
                    py-1.5
                    transition
                    hover:border-slate-300
                    hover:bg-slate-50
                  "
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

                  <div
                    className="
                      hidden
                      text-left
                      lg:block
                    "
                  >

                    <p
                      className="
                        text-sm
                        font-semibold
                        text-slate-900
                      "
                    >
                      Farzana
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-slate-500
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
                      ${
                        showProfile
                          ? "rotate-180"
                          : ""
                      }
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
                      w-64
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-xl
                    "
                  >

                    <div
                      className="
                        border-b
                        border-slate-100
                        px-4
                        py-4
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
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-600
                            font-bold
                            text-white
                          "
                        >
                          F
                        </div>

                        <div>

                          <p
                            className="
                              text-sm
                              font-bold
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

                    </div>


                    <div className="px-4 py-5 text-center">

                      <p
                        className="
                          text-sm
                          font-semibold
                          text-slate-800
                        "
                      >
                        Profile
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-slate-500
                        "
                      >
                        Profile settings are
                        coming soon.
                      </p>

                      <span
                        className="
                          mt-3
                          inline-flex
                          rounded-full
                          bg-slate-100
                          px-3
                          py-1
                          text-[11px]
                          font-semibold
                          text-slate-500
                        "
                      >
                        Coming Soon
                      </span>

                    </div>

                  </div>
                )}

              </div>

            </>
          ) : (
            <>

              {/* ===================================== */}
              {/* Dashboard Link */}
              {/* ===================================== */}

              <Link
                to="/dashboard"
                onClick={goToDashboard}
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
                  sm:block
                "
              >
                Dashboard
              </Link>


              {/* ===================================== */}
              {/* Get Started → AI Assistant */}
              {/* ===================================== */}

              <Link
                to="/dashboard#chat"
                className="
                  rounded-xl
                  bg-blue-600
                  px-5
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
                "
              >
                Get Started
              </Link>

            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;