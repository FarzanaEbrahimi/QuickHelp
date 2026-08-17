import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FileText,
  Bot,
  ArrowRight,
  Upload,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import { supabase } from "../lib/supabase";

import DashboardStats from "../components/DashboardStats";

function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  // --------------------------------------------------
  // Fetch Documents
  // --------------------------------------------------

  const fetchDocuments = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("support_documents")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (!error) {
      setDocuments(data || []);
    } else {
      console.log(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  // --------------------------------------------------
  // Recent Documents
  // --------------------------------------------------

  const recentDocuments = documents.slice(0, 5);

  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        text-slate-900
        transition-colors
        duration-300

        dark:bg-[#080f1f]
        dark:text-slate-100
      "
    >
      {/* ==================================================
          Main Dashboard
      ================================================== */}

      <main
        className="
          mx-auto
          max-w-[1700px]
          space-y-8
          px-5
          py-7
          lg:px-8
          xl:px-10
        "
      >
        {/* ==================================================
            Welcome Hero
        ================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-blue-100
            bg-gradient-to-br
            from-white
            via-blue-50
            to-cyan-50
            p-7
            shadow-lg
            shadow-blue-100/50
            transition-all
            duration-300

            dark:border-blue-900/40
            dark:from-slate-900
            dark:via-blue-950/60
            dark:to-slate-900
            dark:shadow-black/20

            lg:p-10
          "
        >
          {/* Decorative Background */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-blue-400/10
              blur-3xl

              dark:bg-blue-500/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-1/3
              h-80
              w-80
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
              top-1/2
              h-64
              w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-300/5
              blur-3xl

              dark:bg-blue-500/5
            "
          />

          {/* Hero Content */}

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Text */}

            <div className="max-w-2xl">
              {/* Brand Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-200
                  bg-blue-100/70
                  px-3.5
                  py-1.5
                  text-xs
                  font-bold
                  tracking-wide
                  text-blue-700

                  dark:border-blue-800/60
                  dark:bg-blue-500/10
                  dark:text-blue-300
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-blue-500
                    shadow-sm
                    shadow-blue-500/50
                  "
                />

                QuickHelp AI
              </div>

              {/* Heading */}

              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-slate-900

                  dark:text-white

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Your AI workspace

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-blue-600
                    via-blue-500
                    to-cyan-500
                    bg-clip-text
                    text-transparent

                    dark:from-blue-400
                    dark:via-cyan-400
                    dark:to-cyan-300
                  "
                >
                  is ready.
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-600

                  dark:text-slate-300

                  sm:text-base
                "
              >
                Manage your knowledge base, upload business
                documents, and get intelligent answers from
                your AI assistant.
              </p>

              {/* Small Status */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                <span
                  className="
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

                    dark:border-emerald-800/50
                    dark:bg-emerald-500/10
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

                  AI Assistant Ready
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    text-slate-400

                    dark:text-slate-500
                  "
                >
                  Powered by your knowledge base
                </span>
              </div>
            </div>

            {/* Quick Actions */}

            <div
              className="
                relative
                flex
                flex-col
                gap-3
                sm:flex-row
                lg:flex-col
                lg:min-w-[230px]
              "
            >
              {/* Upload */}

              <Link
                to="/dashboard/upload"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-blue-500/25

                  dark:from-blue-500
                  dark:to-cyan-500
                "
              >
                <Upload size={17} />

                Upload Document
              </Link>

              {/* Assistant */}

              <Link
                to="/assistant"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white/80
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-700
                  shadow-sm
                  backdrop-blur
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-700
                  hover:shadow-md

                  dark:border-slate-700
                  dark:bg-slate-800/80
                  dark:text-slate-200
                  dark:hover:border-blue-700
                  dark:hover:bg-slate-800
                  dark:hover:text-blue-400
                "
              >
                <Bot size={17} />

                Open AI Assistant

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-200
                  "
                />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            Dashboard Statistics
        ================================================== */}

        <DashboardStats documents={documents} />

        {/* ==================================================
            Recent Documents
        ================================================== */}

        <section
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-blue-100
            bg-white
            shadow-lg
            shadow-slate-200/60
            transition-all
            duration-300

            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/20
          "
        >
          {/* Recent Documents Header */}

          <div
            className="
              relative
              overflow-hidden
              border-b
              border-blue-100
              bg-gradient-to-r
              from-blue-50
              via-white
              to-cyan-50
              px-6
              py-6

              dark:border-slate-800
              dark:from-slate-900
              dark:via-slate-900
              dark:to-slate-800

              sm:px-7
            "
          >
            {/* Header Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-40
                w-40
                rounded-full
                bg-blue-400/10
                blur-3xl

                dark:bg-blue-500/10
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-500
                      to-cyan-500
                      text-white
                      shadow-lg
                      shadow-blue-500/20
                    "
                  >
                    <FileText size={20} />
                  </div>

                  <div>
                    <h2
                      className="
                        text-xl
                        font-black
                        tracking-tight
                        text-slate-900

                        dark:text-white

                        sm:text-2xl
                      "
                    >
                      Recent Documents
                    </h2>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-500

                        dark:text-slate-400
                      "
                    >
                      Your latest knowledge base files
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/dashboard/documents"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-blue-600
                  shadow-sm
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-blue-300
                  hover:bg-blue-50

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-blue-400
                  dark:hover:border-blue-500/50
                  dark:hover:bg-slate-700
                "
              >
                View all

                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Loading */}

          {loading ? (
            <div className="px-6 py-14">
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >
                <div
                  className="
                    h-5
                    w-5
                    animate-spin
                    rounded-full
                    border-2
                    border-slate-200
                    border-t-blue-600

                    dark:border-slate-700
                    dark:border-t-blue-400
                  "
                />

                Loading documents...
              </div>
            </div>
          ) : recentDocuments.length === 0 ? (
            /* Empty State */

            <div className="p-5 sm:p-7">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-blue-100
                  bg-gradient-to-br
                  from-blue-50
                  via-white
                  to-cyan-50
                  px-6
                  py-14
                  text-center

                  dark:border-slate-800
                  dark:from-slate-800/70
                  dark:via-slate-900
                  dark:to-slate-800
                "
              >
                {/* Decorative Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-48
                    w-48
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-400/10
                    blur-3xl

                    dark:bg-blue-500/10
                  "
                />

                <div className="relative flex flex-col items-center">
                  {/* Large Icon */}

                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-[24px]
                      bg-gradient-to-br
                      from-blue-500
                      to-cyan-500
                      text-white
                      shadow-xl
                      shadow-blue-500/20
                    "
                  >
                    <FileText size={34} />
                  </div>

                  <h3
                    className="
                      mt-7
                      text-2xl
                      font-black
                      tracking-tight
                      text-slate-900

                      dark:text-white
                    "
                  >
                    No documents yet
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-md
                      text-sm
                      leading-7
                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    Upload your first document to start
                    building your QuickHelp knowledge base.
                    Your AI assistant will use these files
                    to answer questions.
                  </p>

                  <Link
                    to="/dashboard/upload"
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-cyan-500
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-blue-600/20
                      transition-all
                      duration-200

                      hover:-translate-y-0.5
                      hover:shadow-xl
                      hover:shadow-blue-600/25
                    "
                  >
                    <Upload size={18} />

                    Upload Document

                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Documents List */

            <div
              className="
                divide-y
                divide-slate-100

                dark:divide-slate-800
              "
            >
              {recentDocuments.map((document) => (
                <div
                  key={document.id}
                  className="
                    group
                    flex
                    flex-col
                    gap-4
                    px-6
                    py-5
                    transition-all
                    duration-200

                    hover:bg-blue-50/60

                    dark:hover:bg-slate-800/70

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:px-7
                  "
                >
                  {/* Document Info */}

                  <div className="flex min-w-0 items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                        text-blue-600
                        transition-all
                        duration-200
                        group-hover:scale-105
                        group-hover:bg-blue-100

                        dark:bg-blue-500/10
                        dark:text-blue-400
                        dark:group-hover:bg-blue-500/20
                      "
                    >
                      <FileText size={20} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          font-bold
                          text-slate-900

                          dark:text-white
                        "
                        title={
                          document.title ||
                          document.file_name
                        }
                      >
                        {document.title ||
                          document.file_name}
                      </p>

                      <div
                        className="
                          mt-1.5
                          flex
                          flex-wrap
                          items-center
                          gap-3
                          text-xs
                          text-slate-500

                          dark:text-slate-400
                        "
                      >
                        <span className="flex items-center gap-1">
                          <Clock3 size={13} />

                          {document.created_at
                            ? new Date(
                                document.created_at
                              ).toLocaleDateString()
                            : "Recently added"}
                        </span>

                        <span
                          className="
                            flex
                            items-center
                            gap-1
                            font-medium
                            text-emerald-600

                            dark:text-emerald-400
                          "
                        >
                          <CheckCircle2 size={13} />

                          Available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status */}

                  <span
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-emerald-200
                      bg-emerald-50
                      px-3.5
                      py-1.5
                      text-xs
                      font-bold
                      text-emerald-700

                      dark:border-emerald-500/20
                      dark:bg-emerald-500/10
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

                    Ready
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ==================================================
            AI Assistant CTA
        ================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-emerald-100
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-cyan-50
            p-7
            shadow-lg
            shadow-emerald-100/40
            transition-all
            duration-300

            dark:border-emerald-900/40
            dark:from-slate-900
            dark:via-slate-900
            dark:to-slate-800
            dark:shadow-black/20

            lg:p-9
          "
        >
          {/* Decorative Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-64
              w-64
              rounded-full
              bg-emerald-400/10
              blur-3xl

              dark:bg-emerald-500/10
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-13
                  w-13
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-emerald-500
                  to-cyan-500
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                "
              >
                <Bot size={24} />
              </div>

              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-emerald-100
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-emerald-700

                    dark:bg-emerald-500/10
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

                  AI Ready
                </div>

                <h2
                  className="
                    mt-3
                    text-2xl
                    font-black
                    tracking-tight
                    text-slate-900

                    dark:text-white
                  "
                >
                  Ask your knowledge base
                </h2>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    leading-7
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Ask questions about your uploaded
                  documents and get intelligent answers
                  from your AI assistant.
                </p>
              </div>
            </div>

            <Link
              to="/assistant"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-slate-900
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-200

                hover:-translate-y-0.5
                hover:bg-slate-800

                dark:bg-white
                dark:text-slate-900
                dark:hover:bg-slate-100
              "
            >
              Open Assistant

              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;