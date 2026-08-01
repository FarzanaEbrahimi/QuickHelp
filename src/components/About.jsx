import {
  Sparkles,
  Rocket,
  BrainCircuit,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Built For Modern Teams",
    text: "QuickHelp helps businesses create smarter support experiences without complex setups.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BrainCircuit,
    title: "Knowledge Driven AI",
    text: "Turn existing business knowledge into an intelligent assistant that understands your data.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Faster Customer Experience",
    text: "Help customers get accurate answers faster while reducing repetitive support work.",
    gradient: "from-emerald-500 to-green-500",
  },
];


function About() {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}

        <div className="text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            <Sparkles className="h-4 w-4" />
            ABOUT QUICKHELP
          </span>


          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              text-slate-900
              md:text-5xl
            "
          >
            Building Smarter
            <span className="text-blue-600">
              {" "}Customer Support
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            QuickHelp was created to help businesses transform their
            existing knowledge into a smarter support experience powered
            by artificial intelligence.
          </p>

        </div>



        {/* Main Content */}

        <div
          className="
            mt-20
            grid
            gap-10
            lg:grid-cols-2
            lg:items-center
          "
        >


          {/* Left Card */}

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-10
              shadow-sm
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-slate-900
              "
            >
              Why QuickHelp?
            </h3>


            <p
              className="
                mt-6
                leading-8
                text-slate-600
              "
            >
              Customer support teams often spend valuable time answering
              the same questions repeatedly. QuickHelp focuses on making
              that process faster, smarter, and more efficient.
            </p>


            <p
              className="
                mt-5
                leading-8
                text-slate-600
              "
            >
              By combining artificial intelligence with business knowledge,
              companies can deliver better experiences while keeping their
              information organized and accessible.
            </p>


          </div>



          {/* Right Values */}

          <div
            className="
              grid
              gap-6
            "
          >

            {values.map((item)=>{

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    group
                    flex
                    gap-5
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >

                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.gradient}
                      shadow-lg
                    `}
                  >

                    <Icon
                      className="
                        h-7
                        w-7
                        text-white
                      "
                    />

                  </div>



                  <div>

                    <h4
                      className="
                        text-xl
                        font-bold
                        text-slate-900
                      "
                    >
                      {item.title}
                    </h4>


                    <p
                      className="
                        mt-2
                        leading-7
                        text-slate-600
                      "
                    >
                      {item.text}
                    </p>

                  </div>


                </div>

              );

            })}


          </div>


        </div>


      </div>


    </section>
  );
}


export default About;