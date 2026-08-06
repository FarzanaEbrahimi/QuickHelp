import {
  BrainCircuit,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { FaGithub , FaLinkedin} from "react-icons/fa";
function Footer() {

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };
    return (

    <footer
      className="
        mt-24
        border-t
        border-slate-200
        bg-slate-950
        text-white
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-8
          py-16
        "
      >

        {/* Top Section */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-4
          "
        >

          {/* Brand */}

          <div>

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
              "
            >

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
                  via-cyan-500
                  to-purple-600
                  shadow-lg
                "
              >

                <BrainCircuit className="h-7 w-7 text-white" />

              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-black
                  "
                >
                  QuickHelp AI
                </h2>

                <p
                  className="
                    text-sm
                    text-slate-400
                  "
                >
                  AI Knowledge Platform
                </p>

              </div>

            </Link>

            <p
              className="
                mt-6
                max-w-sm
                leading-8
                text-slate-400
              "
            >
              Build intelligent knowledge bases from your business
              documents and deliver instant AI-powered customer
              support with Retrieval-Augmented Generation (RAG).
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className="
                text-lg
                font-bold
              "
            >
              Quick Links
            </h3>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >

              <Link
                to="/"
                className="
                  transition
                  hover:text-cyan-400
                "
              >
                Home
              </Link>

              <a
                href="/#features"
                className="
                  transition
                  hover:text-cyan-400
                "
              >
                Features
              </a>

              <a
                href="/#how-it-works"
                className="
                  transition
                  hover:text-cyan-400
                "
              >
                How it Works
              </a>

              <Link
                to="/dashboard"
                className="
                  transition
                  hover:text-cyan-400
                "
              >
                Dashboard
              </Link>

            </div>

          </div>
                    {/* Resources */}

          <div>

            <h3
              className="
                text-lg
                font-bold
              "
            >
              Resources
            </h3>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4
              "
            >

              <a
                href="#"
                className="
                  transition
                  hover:text-cyan-400
                "
              >
                Documentation
              </a>

              <a
                href="#"
                className="
                  transition
                  hover:text-cyan-400
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  transition
                  hover:text-cyan-400
                "
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  gap-2
                  transition
                  hover:text-cyan-400
                "
              >
                API Reference

                <ArrowUpRight className="h-4 w-4" />

              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3
              className="
                text-lg
                font-bold
              "
            >
              Contact
            </h3>

            <div
              className="
                mt-6
                space-y-5
              "
            >

              <a
                href="mailto:hello@quickhelp.ai"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  transition
                  hover:text-cyan-400
                "
              >

                <Mail className="h-5 w-5" />

                hello@quickhelp.ai

              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  transition
                  hover:text-cyan-400
                "
              >

                <FaGithub   size={22}/>

                GitHub

              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  transition
                  hover:text-cyan-400
                "
              >

               <FaLinkedin  size={22} />

                LinkedIn

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div
          className="
            my-10
            h-px
            w-full
            bg-slate-800
          "
        />
                {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-6
            md:flex-row
          "
        >

          <div>

            <p className="text-sm text-slate-400">
              © 2026 QuickHelp AI. All rights reserved.
            </p>

            <p
              className="
                mt-2
                text-sm
                text-slate-500
              "
            >
              Built with React • Tailwind CSS • Supabase • OpenRouter
            </p>

          </div>

          <button
            onClick={scrollToTop}
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-slate-700
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-slate-900
              hover:text-cyan-400
            "
          >

            Back to Top

            <ArrowUpRight className="h-4 w-4 -rotate-45" />

          </button>

        </div>

      </div>

    </footer>

  );

}

export default Footer;
