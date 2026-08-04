import { useState } from "react";

import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Sparkles,
  FolderOpen,
  HardDrive,
  ArrowUp,
  ShieldCheck,
  Clock3
} from "lucide-react";

function UploadCard({
  fileInputRef,
  handleUpload,
  documents,
}) {

  const [dragActive, setDragActive] = useState(false);

  const latestDocument =
    documents.length > 0
      ? documents[0]
      : null;

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => {
    setDragActive(false);
  };

  const onDrop = (e) => {

    e.preventDefault();

    setDragActive(false);

    if (!e.dataTransfer.files.length) return;

    handleUpload({
      target: {
        files: e.dataTransfer.files,
      },
    });

  };

  return (

    <section
      id="upload"
      className="
        overflow-hidden
        rounded-[34px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >

      {/* Header */}

      <div
        className="
          relative
          overflow-hidden
          border-b
          border-slate-200
          bg-gradient-to-br
          from-blue-600
          via-cyan-500
          to-indigo-600
          p-8
          text-white
        "
      >

        <div
          className="
            absolute
            -right-16
            -top-16
            h-56
            w-56
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        <div className="relative flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-white/20
                backdrop-blur
              "
            >

              <UploadCloud className="h-10 w-10" />

            </div>

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-blue-100
                "
              >
                Upload Center
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-black
                "
              >
                AI Knowledge Upload
              </h2>

              <p className="mt-2 leading-7 text-blue-100">
                Upload PDF, DOCX and TXT files to expand your AI knowledge
                base instantly.
              </p>

            </div>

          </div>

          <div
            className="
              hidden
              xl:flex
              flex-col
              items-end
              gap-3
            "
          >

            <span
              className="
                rounded-full
                bg-white/20
                px-5
                py-2
                text-xs
                font-bold
                tracking-[0.25em]
              "
            >
              AI READY
            </span>

            <div className="flex items-center gap-2 text-sm">

              <ShieldCheck className="h-5 w-5" />

              Secure Storage

            </div>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-8">

        {/* Upload Area */}
                <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={openFilePicker}
          className={`
            group
            relative
            cursor-pointer
            overflow-hidden
            rounded-[32px]
            border-2
            border-dashed
            p-10
            transition-all
            duration-500

            ${
              dragActive
                ? "scale-[1.01] border-blue-500 bg-blue-50"
                : "border-slate-300 bg-gradient-to-br from-slate-50 via-white to-blue-50 hover:border-blue-500 hover:shadow-xl"
            }
          `}
        >

          {/* Background */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-blue-500/5
              blur-3xl
            "
          />

          <div className="relative">

            <div
              className="
                mx-auto
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-white
                shadow-2xl
                transition-all
                duration-500
                group-hover:scale-110
              "
            >

              <UploadCloud className="h-14 w-14" />

            </div>

            <h3
              className="
                mt-8
                text-center
                text-3xl
                font-black
                text-slate-900
              "
            >
              Drag & Drop Files
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-center
                leading-8
                text-slate-500
              "
            >
              Upload business documents to train your AI assistant.
              QuickHelp AI automatically extracts text, creates
              embeddings and prepares your knowledge base for
              semantic search.
            </p>

            {/* Supported Types */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >

              {["PDF", "DOCX", "TXT"].map((type) => (

                <span
                  key={type}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-slate-700
                    shadow-sm
                  "
                >
                  {type}
                </span>

              ))}

            </div>

            {/* Features */}

            <div
              className="
                mt-10
                grid
                gap-4
                md:grid-cols-3
              "
            >

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <ShieldCheck className="h-7 w-7 text-blue-600" />

                <h4 className="mt-4 font-bold text-slate-900">
                  Secure Upload
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Files are stored securely inside Supabase Storage.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <Sparkles className="h-7 w-7 text-violet-600" />

                <h4 className="mt-4 font-bold text-slate-900">
                  AI Embeddings
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Documents are converted into semantic embeddings
                  automatically.
                </p>

              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">

                <Clock3 className="h-7 w-7 text-emerald-600" />

                <h4 className="mt-4 font-bold text-slate-900">
                  Instant Processing
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your AI assistant becomes smarter within seconds.
                </p>

              </div>

            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt,.doc,.docx"
              className="hidden"
              onChange={handleUpload}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                openFilePicker();
              }}
              className="
                mx-auto
                mt-10
                flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-indigo-600
                px-10
                py-4
                font-bold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >

              <ArrowUp className="h-5 w-5" />

              Select Documents

            </button>

          </div>

        </div>
                {/* Statistics */}

        <div className="mt-7 grid gap-5 md:grid-cols-2">

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-6
            "
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-100 p-3">

                <FolderOpen className="h-6 w-6 text-blue-600" />

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Documents
                </p>

                <h3 className="mt-1 text-3xl font-black text-slate-900">
                  {documents.length}
                </h3>

              </div>

            </div>

          </div>

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-6
            "
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-100 p-3">

                <HardDrive className="h-6 w-6 text-cyan-600" />

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Storage
                </p>

                <h3 className="mt-1 text-3xl font-black text-slate-900">
                  Active
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* Latest Upload */}

        <div
          className="
            mt-8
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-7
          "
        >

          <div className="mb-6 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Sparkles className="h-5 w-5 text-blue-600" />

              <h3 className="text-lg font-bold text-slate-900">
                Latest Upload
              </h3>

            </div>

            <span
              className="
                rounded-full
                bg-emerald-100
                px-3
                py-1
                text-xs
                font-bold
                text-emerald-700
              "
            >
              READY
            </span>

          </div>

          {latestDocument ? (

            <div
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                bg-slate-50
                p-5
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
                  bg-blue-100
                "
              >

                <FileText className="h-7 w-7 text-blue-600" />

              </div>

              <div className="min-w-0 flex-1">

                <p className="truncate font-semibold text-slate-900">
                  {latestDocument.title}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Successfully uploaded and indexed.
                </p>

              </div>

              <CheckCircle2 className="h-7 w-7 text-emerald-500" />

            </div>

          ) : (
                        <div
              className="
                rounded-2xl
                border
                border-dashed
                border-slate-200
                bg-slate-50
                p-10
                text-center
              "
            >

              <FileText className="mx-auto h-12 w-12 text-slate-300" />

              <h4 className="mt-4 text-lg font-semibold text-slate-700">
                No documents yet
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Upload your first document to start building your AI
                knowledge base.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>

  );

}

export default UploadCard;