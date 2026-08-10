import { useEffect, useRef, useState } from "react";

import { supabase } from "../lib/supabase";
import { extractPdfText } from "../services/pdf";
import { createEmbeddings } from "../services/embeddings";
import { sendMessage } from "../services/chat";

import Navbar from "../components/Navbar";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";

import UploadCard from "../components/UploadCard";
import DocumentsTable from "../components/DocumentsTable";
import AIChatPanel from "../components/AIChatPanel";
import Footer from "../components/Footer";

function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const fileInputRef = useRef(null);

  // Dashboard sections
  const overviewRef = useRef(null);
  const uploadRef = useRef(null);
  const documentsRef = useRef(null);
  const chatRef = useRef(null);
  // --------------------------------------------------
// Handle dashboard navigation
// --------------------------------------------------

useEffect(() => {
  // Normal Dashboard navigation
  // /dashboard → top of dashboard
  if (window.location.hash !== "#chat") {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    return;
  }

  // Get Started → /dashboard#chat
  // Scroll to AI Assistant
  const timer = setTimeout(() => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Remove #chat after scrolling
    window.history.replaceState(
      null,
      "",
      "/dashboard"
    );
  }, 500);

  return () => clearTimeout(timer);
}, []);

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
  // Upload File
  // --------------------------------------------------

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const safeFileName = file.name.replace(
        /[^\w.\-]/g,
        "_"
      );

      const filePath =
        `${Date.now()}-${safeFileName}`;

      // Upload to Storage
      const { error: uploadError } =
        await supabase.storage
          .from("support-docs")
          .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const {
        data: publicUrlData,
      } = supabase.storage
        .from("support-docs")
        .getPublicUrl(filePath);

      // Save document information
      const {
        data: documentData,
        error: dbError,
      } = await supabase
        .from("support_documents")
        .insert([
          {
            title: file.name,
            file_name: filePath,
            content: publicUrlData.publicUrl,
          },
        ])
        .select()
        .single();

      if (dbError) {
        throw dbError;
      }

      // Extract PDF text
      const text = await extractPdfText(file);

      // Create embeddings
      await createEmbeddings(
        documentData.id,
        text
      );

      // Refresh documents
      await fetchDocuments();

    } catch (err) {
      console.log(err);
    }
  };

  // --------------------------------------------------
  // Test Chat
  // --------------------------------------------------

  const testChat = async () => {
    try {
      const response = await sendMessage(
        "What is this document about?"
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // --------------------------------------------------
  // Sidebar Navigation
  // --------------------------------------------------

  const scrollToSection = (section) => {
    const refs = {
      overview: overviewRef,
      upload: uploadRef,
      documents: documentsRef,
      chat: chatRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
        <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <Navbar onMenuClick={openSidebar} />

      <div className="flex">

        {/* Sidebar */}
        <DashboardSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          onNavigate={scrollToSection}
        />
        {/* <DashboardSidebar
          onNavigate={scrollToSection}
        /> */}

        {/* Main Content */}
        <div className="min-w-0 flex-1">

          <DashboardHeader
            documents={documents}
            userName="Farzana"
            workspace="Pro"
            aiStatus="Online"
          />

          <main
            className="
              space-y-8
              px-5
              py-6
              lg:px-8
              xl:px-10
            "
          >

            {/* ==================================== */}
            {/* Dashboard Overview */}
            {/* ==================================== */}

            <section
              ref={overviewRef}
              id="overview"
              className="
                overflow-hidden
                rounded-[36px]
                bg-gradient-to-br
                from-slate-900
                via-blue-900
                to-cyan-700
                p-8
                text-white
                shadow-2xl
                lg:p-10
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-8
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >

                <div className="max-w-3xl">

                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[0.35em]
                      text-cyan-200
                    "
                  >
                    QUICKHELP AI
                  </p>

                  <h1
                    className="
                      mt-4
                      text-4xl
                      font-black
                      leading-tight
                      lg:text-5xl
                    "
                  >
                    AI Customer Support
                    <br />
                    Dashboard
                  </h1>

                  <p
                    className="
                      mt-6
                      max-w-2xl
                      text-lg
                      leading-8
                      text-slate-200
                    "
                  >
                    Manage your documents and get
                    answers from your AI assistant
                    in one place.
                  </p>

                </div>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-5
                    lg:w-[360px]
                  "
                >

                  <div
                    className="
                      rounded-3xl
                      bg-white/10
                      p-6
                      backdrop-blur
                    "
                  >
                    <p className="text-sm text-cyan-100">
                      Documents
                    </p>

                    <h2
                      className="
                        mt-3
                        text-4xl
                        font-black
                      "
                    >
                      {documents.length}
                    </h2>
                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-white/10
                      p-6
                      backdrop-blur
                    "
                  >
                    <p className="text-sm text-cyan-100">
                      AI Status
                    </p>

                    <h2
                      className="
                        mt-3
                        text-4xl
                        font-black
                      "
                    >
                      Ready
                    </h2>
                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-white/10
                      p-6
                      backdrop-blur
                    "
                  >
                    <p className="text-sm text-cyan-100">
                      Documents
                    </p>

                    <h2
                      className="
                        mt-3
                        text-4xl
                        font-black
                      "
                    >
                      {documents.length}
                    </h2>
                  </div>

                  <div
                    className="
                      rounded-3xl
                      bg-white/10
                      p-6
                      backdrop-blur
                    "
                  >
                    <p className="text-sm text-cyan-100">
                      Workspace
                    </p>

                    <h2
                      className="
                        mt-3
                        text-4xl
                        font-black
                      "
                    >
                      Pro
                    </h2>
                  </div>

                </div>

              </div>

            </section>

            {/* ==================================== */}
            {/* Dashboard Statistics */}
            {/* ==================================== */}

            <DashboardStats
              documents={documents}
            />

            {/* ==================================== */}
            {/* Upload + Documents */}
            {/* ==================================== */}

            <div
              className="
                grid
                gap-8
                xl:grid-cols-2
              "
            >

              {/* Upload */}
              <section
                ref={uploadRef}
                id="upload"
                className="scroll-mt-32"
              >

                <UploadCard
                  fileInputRef={fileInputRef}
                  handleUpload={handleUpload}
                  documents={documents}
                />

              </section>

              {/* Uploaded Documents */}
              <section
                ref={documentsRef}
                id="documents"
                className="scroll-mt-32"
              >

                <div className="space-y-6">

                  <div>

                    <h2
                      className="
                        text-3xl
                        font-black
                        text-slate-900
                      "
                    >
                      Your Documents
                    </h2>

                    <p
                      className="
                        mt-2
                        text-slate-500
                      "
                    >
                      View and manage the files
                      you have added to QuickHelp.
                    </p>

                  </div>

                  <DocumentsTable
                    documents={documents}
                  />

                </div>

              </section>

            </div>

            {/* ==================================== */}
            {/* AI Assistant */}
            {/* ==================================== */}

            <section
              ref={chatRef}
              id="chat"
              className="scroll-mt-32"
            >

              <div className="mb-6">

                <h2
                  className="
                    text-3xl
                    font-black
                    text-slate-900
                  "
                >
                  AI Assistant
                </h2>

                <p
                  className="
                    mt-2
                    text-slate-500
                  "
                >
                  Ask questions about your
                  uploaded documents and get
                  clear answers.
                </p>

              </div>

              <AIChatPanel
                sendMessage={sendMessage}
              />

            </section>
                        {/* ==================================== */}
            {/* Bottom Dashboard Banner */}
            {/* ==================================== */}

            <section>

              <div
                className="
                  overflow-hidden
                  rounded-[36px]
                  bg-gradient-to-r
                  from-slate-900
                  via-slate-800
                  to-slate-900
                  p-8
                  text-white
                  lg:p-10
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    gap-8
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                  "
                >

                  <div className="max-w-2xl">

                    <p
                      className="
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-cyan-400
                      "
                    >
                      QUICKHELP AI
                    </p>

                    <h2
                      className="
                        mt-4
                        text-4xl
                        font-black
                      "
                    >
                      Your workspace is ready.
                    </h2>

                    <p
                      className="
                        mt-5
                        leading-8
                        text-slate-300
                      "
                    >
                      Add your documents and use
                      the AI assistant to find
                      answers quickly.
                    </p>

                  </div>

                  <div
                    className="
                      grid
                      gap-5
                      sm:grid-cols-3
                    "
                  >

                    <div
                      className="
                        rounded-3xl
                        bg-white/10
                        p-6
                        backdrop-blur
                      "
                    >

                      <h3
                        className="
                          text-4xl
                          font-black
                        "
                      >
                        {documents.length}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-slate-300
                        "
                      >
                        Documents
                      </p>

                    </div>

                    <div
                      className="
                        rounded-3xl
                        bg-white/10
                        p-6
                        backdrop-blur
                      "
                    >

                      <h3
                        className="
                          text-4xl
                          font-black
                        "
                      >
                        Ready
                      </h3>

                      <p
                        className="
                          mt-2
                          text-slate-300
                        "
                      >
                        AI Assistant
                      </p>

                    </div>

                    <div
                      className="
                        rounded-3xl
                        bg-white/10
                        p-6
                        backdrop-blur
                      "
                    >

                      <h3
                        className="
                          text-4xl
                          font-black
                        "
                      >
                        Live
                      </h3>

                      <p
                        className="
                          mt-2
                          text-slate-300
                        "
                      >
                        Workspace
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </section>

          </main>

        </div>

      </div>

      {/* Loading Overlay */}

      {loading && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-white/70
            backdrop-blur-sm
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              gap-5
              rounded-[32px]
              bg-white
              px-10
              py-10
              shadow-2xl
            "
          >

            <div
              className="
                h-14
                w-14
                animate-spin
                rounded-full
                border-[5px]
                border-slate-200
                border-t-blue-600
              "
            />

            <div className="text-center">

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                Loading Dashboard
              </h3>

              <p
                className="
                  mt-2
                  text-slate-500
                "
              >
                Getting your workspace ready...
              </p>

            </div>

          </div>

        </div>
      )}

      <Footer />

    </div>
  );
}

export default Dashboard;