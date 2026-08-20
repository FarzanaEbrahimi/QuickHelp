import { useEffect, useRef, useState } from "react";

import { supabase } from "../lib/supabase";
import { extractPdfText } from "../services/pdf";
import { createEmbeddings } from "../services/embeddings";

import DashboardHeader from "../components/DashboardHeader";
import UploadCard from "../components/UploadCard";

function UploadCenter() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Upload state
  const [uploading, setUploading] = useState(false);
  const [uploadStage, setUploadStage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fileInputRef = useRef(null);

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
        console.error(
          "Failed to fetch documents:",
          error
        );

        setDocuments([]);
        return;
      }

      setDocuments(data || []);
    } catch (error) {
      console.error(
        "Unexpected fetch error:",
        error
      );

      setDocuments([]);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // Initial Fetch + Sync
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
  // Upload PDF
  // --------------------------------------------------

  const handleUpload = async (event) => {
    // Prevent multiple uploads at the same time.
    if (uploading) {
      return;
    }

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    // Clear previous status messages.
    setSuccessMessage("");
    setErrorMessage("");

    let filePath = null;
    let documentId = null;

    try {
      setUploading(true);

      // ----------------------------------------------
      // Validate PDF
      // ----------------------------------------------

      const fileName = file.name || "";

      const fileExtension =
        "." +
        fileName
          .split(".")
          .pop()
          .toLowerCase();

      const isPdf =
        fileExtension === ".pdf" &&
        (
          !file.type ||
          file.type === "application/pdf"
        );

      if (!isPdf) {
        throw new Error(
          "Unsupported file type. Please upload a PDF file only."
        );
      }

      // ----------------------------------------------
      // Validate File Size
      // ----------------------------------------------

      if (file.size === 0) {
        throw new Error(
          "The selected PDF file is empty."
        );
      }

      // ----------------------------------------------
      // Safe File Name
      // ----------------------------------------------

      const safeFileName = fileName.replace(
        /[^\w.-]/g,
        "_"
      );

      filePath = `${Date.now()}-${safeFileName}`;

      // ----------------------------------------------
      // Stage 1 — Upload to Storage
      // ----------------------------------------------

      setUploadStage(
        "Uploading PDF to secure storage..."
      );

      const {
        error: uploadError,
      } = await supabase.storage
        .from("support-docs")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // ----------------------------------------------
      // Get Public URL
      // ----------------------------------------------

      const {
        data: publicUrlData,
      } = supabase.storage
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
      // Stage 2 — Save Document
      // ----------------------------------------------

      setUploadStage(
        "Saving document information..."
      );

      const {
        data: documentData,
        error: dbError,
      } = await supabase
        .from("support_documents")
        .insert([
          {
            title: fileName,
            file_name: filePath,
            content: publicUrl,
          },
        ])
        .select()
        .single();

      if (dbError) {
        throw dbError;
      }

      if (!documentData?.id) {
        throw new Error(
          "Document was saved but no document ID was returned."
        );
      }

      documentId = documentData.id;

      // ----------------------------------------------
      // Stage 3 — Extract PDF Text
      // ----------------------------------------------

      setUploadStage(
        "Extracting text from PDF..."
      );

      const text =
        await extractPdfText(file);

      if (!text?.trim()) {
        throw new Error(
          "The PDF does not contain readable text."
        );
      }

      // ----------------------------------------------
      // Stage 4 — Create Embeddings
      // ----------------------------------------------

      setUploadStage(
        "Creating AI embeddings..."
      );

      const embeddingResult =
        await createEmbeddings(
          documentId,
          text
        );

      if (
        !embeddingResult?.success
      ) {
        throw new Error(
          "Failed to create document embeddings."
        );
      }

      // ----------------------------------------------
      // Stage 5 — Refresh Documents
      // ----------------------------------------------

      setUploadStage(
        "Finalizing document..."
      );

      await fetchDocuments();

      // ----------------------------------------------
      // Notify Other Dashboard Pages
      // ----------------------------------------------

      window.dispatchEvent(
        new Event(
          "quickhelp-documents-updated"
        )
      );

      // ----------------------------------------------
      // Success
      // ----------------------------------------------

      setUploadStage("");
      setSuccessMessage(
        `"${fileName}" was uploaded and added to your AI knowledge base successfully.`
      );

      console.log(
        "Document uploaded successfully:",
        {
          document: documentData,
          embeddings: embeddingResult,
        }
      );
    } catch (error) {
      console.error(
        "Upload failed:",
        error
      );

      // ----------------------------------------------
      // Rollback Database Document
      // ----------------------------------------------

      if (documentId) {
        const {
          error: rollbackError,
        } = await supabase
          .from("support_documents")
          .delete()
          .eq("id", documentId);

        if (rollbackError) {
          console.error(
            "Failed to rollback document:",
            rollbackError
          );
        }
      }

      // ----------------------------------------------
      // Rollback Storage File
      // ----------------------------------------------

      if (filePath) {
        const {
          error: storageRollbackError,
        } = await supabase.storage
          .from("support-docs")
          .remove([filePath]);

        if (storageRollbackError) {
          console.error(
            "Failed to rollback storage file:",
            storageRollbackError
          );
        }
      }

      setUploadStage("");
      setErrorMessage(
        error?.message ||
          "Something went wrong while processing the PDF."
      );
    } finally {
      setUploading(false);

      // Allow selecting the same file again.
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
            Upload PDF documents to build your
            AI knowledge base.
          </p>
        </section>

        {/* ========================================= */}
        {/* Upload Card */}
        {/* ========================================= */}

        <section
          className={
            uploading
              ? "pointer-events-none opacity-90"
              : ""
          }
        >
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
                  Processing PDF...
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
                  {uploadStage ||
                    "Processing your document..."}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================= */}
        {/* Success Message */}
        {/* ========================================= */}

        {successMessage && !uploading && (
          <section
            className="
              rounded-3xl
              border
              border-emerald-200
              bg-emerald-50
              p-5
              transition-all
              duration-300

              dark:border-emerald-900/50
              dark:bg-emerald-950/30
            "
          >
            <div
              className="
                flex
                items-start
                gap-4
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
                  bg-emerald-100
                  text-emerald-600

                  dark:bg-emerald-500/10
                  dark:text-emerald-400
                "
              >
                <span className="text-lg">
                  ✓
                </span>
              </div>

              <div>
                <h3
                  className="
                    font-bold
                    text-emerald-900
                    dark:text-emerald-300
                  "
                >
                  Upload completed
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-6
                    text-emerald-700
                    dark:text-emerald-400
                  "
                >
                  {successMessage}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ========================================= */}
        {/* Error Message */}
        {/* ========================================= */}

        {errorMessage && !uploading && (
          <section
            className="
              rounded-3xl
              border
              border-red-200
              bg-red-50
              p-5
              transition-all
              duration-300

              dark:border-red-900/50
              dark:bg-red-950/30
            "
          >
            <div
              className="
                flex
                items-start
                gap-4
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
                  bg-red-100
                  text-red-600

                  dark:bg-red-500/10
                  dark:text-red-400
                "
              >
                <span className="text-lg">
                  !
                </span>
              </div>

              <div>
                <h3
                  className="
                    font-bold
                    text-red-900
                    dark:text-red-300
                  "
                >
                  Upload failed
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-6
                    text-red-700
                    dark:text-red-400
                  "
                >
                  {errorMessage}
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    text-red-600/80
                    dark:text-red-400/70
                  "
                >
                  Any incomplete document data has
                  been rolled back.
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