
import { sendMessage } from "../services/chat";

import Navbar from "../components/Navbar";
import AIChatPanel from "../components/AIChatPanel";
import Footer from "../components/Footer";

function AIAssistant() {
  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        text-slate-900
        transition-colors
        duration-300

        dark:bg-[#0b1120]
        dark:text-slate-100
      "
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          mx-auto
          max-w-7xl
          px-5
          py-10
          transition-colors
          duration-300
          lg:px-8
        "
      >
        {/* Page Header */}
        <section className="mb-8">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-600
              transition-colors
              duration-300
              dark:text-blue-400
            "
          >
            QuickHelp AI
          </p>

          <h1
            className="
              mt-3
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              transition-colors
              duration-300
              dark:text-white
              sm:text-5xl
            "
          >
            AI Assistant
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-slate-500
              transition-colors
              duration-300
              dark:text-slate-400
            "
          >
            Ask questions about your business documents
            and get intelligent answers from your knowledge base.
          </p>
        </section>

        {/* AI Chat */}
        <section>
          <AIChatPanel
            sendMessage={sendMessage}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AIAssistant;

