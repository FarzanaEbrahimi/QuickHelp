import { useState } from "react";

import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Sparkles,
  FolderOpen,
  HardDrive,
  ArrowUp,
} from "lucide-react";

function UploadCard({
  fileInputRef,
  handleUpload,
  documents,
}) {

  const [dragActive, setDragActive] = useState(false);

  const latestDocument =
    documents.length > 0
      ? documents[documents.length - 1]
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

    <div
      className="
      overflow-hidden
      rounded-[32px]
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
        flex
        items-center
        justify-between
        border-b
        border-slate-100
        p-7
        "
      >

        <div className="flex items-center gap-5">

          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            to-cyan-500
            text-white
            shadow-xl
            "
          >

            <UploadCloud className="h-8 w-8"/>

          </div>

          <div>

            <h2
              className="
              text-2xl
              font-black
              text-slate-900
              "
            >
              Upload Center
            </h2>

            <p className="mt-1 text-slate-500">
              Build your AI knowledge base
            </p>

          </div>

        </div>

        <span
          className="
          rounded-full
          bg-blue-100
          px-4
          py-2
          text-xs
          font-bold
          text-blue-700
          "
        >
          AI READY
        </span>

      </div>
            {/* Body */}

      <div className="p-7">

        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={openFilePicker}
          className={`
            cursor-pointer
            rounded-[28px]
            border-2
            border-dashed
            p-10
            transition-all
            duration-300

            ${
              dragActive
                ? "scale-[1.01] border-blue-500 bg-blue-50"
                : "border-slate-300 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 hover:border-blue-400 hover:bg-blue-50"
            }
          `}
        >

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">

            <UploadCloud className="h-12 w-12 text-blue-600" />

          </div>

          <h3 className="mt-8 text-center text-2xl font-bold text-slate-900">
            Drag & Drop Documents
          </h3>

          <p className="mx-auto mt-4 max-w-md text-center leading-7 text-slate-500">
            Upload PDFs, DOCX or TXT files and QuickHelp AI will
            automatically extract the content and prepare it for
            semantic search.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {["PDF","DOCX","TXT"].map((item)=>(

              <span
                key={item}
                className="
                  rounded-full
                  bg-white
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-slate-700
                  shadow-sm
                "
              >
                {item}
              </span>

            ))}

          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.txt,.doc,.docx"
            className="hidden"
            onChange={handleUpload}
          />

          <button
            onClick={(e)=>{
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
              to-cyan-500
              px-8
              py-4
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >

            <ArrowUp className="h-5 w-5"/>

            Choose Files

          </button>

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

                <FolderOpen className="h-6 w-6 text-blue-600"/>

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

                <HardDrive className="h-6 w-6 text-cyan-600"/>

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

        <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-7">

          <div className="mb-6 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Sparkles className="h-5 w-5 text-blue-600" />

              <h3 className="text-lg font-bold text-slate-900">
                Latest Upload
              </h3>

            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              READY
            </span>

          </div>

          {latestDocument ? (

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

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

            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center">

              <FileText className="mx-auto h-12 w-12 text-slate-300" />

              <h4 className="mt-4 text-lg font-semibold text-slate-700">
                No documents yet
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Upload your first document to start building your AI knowledge base.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default UploadCard;