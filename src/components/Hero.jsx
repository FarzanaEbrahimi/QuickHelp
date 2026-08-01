import {
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Upload,
  BrainCircuit,
  MessageSquareText,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

      </div>

      <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <div className="text-center lg:text-left">

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            AI Knowledge Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">

            Build Your AI

            <span className="block text-blue-600">

              Support Assistant

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

            Upload your documents, generate AI embeddings, and deliver instant
            answers with an intelligent customer support assistant powered by
            Retrieval-Augmented Generation (RAG).

          </p>

          {/* Features */}

          <div className="mt-10 space-y-4">

            <div className="flex items-center justify-center gap-3 lg:justify-start">

              <CheckCircle2
                size={20}
                className="text-green-600"
              />

              <span className="text-slate-700">

                Upload PDFs & FAQs

              </span>

            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">

              <CheckCircle2
                size={20}
                className="text-green-600"
              />

              <span className="text-slate-700">

                Semantic Search

              </span>

            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">

              <CheckCircle2
                size={20}
                className="text-green-600"
              />

              <span className="text-slate-700">

                Instant AI Responses

              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">

            <Link
              to="/chat"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              Try AI Chat

              <ArrowRight size={20} />

            </Link>

            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl"
            >

              <PlayCircle size={22} />

              View Dashboard

            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex justify-center">

          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-xl font-bold text-slate-900">

                Dashboard Preview

              </h3>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">

                ● Online

              </span>

            </div>

            <div className="space-y-5">

              <div className="rounded-2xl bg-blue-50 p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Upload
                      size={20}
                      className="text-blue-600"
                    />

                    <span className="font-medium text-slate-800">

                      Upload Documents

                    </span>

                  </div>

                  <span className="text-sm text-slate-500">

                    4 Files

                  </span>

                </div>

              </div>

              <div className="rounded-2xl bg-violet-50 p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <BrainCircuit
                      size={20}
                      className="text-violet-600"
                    />

                    <span className="font-medium text-slate-800">

                      Generate Embeddings

                    </span>

                  </div>

                  <span className="text-sm font-medium text-green-600">

                    Completed

                  </span>

                </div>

              </div>

              <div className="rounded-2xl bg-green-50 p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <MessageSquareText
                      size={20}
                      className="text-green-600"
                    />

                    <span className="font-medium text-slate-800">

                      AI Chat

                    </span>

                  </div>

                  <span className="text-sm font-medium text-green-600">

                    Ready

                  </span>

                </div>

              </div>

              <div className="rounded-2xl bg-orange-50 p-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <BarChart3
                      size={20}
                      className="text-orange-500"
                    />

                    <span className="font-medium text-slate-800">

                      Analytics

                    </span>

                  </div>

                  <span className="text-sm font-medium text-orange-600">

                    98% Accuracy

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;