import { useState } from "react";

import {
  FileText,
  ExternalLink,
  CheckCircle2,
  Trash2,
  Loader2,
  AlertTriangle,
} from "lucide-react";

import { supabase } from "../lib/supabase";

function DocumentsTable({
  documents = [],
  onDocumentDeleted,
}) {
  const [deletingId, setDeletingId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // --------------------------------------------------
  // Delete Document
  // --------------------------------------------------

  const handleDelete = async (document) => {
    const documentId = document?.id;

    if (!documentId) {
      setErrorMessage(
        "Document ID is missing. The document cannot be deleted."
      );
      return;
    }

    const documentName =
      document.title ||
      document.file_name ||
      "this document";

    const confirmed = window.confirm(
      `Are you sure you want to delete "${documentName}"?\n\nThis will permanently remove the document, its AI chunks, and the PDF file from storage.`
    );

    if (!confirmed) return;

    setDeletingId(documentId);
    setErrorMessage("");

    const storageFileName = document.file_name;

    try {
      // ------------------------------------------------
      // 1. Validate Storage file path
      // ------------------------------------------------

      if (!storageFileName) {
        throw new Error(
          "Storage file name is missing."
        );
      }

      // ------------------------------------------------
      // 2. Try deleting the document first
      //
      // If the database has ON DELETE CASCADE,
      // its chunks will be removed automatically.
      //
      // If the foreign key prevents deletion,
      // we delete the chunks manually below.
      // ------------------------------------------------

      let documentDeleted = false;

      const {
        error: firstDocumentDeleteError,
      } = await supabase
        .from("support_documents")
        .delete()
        .eq("id", documentId);

      if (!firstDocumentDeleteError) {
        documentDeleted = true;
      } else {
        console.warn(
          "Initial document deletion was blocked. Checking document chunks...",
          firstDocumentDeleteError
        );
      }

      // ------------------------------------------------
      // 3. If document deletion was blocked,
      //    delete its AI chunks first
      // ------------------------------------------------

      if (!documentDeleted) {
        const {
          error: chunksDeleteError,
        } = await supabase
          .from("document_chunks")
          .delete()
          .eq("document_id", documentId);

        if (chunksDeleteError) {
          console.error(
            "Failed to delete document chunks:",
            chunksDeleteError
          );

          throw new Error(
            "Failed to delete the document's AI data."
          );
        }

        // ----------------------------------------------
        // Try deleting the document again
        // ----------------------------------------------

        const {
          error: retryDocumentDeleteError,
        } = await supabase
          .from("support_documents")
          .delete()
          .eq("id", documentId);

        if (retryDocumentDeleteError) {
          console.error(
            "Failed to delete document record:",
            retryDocumentDeleteError
          );

          throw new Error(
            "Failed to delete the document record."
          );
        }

        documentDeleted = true;
      }

      // ------------------------------------------------
      // 4. Verify that no orphan chunks remain
      // ------------------------------------------------

      const {
        data: remainingChunks,
        error: verifyChunksError,
      } = await supabase
        .from("document_chunks")
        .select("id")
        .eq("document_id", documentId)
        .limit(1);

      if (verifyChunksError) {
        console.error(
          "Failed to verify document chunks:",
          verifyChunksError
        );

        throw new Error(
          "Document was deleted, but the AI data could not be verified."
        );
      }

      if (
        Array.isArray(remainingChunks) &&
        remainingChunks.length > 0
      ) {
        throw new Error(
          "The document was deleted, but some AI chunks still remain."
        );
      }

      // ------------------------------------------------
      // 5. Delete PDF from Supabase Storage
      // ------------------------------------------------

      const {
        error: storageDeleteError,
      } = await supabase.storage
        .from("support-docs")
        .remove([storageFileName]);

      if (storageDeleteError) {
        console.error(
          "Failed to delete storage file:",
          storageDeleteError
        );

        throw new Error(
          "Document data was deleted, but the PDF file could not be removed from Storage."
        );
      }

      // ------------------------------------------------
      // 6. Notify parent component
      // ------------------------------------------------

      if (onDocumentDeleted) {
        onDocumentDeleted(documentId);
      }

      // ------------------------------------------------
      // 7. Notify other dashboard pages
      // ------------------------------------------------

      window.dispatchEvent(
        new Event(
          "quickhelp-documents-updated"
        )
      );

      console.log(
        "Document deleted successfully:",
        documentId
      );
    } catch (error) {
      console.error(
        "Document deletion failed:",
        error
      );

      setErrorMessage(
        error?.message ||
          "Something went wrong while deleting the document."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // --------------------------------------------------
  // Empty State
  // --------------------------------------------------

  if (documents.length === 0) {
    return (
      <section
        className="
          overflow-hidden
          rounded-[30px]
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-300

          dark:border-slate-800
          dark:bg-slate-900
          dark:shadow-black/20
        "
      >
        {/* Header */}

        <div
          className="
            border-b
            border-slate-200
            bg-gradient-to-r
            from-blue-50
            via-white
            to-cyan-50
            px-6
            py-6

            dark:border-slate-800
            dark:from-slate-900
            dark:via-slate-900
            dark:to-blue-950/30

            sm:px-8
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-blue-100
                text-blue-600
                shadow-sm

                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <h2
                className="
                  text-xl
                  font-black
                  tracking-tight
                  text-slate-900

                  dark:text-white
                "
              >
                Uploaded Documents
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Manage your AI knowledge files
              </p>
            </div>

            <div
              className="
                ml-auto
                rounded-full
                bg-blue-100
                px-3
                py-1.5
                text-xs
                font-bold
                text-blue-700

                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              0 Files
            </div>
          </div>
        </div>

        {/* Empty State */}

        <div className="p-6 sm:p-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-blue-100
              bg-gradient-to-br
              from-blue-50
              via-white
              to-cyan-50
              px-6
              py-14
              text-center

              dark:border-blue-900/40
              dark:from-slate-800
              dark:via-slate-900
              dark:to-cyan-950/20
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
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
                pointer-events-none
                absolute
                -bottom-16
                -left-16
                h-40
                w-40
                rounded-full
                bg-cyan-400/10
                blur-3xl

                dark:bg-cyan-500/10
              "
            />

            <div
              className="
                relative
                mx-auto
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-[24px]
                bg-white
                text-blue-600
                shadow-lg
                shadow-blue-500/10
                ring-1
                ring-blue-100

                dark:bg-slate-800
                dark:text-blue-400
                dark:ring-blue-900/50
              "
            >
              <FileText className="h-9 w-9" />
            </div>

            <h3
              className="
                relative
                mt-6
                text-xl
                font-black
                text-slate-900

                dark:text-white
              "
            >
              No documents uploaded yet
            </h3>

            <p
              className="
                relative
                mx-auto
                mt-3
                max-w-md
                text-sm
                leading-7
                text-slate-500

                dark:text-slate-400
              "
            >
              Upload your first PDF document to
              start building your QuickHelp
              knowledge base.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // --------------------------------------------------
  // Documents Table
  // --------------------------------------------------

  return (
    <section
      className="
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300

        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-black/20
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-slate-200
          bg-gradient-to-r
          from-blue-50
          via-white
          to-cyan-50
          px-6
          py-6

          dark:border-slate-800
          dark:from-slate-900
          dark:via-slate-900
          dark:to-blue-950/30

          sm:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-blue-100
                text-blue-600
                shadow-sm

                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <h2
                className="
                  text-xl
                  font-black
                  tracking-tight
                  text-slate-900

                  dark:text-white
                "
              >
                Uploaded Documents
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Manage your AI knowledge files
              </p>
            </div>
          </div>

          <div
            className="
              w-fit
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-bold
              text-blue-700

              dark:bg-blue-500/10
              dark:text-blue-400
            "
          >
            {documents.length}{" "}
            {documents.length === 1
              ? "File"
              : "Files"}
          </div>
        </div>
      </div>

      {/* Error */}

      {errorMessage && (
        <div className="px-6 pt-6 sm:px-8">
          <div
            className="
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-red-200
              bg-red-50
              px-4
              py-4
              text-sm
              text-red-700

              dark:border-red-900/50
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />

            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Table */}

      <div className="p-6 sm:p-8">
        <div
          className="
            overflow-x-auto
            rounded-2xl
            border
            border-slate-200

            dark:border-slate-800
          "
        >
          <table className="w-full min-w-[850px] text-left">
            <thead>
              <tr
                className="
                  border-b
                  border-slate-200
                  bg-slate-50
                  text-sm
                  text-slate-500

                  dark:border-slate-800
                  dark:bg-slate-800/70
                  dark:text-slate-400
                "
              >
                <th className="px-5 py-4 font-semibold">
                  Document
                </th>

                <th className="px-5 py-4 font-semibold">
                  Status
                </th>

                <th className="px-5 py-4 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => {
                const isDeleting =
                  deletingId === doc.id;

                return (
                  <tr
                    key={doc.id}
                    className="
                      border-b
                      border-slate-100
                      transition-all
                      duration-200
                      hover:bg-blue-50/40
                      last:border-b-0

                      dark:border-slate-800
                      dark:hover:bg-blue-950/20
                    "
                  >
                    {/* Document */}

                    <td className="px-5 py-5">
                      <div className="flex items-center gap-4">
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

                            dark:bg-blue-500/10
                            dark:text-blue-400
                          "
                        >
                          <FileText className="h-6 w-6" />
                        </div>

                        <div className="min-w-0">
                          <p
                            className="
                              max-w-[350px]
                              truncate
                              font-bold
                              text-slate-900

                              dark:text-white
                            "
                            title={
                              doc.title ||
                              doc.file_name
                            }
                          >
                            {doc.title ||
                              doc.file_name}
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              text-slate-500

                              dark:text-slate-400
                            "
                          >
                            PDF Knowledge File
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Status */}

                    <td className="px-5 py-5">
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-emerald-100
                          px-4
                          py-2
                          text-xs
                          font-bold
                          text-emerald-700

                          dark:bg-emerald-500/10
                          dark:text-emerald-400
                        "
                      >
                        <CheckCircle2 className="h-4 w-4" />

                        Ready
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-5 py-5">
                      <div className="flex items-center justify-end gap-2">
                        {/* Open */}

                        {doc.content && (
                          <a
                            href={doc.content}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-xl
                              border
                              border-slate-200
                              bg-white
                              px-4
                              py-2
                              text-sm
                              font-bold
                              text-slate-700
                              shadow-sm
                              transition-all
                              duration-200

                              hover:border-blue-300
                              hover:bg-blue-50
                              hover:text-blue-600

                              dark:border-slate-700
                              dark:bg-slate-800
                              dark:text-slate-200

                              dark:hover:border-blue-500/50
                              dark:hover:bg-blue-500/10
                              dark:hover:text-blue-400
                            "
                          >
                            Open

                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}

                        {/* Delete */}

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(doc)
                          }
                          disabled={isDeleting}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-red-200
                            bg-red-50
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-red-600
                            transition-all
                            duration-200

                            hover:border-red-300
                            hover:bg-red-100
                            hover:text-red-700

                            disabled:cursor-not-allowed
                            disabled:opacity-60

                            dark:border-red-900/50
                            dark:bg-red-500/10
                            dark:text-red-400

                            dark:hover:border-red-800
                            dark:hover:bg-red-500/20
                            dark:hover:text-red-300
                          "
                        >
                          {isDeleting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />

                              Deleting...
                            </>
                          ) : (
                            <>
                              <Trash2 className="h-4 w-4" />

                              Delete
                            </>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default DocumentsTable;