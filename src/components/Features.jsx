import {
  Bot,
  Database,
  Search,
  Upload,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat",
    text: "Answer customer questions instantly with AI-powered conversations.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Knowledge Base",
    text: "Store FAQs, manuals and support documents in one place.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Search,
    title: "Semantic Search",
    text: "Find the most relevant answers using vector similarity search.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Upload,
    title: "Document Upload",
    text: "Upload PDFs and build your AI knowledge base in seconds.",
    color: "from-orange-500 to-amber-500",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Powerful tools designed to automate customer support and
            deliver accurate AI responses.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.text}
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:gap-4
                  "
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Features;