import {
  FileText,
  Brain,
  HardDrive,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    title: "Documents",
    value: "12",
    subtitle: "Uploaded files",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Embeddings",
    value: "2.4K",
    subtitle: "Vector chunks",
    icon: Brain,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Storage",
    value: "74%",
    subtitle: "Space used",
    icon: HardDrive,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "AI Status",
    value: "Ready",
    subtitle: "System online",
    icon: Sparkles,
    color: "from-orange-500 to-amber-500",
  },
];

function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >

            <div
              className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                ${item.color}
                text-white
                shadow-lg
              `}
            >

              <Icon className="h-7 w-7" />

            </div>

            <h3 className="mt-8 text-4xl font-black text-slate-900">
              {item.value}
            </h3>

            <p className="mt-2 text-lg font-semibold text-slate-800">
              {item.title}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {item.subtitle}
            </p>

            <div
              className="
                absolute
                -right-8
                -top-8
                h-32
                w-32
                rounded-full
                bg-slate-100
                transition
                duration-500
                group-hover:scale-125
              "
            />

          </div>

        );

      })}

    </section>
  );
}

export default DashboardStats;