import { useEffect, useRef, useState } from "react";

import { supabase } from "../lib/supabase";
import { extractPdfText } from "../services/pdf";
import { createEmbeddings } from "../services/embeddings";

import DashboardHeader from "../components/DashboardHeader";
import UploadCard from "../components/UploadCard";

function UploadCenter() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef(null);

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

    if (error) {
      console.error("Failed to fetch documents:", error);
      setDocuments([]);
    } else {
      setDocuments(data || []);
    }

    setLoading(false);
  };

  // --------------------------------------------------
  // Initial Fetch + Sync With Other Dashboard Pages
  // --------------------------------------------------

  useEffect(() => {
    fetchDocuments();

    const handleDocumentsUpdated = () => {
      fetchDocuments();
    };

    window.addEventListener(
      "quickhelp-documents-updated",
      handleDocumentsUpdated
    );

    window.addEventListener(
      "focus",
      handleDocumentsUpdated
    );

    return () => {
      window.removeEventListener(
        "quickhelp-documents-updated",
        handleDocumentsUpdated
      );

      window.removeEventListener(
        "focus",
        handleDocumentsUpdated
      );
    };
  }, []);

  // --------------------------------------------------
  // Upload File
  // --------------------------------------------------

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setUploading(true);

    try {
      // ----------------------------------------------
      // Validate File
      // ----------------------------------------------

      const allowedExtensions = [
        ".pdf",
        ".txt",
        ".doc",
        ".docx",
      ];

      const fileExtension =
        "." + file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        throw new Error(
          "Unsupported file type. Please upload PDF, DOC, DOCX or TXT."
        );
      }

      // ----------------------------------------------
      // Safe File Name
      // ----------------------------------------------

      const safeFileName = file.name.replace(
        /[^\w.-]/g,
        "_"
      );

      const filePath = `${Date.now()}-${safeFileName}`;

      // ----------------------------------------------
      // Upload To Supabase Storage
      // ----------------------------------------------

      const { error: uploadError } =
        await supabase.storage
          .from("support-docs")
          .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // ----------------------------------------------
      // Get Public URL
      // ----------------------------------------------

      const { data: publicUrlData } =
        supabase.storage
          .from("support-docs")
          .getPublicUrl(filePath);

      const publicUrl =
        publicUrlData?.publicUrl;

      if (!publicUrl) {
        throw new Error(
          "Could not create public file URL."
        );
      }

      // ----------------------------------------------
      // Save Document In Database
      // ----------------------------------------------

      const {
        data: documentData,
        error: dbError,
      } = await supabase
        .from("support_documents")
        .insert([
          {
            title: file.name,
            file_name: filePath,
            content: publicUrl,
          },
        ])
        .select()
        .single();

      // ----------------------------------------------
      // If Database Insert Fails
      // Remove Uploaded Storage File
      // ----------------------------------------------

      if (dbError) {
        await supabase.storage
          .from("support-docs")
          .remove([filePath]);

        throw dbError;
      }

      // ----------------------------------------------
      // Extract Text
      // ----------------------------------------------

      const text = await extractPdfText(file);

      // ----------------------------------------------
      // Create Embeddings
      // ----------------------------------------------

      await createEmbeddings(
        documentData.id,
        text
      );

      // ----------------------------------------------
      // Refresh Local Documents
      // ----------------------------------------------

      await fetchDocuments();

      // ----------------------------------------------
      // Notify Other Dashboard Pages
      // ----------------------------------------------

      window.dispatchEvent(
        new Event("quickhelp-documents-updated")
      );

      console.log(
        "Document uploaded successfully:",
        documentData
      );
    } catch (error) {
      console.error(
        "Upload failed:",
        error
      );

      alert(
        error?.message ||
          "Something went wrong while uploading the document."
      );
    } finally {
      setUploading(false);

      // Allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
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
      />

      <div
        className="
          mx-auto
          max-w-[1700px]
          space-y-8
          px-5
          pb-10
          lg:px-8
          xl:px-10
        "
      >
        {/* ========================================= */}
        {/* Page Introduction */}
        {/* ========================================= */}

        <section>
          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-slate-900
              transition-colors
              duration-300
              dark:text-white
            "
          >
            Upload Center
          </h2>

          <p
            className="
              mt-2
              max-w-2xl
              text-slate-500
              transition-colors
              duration-300
              dark:text-slate-400
            "
          >
            Upload your business documents to build
            your AI knowledge base.
          </p>
        </section>

        {/* ========================================= */}
        {/* Upload Card */}
        {/* ========================================= */}

        <section>
          <UploadCard
            fileInputRef={fileInputRef}
            handleUpload={handleUpload}
          />
        </section>

        {/* ========================================= */}
        {/* Processing Status */}
        {/* ========================================= */}

        {uploading && (
          <section
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-blue-200
              bg-gradient-to-r
              from-blue-50
              via-white
              to-cyan-50
              p-6
              shadow-sm
              transition-all
              duration-300
              dark:border-blue-900/60
              dark:from-blue-950/50
              dark:via-slate-900
              dark:to-cyan-950/40
              dark:shadow-lg
              dark:shadow-black/20
            "
          >
            <div
              className="
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                bg-blue-400/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                  dark:bg-blue-500/10
                "
              >
                <div
                  className="
                    h-6
                    w-6
                    animate-spin
                    rounded-full
                    border-[3px]
                    border-blue-200
                    border-t-blue-600
                    dark:border-blue-900
                    dark:border-t-blue-400
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    font-bold
                    text-blue-900
                    dark:text-blue-300
                  "
                >
                  Processing document...
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-6
                    text-blue-700
                    dark:text-blue-400
                  "
                >
                  Uploading, extracting text and
                  creating AI embeddings.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================= */}
        {/* Current Documents */}
        {/* ========================================= */}

        <section
          className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-lg
            dark:shadow-black/10
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <span className="text-sm font-black">
                    {documents.length}
                  </span>
                </div>

                <h3
                  className="
                    text-xl
                    font-black
                    tracking-tight
                    text-slate-900
                    dark:text-white
                  "
                >
                  Uploaded Documents
                </h3>
              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {documents.length} document
                {documents.length !== 1
                  ? "s"
                  : ""}{" "}
                in your knowledge base.
              </p>
            </div>

            {loading && (
              <div
                className="
                  h-5
                  w-5
                  shrink-0
                  animate-spin
                  rounded-full
                  border-2
                  border-slate-200
                  border-t-blue-600
                  dark:border-slate-700
                  dark:border-t-blue-400
                "
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default UploadCenter;