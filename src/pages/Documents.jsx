import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

import DashboardHeader from "../components/DashboardHeader";
import DocumentsTable from "../components/DocumentsTable";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // --------------------------------------------------
  // Fetch Documents
  // --------------------------------------------------

  const fetchDocuments = async () => {
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("support_documents")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (error) {
        console.error("Error fetching documents:", error);
        setDocuments([]);
        return;
      }

      setDocuments(data || []);
    } catch (error) {
      console.error("Unexpected fetch error:", error);
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // Initial Fetch
  // --------------------------------------------------

  useEffect(() => {
    fetchDocuments();
  }, []);

  // --------------------------------------------------
  // Sync With Other Dashboard Pages
  // --------------------------------------------------

  useEffect(() => {
    const handleDocumentsUpdated = () => {
      fetchDocuments();
    };

    window.addEventListener(
      "quickhelp-documents-updated",
      handleDocumentsUpdated
    );

    return () => {
      window.removeEventListener(
        "quickhelp-documents-updated",
        handleDocumentsUpdated
      );
    };
  }, []);

  // --------------------------------------------------
  // Search / Filter
  // --------------------------------------------------

  const filteredDocuments = documents.filter((document) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return true;

    return (
      document.title?.toLowerCase().includes(query) ||
      document.file_name?.toLowerCase().includes(query)
    );
  });

  // --------------------------------------------------
  // Document Deleted
  // --------------------------------------------------
  // IMPORTANT:
  // DocumentsTable performs the actual deletion.
  // This function ONLY updates the local UI state.
  // --------------------------------------------------

  const handleDocumentDeleted = (documentId) => {
    if (!documentId) return;

    setDocuments((currentDocuments) =>
      currentDocuments.filter(
        (document) => document.id !== documentId
      )
    );
  };

  return (
    <main
      className="
        min-h-screen
        bg-slate-100
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      {/* ========================================= */}
      {/* Page Header */}
      {/* ========================================= */}

      <DashboardHeader
        userName="Farzana"
        onSearch={setSearchQuery}
      />

      {/* ========================================= */}
      {/* Page Content */}
      {/* ========================================= */}

      <div
        className="
          mx-auto
          max-w-[1700px]
          space-y-8
          px-5
          pb-12
          pt-2
          lg:px-8
          xl:px-10
        "
      >
        {/* ========================================= */}
        {/* Page Introduction */}
        {/* ========================================= */}

        <section>
          <div>
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-100
                bg-blue-50
                px-3
                py-1
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-blue-600

                transition-all
                duration-300

                dark:border-blue-500/20
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              Knowledge Base
            </div>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-slate-900

                transition-colors
                duration-300

                dark:text-white
              "
            >
              Documents
            </h2>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-7
                text-slate-500

                transition-colors
                duration-300

                dark:text-slate-400

                sm:text-base
              "
            >
              Manage the documents used by your AI
              knowledge base.
            </p>
          </div>
        </section>

        {/* ========================================= */}
        {/* Documents */}
        {/* ========================================= */}

        {loading ? (
          <section
            className="
              flex
              min-h-[320px]
              items-center
              justify-center
              rounded-[30px]
              border
              border-slate-200
              bg-white
              shadow-sm

              transition-all
              duration-300

              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/10
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  h-10
                  w-10
                  animate-spin
                  rounded-full
                  border-4
                  border-slate-200
                  border-t-blue-600

                  dark:border-slate-700
                  dark:border-t-blue-400
                "
              />

              <p
                className="
                  mt-4
                  text-sm
                  font-medium
                  text-slate-500

                  transition-colors
                  duration-300

                  dark:text-slate-400
                "
              >
                Loading documents...
              </p>
            </div>
          </section>
        ) : (
          <DocumentsTable
            documents={filteredDocuments}
            onDocumentDeleted={handleDocumentDeleted}
          />
        )}
      </div>
    </main>
  );
}

export default Documents;