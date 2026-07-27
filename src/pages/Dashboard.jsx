import { extractPdfText } from "../services/pdf";
import { supabase } from "../lib/supabase";
import { useEffect, useRef, useState } from "react";
import { createEmbeddings } from "../services/embeddings";
import { sendMessage } from "../services/chat";

import {
  Upload,
  Database,
  FileText,
  Brain,
  MessageSquareText,
} from "lucide-react";


function Dashboard() {
    console.log("SUPABASE URL:", supabase.supabaseUrl);
    console.log("SUPABASE:", supabase);
    const [documents, setDocuments] = useState([]);
    const fetchDocuments = async () => {
      const { data, error, status } = await supabase
        .from("support_documents")
        .select("*");

      console.log("Status:", status);
      console.log("Error:", error);
      console.log("Data:", data);

      if (!error) {
        setDocuments(data);
      }
    };
    useEffect(() => {
        fetchDocuments();
    }, []);
    const testChat = async () => {
      console.log("===== TEST CHAT STARTED =====");

      try {
        const response = await sendMessage("این فایل درباره چیست؟");
        console.log("AI Response:", response);
      } catch (error) {
        console.error("TEST CHAT ERROR:", error);
      }
    };
    const fileInputRef = useRef(null);
    const handleUpload = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        console.log("Selected file:", file);

        const safeFileName = file.name
            .replace(/[^\w.\-]/g, "_");

        const filePath = `${Date.now()}-${safeFileName}`;

        // Upload file to Supabase Storage
        const { error } = await supabase.storage
            .from("support-docs")
            .upload(filePath, file);


        if (error) {
            console.log("Upload error:", error.message);
            return;
        }


        console.log("File uploaded to storage");


        // Get public URL
        const { data } = supabase.storage
            .from("support-docs")
            .getPublicUrl(filePath);


        // Save file information
        const { data: documentData, error: dbError } =
          await supabase
            .from("support_documents")
            .insert([
              {
                title: file.name,
                file_name: filePath,
                content: data.publicUrl,
              },
            ])
            .select()
            .single();


        if (dbError) {
            console.log("Database error:", dbError.message);
            return;
        }


        console.log("Saved in database");

        const documentId = documentData.id;

        const text = await extractPdfText(file);

        await createEmbeddings(
          documentId,
          text
        );


        fetchDocuments();
    };
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-3xl font-bold">
              Business Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Manage your AI-powered customer support system.
            </p>
          </div>

        </div>
      </header>

      {/* Main */}

      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Upload */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <Upload className="mb-5 h-12 w-12 text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Upload FAQ
            </h2>

            <p className="mt-3 text-slate-400">
              Upload FAQs, manuals and support documents.
            </p>
             
            <>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.txt,.doc,.docx"
                    className="hidden"
                    onChange={handleUpload}
                />

                <button
                    onClick={() => fileInputRef.current.click()}
                    className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-semibold transition hover:bg-cyan-600"
                >
                    Upload Document
                </button>
            </>
            

          </div>

          {/* Knowledge Base */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <Database className="mb-5 h-12 w-12 text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Knowledge Base
            </h2>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Documents
                </span>

                <span>
                  {documents.length}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Chunks
                </span>

                <span>
                  24
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Status
                </span>

                <span className="text-green-400">
                  Ready
                </span>

              </div>

            </div>

          </div>

          {/* Embeddings */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <Brain className="mb-5 h-12 w-12 text-cyan-400" />

            <h2 className="text-2xl font-bold">
              AI Processing
            </h2>

            <p className="mt-3 text-slate-400">
              Generate embeddings for semantic search.
            </p>

            <button
              className="mt-8 w-full rounded-xl border border-cyan-500 py-3 transition hover:bg-cyan-500 hover:text-white"
            >
              Generate Embeddings
            </button>
            <button
              onClick={testChat}
              className="mt-4 w-full rounded-xl bg-green-500 py-3 font-semibold hover:bg-green-600"
            >
              Test AI Chat
            </button>

          </div>

        </div>

        {/* Uploaded Docs */}

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="mb-8 flex items-center gap-3">

            <FileText className="text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Uploaded Documents
            </h2>

          </div>

          <div className="space-y-4">

            {documents.length === 0 ? (

                <p className="text-slate-400">
                No documents uploaded yet.
                </p>

            ) : (

                documents.map((doc) => (
                

                <div
                    key={doc.id}
                    className="rounded-xl bg-slate-800 p-4"
                >
                    <p className="font-semibold">
                        {doc.title}
                    </p>

                    <p className="text-xs text-yellow-400">
                        ID: {doc.id}
                    </p>
                    <p className="text-xs text-slate-500 break-all">
                      {doc.content}
                    </p>

                    <a
                        href={doc.content}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 text-sm"
                    >
                        Open Document
                    </a>

                </div>

                ))

            )}

          </div>

        </section>

        {/* Recent Questions */}

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="mb-8 flex items-center gap-3">

            <MessageSquareText className="text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Recent Customer Questions
            </h2>

          </div>

          <div className="space-y-4">

            <div className="rounded-xl bg-slate-800 p-4">
              How long does shipping take?
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              Can I return an item after 10 days?
            </div>

            <div className="rounded-xl bg-slate-800 p-4">
              Do you offer international shipping?
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;