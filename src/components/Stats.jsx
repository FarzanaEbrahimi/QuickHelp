import { Ticket, Clock3, Smile } from "lucide-react";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: Ticket,
    number: 15000,
    suffix: "+",
    title: "Support Tickets",
    description: "Questions answered by AI",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock3,
    number: 2,
    suffix: " sec",
    title: "Response Time",
    description: "Average AI response",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Smile,
    number: 99,
    suffix: "%",
    title: "Customer Satisfaction",
    description: "Positive feedback",
    color: "from-green-500 to-emerald-500",
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
      className="bg-gradient-to-b from-slate-50 to-white py-28"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            RESULTS
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            QuickHelp in Numbers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Helping businesses save time with fast, intelligent customer
            support.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl"
              >

                <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${item.color}`}>

                  <Icon className="h-10 w-10 text-white" />

                </div>

                <h3 className="mt-8 text-6xl font-extrabold text-slate-900">

                  <Counter
                    end={item.number}
                    start={inView}
                  />

                  {item.suffix}

                </h3>

                <h4 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
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