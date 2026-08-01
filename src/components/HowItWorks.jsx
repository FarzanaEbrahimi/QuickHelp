import {
  CloudUpload,
  FileSearch,
  Sparkles,
  MessagesSquare,
} from "lucide-react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const steps = [
  {
    number: "01",
    icon: CloudUpload,
    title: "Upload Documents",
    description:
      "Upload FAQs, PDFs, manuals and business documents to create your AI knowledge base.",
    gradient: "from-blue-500 to-cyan-500",
  },

  {
    number: "02",
    icon: FileSearch,
    title: "Analyze & Process",
    description:
      "QuickHelp extracts important information and prepares your data for AI understanding.",
    gradient: "from-violet-500 to-purple-500",
  },

  {
    number: "03",
    icon: Sparkles,
    title: "Generate AI Knowledge",
    description:
      "Your documents are transformed into smart embeddings for accurate AI responses.",
    gradient: "from-emerald-500 to-green-500",
  },

  {
    number: "04",
    icon: MessagesSquare,
    title: "Instant AI Support",
    description:
      "Customers receive fast and intelligent answers powered by your own data.",
    gradient: "from-orange-500 to-pink-500",
  },
];


function HowItWorks() {


  useEffect(() => {

    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });

  }, []);



  return (

    <section
      id="how-it-works"
      className="
        bg-slate-50
        py-28
        overflow-hidden
      "
    >

      <div className="mx-auto max-w-7xl px-6">


        {/* Header */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >

          <span
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            HOW IT WORKS
          </span>


          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              tracking-tight
              text-slate-900
              md:text-5xl
            "
          >
            From Documents To
            <span className="text-blue-600">
              {" "}AI Assistant
            </span>
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Build your intelligent customer support assistant in four simple
            steps.
          </p>


        </div>




        {/* Steps Container */}

        <div
          className="
            relative
            mt-20
          "
        >


          {/* Connecting Line Desktop */}

          <div
            className="
              absolute
              left-0
              right-0
              top-24
              hidden
              h-1
              bg-gradient-to-r
              from-blue-200
              via-purple-200
              to-orange-200
              lg:block
            "
          />



          <div
            className="
              relative
              grid
              gap-10
              lg:grid-cols-4
            "
          >


            {steps.map((step,index)=>{


              const Icon = step.icon;


              return (

                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="
                    group
                    relative
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-4
                    hover:shadow-2xl
                  "
                >



                  {/* Step Number */}

                  <div
                    className="
                      absolute
                      -top-5
                      left-1/2
                      flex
                      h-10
                      w-10
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-sm
                      font-bold
                      text-slate-700
                      shadow-md
                    "
                  >
                    {step.number}
                  </div>




                  {/* Icon */}

                  <div
                    className={`
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      ${step.gradient}
                      shadow-xl
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    `}
                  >

                    <Icon
                      className="
                        h-10
                        w-10
                        text-white
                      "
                    />

                  </div>




                  <h3
                    className="
                      mt-8
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {step.title}
                  </h3>



                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {step.description}
                  </p>




                  <div
                    className="
                      mx-auto
                      mt-7
                      h-1
                      w-12
                      rounded-full
                      bg-blue-600
                      transition-all
                      duration-500
                      group-hover:w-24
                    "
                  />


                </div>

              );


            })}


          </div>


        </div>


      </div>


    </section>

  );

}


export default HowItWorks;