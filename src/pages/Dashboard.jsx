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
import KnowledgeCard from "../components/KnowledgeCard";
import AIProcessingCard from "../components/AIProcessingCard";

import DocumentsTable from "../components/DocumentsTable";
import AIChatPanel from "../components/AIChatPanel";

function Dashboard() {

  const [documents, setDocuments] = useState([]);

  const fileInputRef = useRef(null);

  const uploadSectionRef = useRef(null);
  const knowledgeSectionRef = useRef(null);
  const documentsSectionRef = useRef(null);
  const processingSectionRef = useRef(null);
  const chatSectionRef = useRef(null);

  const fetchDocuments = async () => {

    const { data, error } = await supabase
      .from("support_documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setDocuments(data || []);
    }

  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleUpload = async (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const safeFileName = file.name.replace(/[^\w.\-]/g, "_");

    const filePath = `${Date.now()}-${safeFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("support-docs")
      .upload(filePath, file);

    if (uploadError) {
      console.log(uploadError.message);
      return;
    }

    const { data: publicUrlData } =
      supabase.storage
        .from("support-docs")
        .getPublicUrl(filePath);

    const { data: documentData, error: dbError } =
      await supabase
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
      console.log(dbError.message);
      return;
    }

    const text = await extractPdfText(file);

    await createEmbeddings(
      documentData.id,
      text
    );

    fetchDocuments();

  };

  const testChat = async () => {

    try {

      const response =
        await sendMessage(
          "What is this document about?"
        );

      console.log(response);

    } catch (error) {

      console.log(error);

    }

  };

  const scrollToSection = (section) => {

    const sections = {

      upload: uploadSectionRef,

      knowledge: knowledgeSectionRef,

      documents: documentsSectionRef,

      processing: processingSectionRef,

      chat: chatSectionRef,

    };

    sections[section]?.current?.scrollIntoView({

      behavior: "smooth",

      block: "start",

    });

  };
    return (

    <div className="min-h-screen bg-slate-100">

      {/* Landing Navbar */}

      <Navbar />

      <div className="flex">

        <DashboardSidebar
          onNavigate={scrollToSection}
        />

        <div className="flex-1">

          <DashboardHeader />

          <main className="space-y-10 p-8">

            <DashboardStats />

            {/* Top Cards */}

            <div className="grid gap-8 xl:grid-cols-3">

              <section ref={uploadSectionRef}>

                <UploadCard
                  fileInputRef={fileInputRef}
                  handleUpload={handleUpload}
                  documents={documents}
                />

              </section>

              <section ref={knowledgeSectionRef}>

                <KnowledgeCard
                  documents={documents}
                />

              </section>

              <section ref={processingSectionRef}>

                <AIProcessingCard
                  testChat={testChat}
                />

              </section>

            </div>

            {/* Documents */}

            <section
              ref={documentsSectionRef}
              className="scroll-mt-32"
            >

              <DocumentsTable
                documents={documents}
              />

            </section>

            {/* AI Chat */}

            <section
              ref={chatSectionRef}
              className="scroll-mt-32"
            >

              <AIChatPanel
                sendMessage={sendMessage}
              />

            </section>
                      </main>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;