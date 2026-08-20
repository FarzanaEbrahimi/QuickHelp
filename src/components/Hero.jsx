import {
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Upload,
  BrainCircuit,
  MessageSquareText,
  BarChart3,
} from "lucide-react";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white
        transition-colors
        duration-300

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      {/* ========================================================= */}
      {/* Background Decorative Glow */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-24
            top-20
            h-72
            w-72
            rounded-full
            bg-blue-500/10
            blur-3xl

            sm:h-80
            sm:w-80

            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute
            right-[-100px]
            top-1/3
            h-72
            w-72
            rounded-full
            bg-cyan-400/10
            blur-3xl

            sm:h-80
            sm:w-80

            dark:bg-cyan-500/10
          "
        />

        <div
          className="
            absolute
            bottom-[-100px]
            left-1/3
            h-72
            w-72
            rounded-full
            bg-violet-400/10
            blur-3xl

            dark:bg-violet-500/10
          "
        />
      </div>

      {/* ========================================================= */}
      {/* Main Container */}
      {/* ========================================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          px-5
          py-14

          sm:gap-14
          sm:px-6
          sm:py-20

          lg:min-h-[calc(100vh-5rem)]
          lg:grid-cols-2
          lg:gap-16
          lg:px-8
          lg:py-24
        "
      >
        {/* ======================================================= */}
        {/* Left Content */}
        {/* ======================================================= */}

        <div className="text-center lg:text-left">

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-4
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-blue-700
              shadow-sm

              sm:px-5
              sm:text-sm

              dark:border-blue-900/60
              dark:bg-blue-950/60
              dark:text-blue-300
            "
          >
            AI Knowledge Platform
          </span>

          {/* Heading */}

          <h1
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-4xl
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-slate-900

              sm:mt-7
              sm:text-5xl

              lg:mx-0
              lg:text-6xl

              dark:text-white
            "
          >
            Build Your AI

            <span
              className="
                mt-1
                block
                text-blue-600
                dark:text-blue-400
              "
            >
              Support Assistant
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-slate-600

              sm:mt-7
              sm:text-lg
              sm:leading-8

              lg:mx-0

              dark:text-slate-300
            "
          >
            Upload your documents, generate AI embeddings, and deliver
            instant answers with an intelligent customer support assistant
            powered by Retrieval-Augmented Generation (RAG).
          </p>

          {/* ===================================================== */}
          {/* Key Benefits */}
          {/* ===================================================== */}

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-md
              gap-3
              text-left

              sm:mt-9

              lg:mx-0
              lg:max-w-none
            "
          >
            {[
              "Upload PDFs & FAQs",
              "Semantic Search",
              "Instant AI Responses",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-sm
                  text-slate-700

                  sm:text-base

                  lg:justify-start

                  dark:text-slate-300
                "
              >
                <CheckCircle2
                  size={19}
                  className="
                    shrink-0
                    text-emerald-600
                    dark:text-emerald-400
                  "
                />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* ===================================================== */}
          {/* CTA Buttons */}
          {/* ===================================================== */}

          <div
            className="
              mx-auto
              mt-10
              flex
              w-full
              max-w-md
              flex-col
              gap-3

              sm:mt-11
              sm:flex-row
              sm:justify-center

              lg:mx-0
              lg:max-w-none
              lg:justify-start
            "
          >
            {/* AI Assistant */}

            <Link
              to="/assistant"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-6
                py-3
                text-base
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-blue-600/25

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2

                sm:px-7
                sm:text-lg
              "
            >
              Try AI Chat

              <ArrowRight className="h-5 w-5" />
            </Link>

            {/* Dashboard */}

            <Link
              to="/dashboard"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-300
                bg-white
                px-6
                py-3
                text-base
                font-semibold
                text-slate-700
                shadow-sm
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-slate-400
                hover:bg-slate-50
                hover:shadow-md

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2

                sm:px-7
                sm:text-lg

                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-200
                dark:hover:border-slate-600
                dark:hover:bg-slate-800
              "
            >
              <PlayCircle className="h-5 w-5" />

              View Dashboard
            </Link>
          </div>
        </div>

        {/* ======================================================= */}
        {/* Dashboard Preview */}
        {/* ======================================================= */}

        <div
          className="
            flex
            justify-center

            lg:justify-end
          "
        >
          <div
            className="
              relative
              w-full
              max-w-lg
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-8
                rounded-[2.5rem]
                bg-gradient-to-r
                from-blue-400/20
                via-violet-400/10
                to-cyan-400/20
                blur-3xl

                dark:from-blue-500/10
                dark:via-violet-500/10
                dark:to-cyan-500/10
              "
            />

            {/* ================================================= */}
            {/* Preview Card */}
            {/* ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-slate-200
                bg-white/95
                p-4
                shadow-2xl
                backdrop-blur-sm
                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-blue-200/40

                sm:rounded-[2rem]
                sm:p-6

                dark:border-slate-700
                dark:bg-slate-900/95
                dark:hover:shadow-blue-950/50
              "
            >
              {/* ================================================= */}
              {/* Top Bar */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3

                  sm:gap-4
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-slate-400

                      sm:text-xs
                    "
                  >
                    QuickHelp
                  </p>

                  <h3
                    className="
                      mt-1
                      truncate
                      text-lg
                      font-bold
                      text-slate-900

                      sm:text-xl

                      dark:text-white
                    "
                  >
                    Dashboard Preview
                  </h3>
                </div>

                <span
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-full
                    bg-emerald-100
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    text-emerald-700

                    sm:px-3
                    sm:py-1.5
                    sm:text-xs

                    dark:bg-emerald-950/60
                    dark:text-emerald-400
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-500
                    "
                  />

                  Online
                </span>
              </div>

              {/* ================================================= */}
              {/* Preview Items */}
              {/* ================================================= */}

              <div
                className="
                  mt-5
                  space-y-3

                  sm:mt-7
                  sm:space-y-4
                "
              >
                {/* Upload */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-blue-100
                    bg-gradient-to-r
                    from-blue-50
                    to-cyan-50
                    p-3

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-md

                    sm:p-4

                    dark:border-blue-900/40
                    dark:from-blue-950/50
                    dark:to-cyan-950/30
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3

                      sm:gap-4
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
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-blue-500
                          to-cyan-500
                          text-white
                          shadow-sm

                          sm:h-10
                          sm:w-10
                        "
                      >
                        <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-800

                            sm:text-base

                            dark:text-slate-200
                          "
                        >
                          Upload Documents
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[11px]
                            text-slate-500

                            sm:text-xs

                            dark:text-slate-400
                          "
                        >
                          Knowledge Base
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        hidden
                        shrink-0
                        text-xs
                        font-semibold
                        text-blue-600

                        sm:block
                        sm:text-sm

                        dark:text-blue-400
                      "
                    >
                      Documents Ready
                    </span>

                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-semibold
                        text-blue-600

                        sm:hidden

                        dark:text-blue-400
                      "
                    >
                      Ready
                    </span>
                  </div>
                </div>

                {/* Embeddings */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-violet-100
                    bg-gradient-to-r
                    from-violet-50
                    to-purple-50
                    p-3

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-md

                    sm:p-4

                    dark:border-violet-900/40
                    dark:from-violet-950/50
                    dark:to-purple-950/30
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3

                      sm:gap-4
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
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-violet-500
                          to-purple-500
                          text-white
                          shadow-sm

                          sm:h-10
                          sm:w-10
                        "
                      >
                        <BrainCircuit className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-800

                            sm:text-base

                            dark:text-slate-200
                          "
                        >
                          Generate Embeddings
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[11px]
                            text-slate-500

                            sm:text-xs

                            dark:text-slate-400
                          "
                        >
                          AI Knowledge
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-semibold
                        text-emerald-600

                        sm:text-sm

                        dark:text-emerald-400
                      "
                    >
                      Completed
                    </span>
                  </div>
                </div>

                {/* AI Chat */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-emerald-100
                    bg-gradient-to-r
                    from-emerald-50
                    to-green-50
                    p-3

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-md

                    sm:p-4

                    dark:border-emerald-900/40
                    dark:from-emerald-950/50
                    dark:to-green-950/30
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3

                      sm:gap-4
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
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-emerald-500
                          to-green-500
                          text-white
                          shadow-sm

                          sm:h-10
                          sm:w-10
                        "
                      >
                        <MessageSquareText className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-800

                            sm:text-base

                            dark:text-slate-200
                          "
                        >
                          AI Chat
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[11px]
                            text-slate-500

                            sm:text-xs

                            dark:text-slate-400
                          "
                        >
                          Customer Support
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-semibold
                        text-emerald-600

                        sm:text-sm

                        dark:text-emerald-400
                      "
                    >
                      Ready
                    </span>
                  </div>
                </div>

                {/* Analytics */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-orange-100
                    bg-gradient-to-r
                    from-orange-50
                    to-amber-50
                    p-3

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-md

                    sm:p-4

                    dark:border-orange-900/40
                    dark:from-orange-950/50
                    dark:to-amber-950/30
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3

                      sm:gap-4
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
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-orange-500
                          to-amber-500
                          text-white
                          shadow-sm

                          sm:h-10
                          sm:w-10
                        "
                      >
                        <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-800

                            sm:text-base

                            dark:text-slate-200
                          "
                        >
                          Analytics
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[11px]
                            text-slate-500

                            sm:text-xs

                            dark:text-slate-400
                          "
                        >
                          Performance
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        shrink-0
                        text-[10px]
                        font-semibold
                        text-orange-600

                        sm:text-sm

                        dark:text-orange-400
                      "
                    >
                      AI Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* Bottom Status */}
              {/* ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-3
                  py-2.5

                  sm:mt-6
                  sm:px-4
                  sm:py-3

                  dark:border-slate-800
                  dark:bg-slate-950
                "
              >
                <span
                  className="
                    text-[10px]
                    font-medium
                    text-slate-500

                    sm:text-xs

                    dark:text-slate-400
                  "
                >
                  AI System Status
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    text-emerald-600

                    sm:text-xs

                    dark:text-emerald-400
                  "
                >
                  All Systems Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;