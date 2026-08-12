import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Logo from "./Logo";


function Footer({ dashboard = false }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer
      className={`
        relative
        overflow-hidden

        border-t

        ${
          dashboard
            ? "mt-0"
            : "mt-24"
        }

        border-slate-200/80

        bg-gradient-to-b
        from-slate-50
        via-white
        to-blue-50/40

        text-slate-900

        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-gradient-to-b
        dark:from-slate-950
        dark:via-[#0b1120]
        dark:to-[#081522]
        dark:text-white
      `}
    >

      {/* ==================================================
          Decorative Background
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
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
          -bottom-40
          left-1/4
          h-80
          w-80
          rounded-full

          bg-cyan-400/5

          blur-3xl

          dark:bg-cyan-400/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-1/3
          top-1/2
          h-48
          w-48
          -translate-y-1/2
          rounded-full

          bg-violet-500/5

          blur-3xl

          dark:bg-violet-500/5
        "
      />


      {/* ==================================================
          Main Container
      ================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl

          px-6
          py-16

          lg:px-8
        "
      >

        {/* ==================================================
            Main Footer Grid
        ================================================== */}

        <div
          className="
            grid
            gap-12

            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* ==================================================
              Brand
          ================================================== */}

          <div>

            <div
              className="
                [&_*]:text-slate-900
                dark:[&_*]:text-white
              "
            >
              <Logo footer />
            </div>

            <p
              className="
                mt-6
                max-w-md

                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              Smarter customer support powered by your
              business knowledge and artificial intelligence.
            </p>


            {/* Small Status Badge */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-emerald-200

                bg-emerald-50

                px-3
                py-1.5

                text-xs
                font-semibold
                text-emerald-700

                dark:border-emerald-500/20
                dark:bg-emerald-500/10
                dark:text-emerald-400
              "
            >

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-500

                  shadow-sm
                  shadow-emerald-500/50
                "
              />

              QuickHelp AI is online

            </div>

          </div>


          {/* ==================================================
              Quick Links
          ================================================== */}

          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-[0.16em]

                text-slate-900

                dark:text-white
              "
            >
              Quick Links
            </h3>


            <div
              className="
                mt-6
                flex
                flex-col
                gap-3
              "
            >

              {/* Home */}

              <Link
                to="/"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-2

                  text-slate-600

                  transition-all
                  duration-200

                  hover:translate-x-1
                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:text-blue-400
                "
              >
                <span>
                  Home
                </span>

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5

                    opacity-0

                    transition-all
                    duration-200

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>


              {/* About */}

              <a
                href="/#about"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-2

                  text-slate-600

                  transition-all
                  duration-200

                  hover:translate-x-1
                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:text-blue-400
                "
              >
                <span>
                  About
                </span>

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5

                    opacity-0

                    transition-all
                    duration-200

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </a>


              {/* How It Works */}

              <a
                href="/#how-it-works"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-2

                  text-slate-600

                  transition-all
                  duration-200

                  hover:translate-x-1
                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:text-blue-400
                "
              >
                <span>
                  How It Works
                </span>

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5

                    opacity-0

                    transition-all
                    duration-200

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </a>


              {/* Dashboard */}

              <Link
                to="/dashboard"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-2

                  text-slate-600

                  transition-all
                  duration-200

                  hover:translate-x-1
                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:text-blue-400
                "
              >
                <span>
                  Dashboard
                </span>

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5

                    opacity-0

                    transition-all
                    duration-200

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>

            </div>

          </div>


          {/* ==================================================
              Contact
          ================================================== */}

          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-[0.16em]

                text-slate-900

                dark:text-white
              "
            >
              Get in Touch
            </h3>


            <p
              className="
                mt-6
                max-w-sm

                leading-7

                text-slate-600

                dark:text-slate-400
              "
            >
              Have a question or want to learn more about
              QuickHelp? Feel free to get in touch.
            </p>


            {/* ==================================================
                Email
            ================================================== */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farzanaebrhimi2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-5
                flex
                w-fit
                items-center
                gap-3

                text-slate-600

                transition-all
                duration-200

                hover:translate-x-1
                hover:text-blue-600

                dark:text-slate-400
                dark:hover:text-blue-400
              "
            >

              <span
                className="
                  flex
                  h-9
                  w-9
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
                <Mail className="h-4 w-4" />
              </span>

              <span className="text-sm font-medium">
                farzanaebrhimi2001@gmail.com
              </span>

            </a>


            {/* ==================================================
                Social Links
            ================================================== */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
              "
            >

              {/* GitHub */}

              <a
                href="https://github.com/FarzanaEbrahimi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  text-slate-500

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-slate-300
                  hover:bg-slate-100
                  hover:text-slate-900

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-400

                  dark:hover:border-slate-600
                  dark:hover:bg-slate-800
                  dark:hover:text-white
                "
              >
                <FaGithub size={19} />
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/farzana-e-134367215/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  text-slate-500

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-400

                  dark:hover:border-blue-500/30
                  dark:hover:bg-blue-500/10
                  dark:hover:text-blue-400
                "
              >
                <FaLinkedin size={19} />
              </a>

            </div>

          </div>

        </div>


        {/* ==================================================
            Divider
        ================================================== */}

        <div
          className="
            my-10
            h-px
            w-full

            bg-gradient-to-r
            from-transparent
            via-slate-200
            to-transparent

            dark:via-slate-800
          "
        />


        {/* ==================================================
            Bottom Section
        ================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5

            md:flex-row
          "
        >

          <p
            className="
              text-sm
              font-medium

              text-slate-500

              dark:text-slate-400
            "
          >
            © 2026 QuickHelp AI. All rights reserved.
          </p>


          {/* Back to Top */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              inline-flex
              items-center
              gap-2

              rounded-xl

              border
              border-slate-300

              bg-white/70

              px-4
              py-2.5

              text-sm
              font-semibold

              text-slate-600

              shadow-sm

              backdrop-blur-sm

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-blue-300
              hover:bg-blue-50
              hover:text-blue-600
              hover:shadow-md

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400

              dark:border-slate-700
              dark:bg-slate-900/70
              dark:text-slate-300

              dark:hover:border-blue-500/50
              dark:hover:bg-blue-500/10
              dark:hover:text-blue-400
            "
          >

            Back to Top

            <ArrowUpRight
              className="
                h-4
                w-4

                -rotate-45

                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />

          </button>

        </div>

      </div>

    </footer>
  );
}


export default Footer;