import {
  FileText,
  Activity,
} from "lucide-react";

function DashboardStats({ documents = [] }) {
  const totalDocuments = documents.length;

  const stats = [
    {
      title: "Documents",
      value: totalDocuments,
      subtitle:
        totalDocuments === 1
          ? "1 document added"
          : `${totalDocuments} documents added`,
      icon: FileText,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "AI Assistant",
      value: "Ready",
      subtitle: "Ready to answer your questions",
      icon: Activity,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section
      className="
        grid
        gap-5
        sm:grid-cols-2
      "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-slate-300
              hover:shadow-md
            "
          >
            <div
              className={`
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                ${item.iconBg}
              `}
            >
              <Icon
                className={`
                  h-5
                  w-5
                  ${item.iconColor}
                `}
              />
            </div>

            <div className="mt-5">
              <p
                className="
                  text-sm
                  font-medium
                  text-slate-500
                "
              >
                {item.title}
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900
                "
              >
                {item.value}
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                "
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default DashboardStats;