import { Ticket, Clock3, Smile } from "lucide-react";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

const stats = [

  {
    icon: Ticket,
    number: 15000,
    suffix: "+",
    title: "Support Tickets",
    description: "Customer questions answered",
  },
  {
    icon: Clock3,
    number: 2,
    suffix: " sec",
    title: "Average Response",
    description: "AI response time",
  },
  {
    icon: Smile,
    number: 99,
    suffix: "%",
    title: "Customer Satisfaction",
    description: "Positive customer feedback",
  },
];

function Stats() {
  const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});
  return (
    <section
      ref={ref}
      className="bg-slate-900 py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            QuickHelp in Numbers
          </h2>

          <p className="mt-4 text-slate-400">
            Faster responses, happier customers, smarter support.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
              >
                <Icon className="mx-auto h-12 w-12 text-cyan-400" />

                <h3 className="mt-6 text-5xl font-bold text-white">
                  <Counter end={item.number}
                    start={inView}
                   />
                  {item.suffix}
                </h3>

                <h4 className="mt-4 text-2xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Stats;