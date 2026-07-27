import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute inset-0">

        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 text-cyan-300">

          AI-Powered Customer Support

        </span>

        <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight text-white">

          Turn Your FAQs Into

          <span className="block text-cyan-400">

            An Intelligent AI Assistant

          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">

          QuickHelp helps businesses automate customer support using
          semantic search, vector embeddings and Retrieval-Augmented
          Generation (RAG).

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/chat"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-lg text-white transition hover:bg-cyan-600"
          >
            Get Started

            <ArrowRight size={20} />
          </Link>

          <button
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 text-lg text-white transition hover:bg-slate-900"
          >
            <PlayCircle size={22} />

            Watch Demo
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;