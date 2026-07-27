import {
  Upload,
  Database,
  Search,
  MessageCircle,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Support Docs",
    description:
      "Upload FAQs, policies, manuals, and customer support documents in seconds.",
  },
  {
    icon: Database,
    title: "Build Knowledge Base",
    description:
      "QuickHelp organizes your documents into an intelligent searchable knowledge base.",
  },
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "The AI finds the most relevant information based on meaning instead of simple keywords.",
  },
  {
    icon: MessageCircle,
    title: "Instant AI Answers",
    description:
      "Customers receive fast, accurate responses powered by Retrieval-Augmented Generation (RAG).",
  },
];

function HowItWorks() {
  return (
    <section
        id="how"
        className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How QuickHelp Works
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-lg">
            Transform your business documents into an intelligent AI assistant
            in just four simple steps.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white font-bold">
                  {index + 1}
                </div>

                <div className="mt-6 flex justify-center">
                  <Icon className="h-14 w-14 text-cyan-400" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white text-center">
                  {step.title}
                </h3>

                <p className="mt-4 text-center leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;