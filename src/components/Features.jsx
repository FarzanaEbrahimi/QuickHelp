import {
  Bot,
  Database,
  Search,
  Upload
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat",
    text: "Respond instantly to customer questions with AI."
  },

  {
    icon: Database,
    title: "Knowledge Base",
    text: "Upload support documents and FAQs."
  },

  {
    icon: Search,
    title: "Semantic Search",
    text: "Retrieve the most relevant information using vectors."
  },
  {
    icon: Upload,
    title: "FAQ Upload",
    text: "Upload FAQs and support documents to build your AI knowledge base."
  }
];

function Features() {

  return (

    <section
      id="features"
      className="bg-slate-950 py-28"
    >

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">

          Everything You Need

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-slate-400">

          A complete AI-powered support platform built for modern businesses.

        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-10 transition duration-300 hover:-translate-y-3 hover:border-cyan-500"
              >

                <Icon className="h-14 w-14 text-cyan-400" />

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-400">

                  {feature.text}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}

export default Features;