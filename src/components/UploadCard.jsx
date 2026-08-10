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
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-slate-200
          bg-gradient-to-br
          from-blue-600
          to-cyan-500
          p-7
          text-white
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
            "
          >
            <UploadCloud className="h-7 w-7" />
          </div>

          <div>
            <h2 className="text-2xl font-black">
              Add a Document
            </h2>

            <p className="mt-1 text-sm leading-6 text-blue-100">
              Upload a file to give your AI assistant more information.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="p-6">
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
                ? "border-blue-500 bg-blue-50"
                : "border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/50"
            }
          `}
        >
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
              transition-transform
              duration-300
              group-hover:scale-105
            "
          >
            <UploadCloud className="h-9 w-9" />
          </div>

          <h3
            className="
              mt-6
              text-xl
              font-bold
              text-slate-900
            "
          >
            Drop your file here
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-slate-500
            "
          >
            Or choose a file from your computer.
          </p>

          <div
            className="
              mt-5
              flex
              flex-wrap
              justify-center
              gap-2
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
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-slate-600
                "
              >
                {type}
              </span>
            ))}
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
          "
        >
          <ArrowUp className="h-4 w-4" />
          Choose a File
        </button>

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            text-xs
            text-slate-400
          "
        >
          <FileText className="h-4 w-4" />

          <span>
            Your file will be processed automatically after upload.
          </span>
        </div>
      </div>
    </section>
  );
}

export default UploadCard;