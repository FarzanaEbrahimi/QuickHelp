import { useState } from "react";

import {
  UploadCloud,
  FileText,
  ArrowUp,
} from "lucide-react";

function UploadCard({
  fileInputRef,
  handleUpload,
}) {
  const [dragActive, setDragActive] = useState(false);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => {
    setDragActive(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    setDragActive(false);

    if (!event.dataTransfer.files.length) {
      return;
    }

    handleUpload({
      target: {
        files: event.dataTransfer.files,
      },
    });
  };

  return (
    <section
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-sm

        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-slate-900
        dark:shadow-none
      "
    >
      {/* ========================================= */}
      {/* Header */}
      {/* ========================================= */}

      <div
        className="
          border-b
          border-slate-200
          bg-gradient-to-br
          from-blue-600
          to-cyan-500
          p-7
          text-white

          dark:border-blue-900/40
        "
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-white/15
              backdrop-blur-sm
            "
          >
            <UploadCloud className="h-7 w-7" />
          </div>

          <div>
            <h2 className="text-2xl font-black">
              Add a PDF Document
            </h2>

            <p
              className="
                mt-1
                text-sm
                leading-6
                text-blue-100
              "
            >
              Upload a PDF file to give your AI
              assistant more information.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* Body */}
      {/* ========================================= */}

      <div
        className="
          p-6
          transition-colors
          duration-300

          dark:bg-slate-900
        "
      >
        {/* Drop Zone */}

        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={openFilePicker}
          className={`
            group
            cursor-pointer
            rounded-[24px]
            border-2
            border-dashed
            p-8
            text-center
            transition-all
            duration-300

            ${
              dragActive
                ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10"
                : "border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-blue-500 dark:hover:bg-blue-500/10"
            }
          `}
        >
          {/* Upload Icon */}

          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-blue-100
              text-blue-600
              transition-all
              duration-300

              group-hover:scale-105

              dark:bg-blue-500/10
              dark:text-blue-400
            "
          >
            <UploadCloud className="h-9 w-9" />
          </div>

          {/* Title */}

          <h3
            className="
              mt-6
              text-xl
              font-bold
              text-slate-900
              transition-colors
              duration-300

              dark:text-white
            "
          >
            Drop your PDF here
          </h3>

          {/* Description */}

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-slate-500
              transition-colors
              duration-300

              dark:text-slate-400
            "
          >
            Or choose a PDF file from your computer.
          </p>

          {/* Supported File Type */}

          <div
            className="
              mt-5
              flex
              justify-center
            "
          >
            <span
              className="
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-1.5
                text-xs
                font-bold
                text-slate-600
                transition-colors
                duration-300

                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300
              "
            >
              PDF only
            </span>
          </div>
        </div>

        {/* Hidden File Input */}

        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          onChange={handleUpload}
        />

        {/* Choose File Button */}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            openFilePicker();
          }}
          className="
            mx-auto
            mt-5
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200

            hover:-translate-y-0.5
            hover:bg-blue-700
            hover:shadow-md

            dark:bg-blue-600
            dark:hover:bg-blue-500
          "
        >
          <ArrowUp className="h-4 w-4" />

          Choose a PDF
        </button>

        {/* Processing Info */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            text-xs
            text-slate-400
            transition-colors
            duration-300

            dark:text-slate-500
          "
        >
          <FileText className="h-4 w-4" />

          <span>
            PDF text will be extracted and processed
            automatically after upload.
          </span>
        </div>
      </div>
    </section>
  );
}

export default UploadCard;