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
    background:
      "from-blue-50 via-white to-cyan-50",
    darkBackground:
      "dark:from-blue-950/50 dark:via-slate-900 dark:to-cyan-950/30",
    border:
      "hover:border-blue-200 dark:hover:border-blue-900",
    numberStyle:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Analyze & Process",
    description:
      "QuickHelp extracts important information and prepares your data for AI understanding.",
    gradient: "from-violet-500 to-purple-500",
    background:
      "from-violet-50 via-white to-purple-50",
    darkBackground:
      "dark:from-violet-950/50 dark:via-slate-900 dark:to-purple-950/30",
    border:
      "hover:border-violet-200 dark:hover:border-violet-900",
    numberStyle:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generate AI Knowledge",
    description:
      "Your documents are transformed into smart embeddings for accurate AI responses.",
    gradient: "from-emerald-500 to-green-500",
    background:
      "from-emerald-50 via-white to-green-50",
    darkBackground:
      "dark:from-emerald-950/50 dark:via-slate-900 dark:to-green-950/30",
    border:
      "hover:border-emerald-200 dark:hover:border-emerald-900",
    numberStyle:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Instant AI Support",
    description:
      "Customers receive fast and intelligent answers powered by your own data.",
    gradient: "from-orange-500 to-pink-500",
    background:
      "from-orange-50 via-white to-pink-50",
    darkBackground:
      "dark:from-orange-950/50 dark:via-slate-900 dark:to-pink-950/30",
    border:
      "hover:border-orange-200 dark:hover:border-orange-900",
    numberStyle:
      "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-300",
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
        overflow-hidden
        bg-slate-50
        py-20
        transition-colors
        duration-300
        sm:py-24
        lg:py-28
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

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
              text-xs
              font-semibold
              tracking-wide
              text-blue-700
              sm:text-sm
              dark:bg-blue-950/60
              dark:text-blue-300
            "
          >
            HOW IT WORKS
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            From Documents To
            <span className="text-blue-600 dark:text-blue-400">
              {" "}AI Assistant
            </span>
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
              dark:text-slate-300
            "
          >
            Build your intelligent customer support assistant in four simple
            steps.
          </p>
        </div>

        {/* Steps */}

        <div className="relative mt-14 sm:mt-16 lg:mt-20">

          {/* Connecting Line */}

          <div
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-24
              hidden
              h-px
              bg-gradient-to-r
              from-blue-200
              via-violet-200
              via-emerald-200
              to-orange-200
              lg:block
              dark:from-blue-900
              dark:via-violet-900
              dark:via-emerald-900
              dark:to-orange-900
            "
          />

          <div
            className="
              relative
              grid
              gap-6
              sm:gap-8
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className={`
                    group
                    relative
                    overflow-visible
                    rounded-3xl
                    border
                    border-slate-200
                    bg-gradient-to-br
                    ${step.background}
                    ${step.darkBackground}
                    p-7
                    text-center
                    shadow-sm
                    transition-all
                    duration-300

                    hover:-translate-y-2
                    hover:shadow-xl

                    ${step.border}

                    dark:border-slate-800
                  `}
                >

                  {/* Step Number */}

                  <div
                    className={`
                      absolute
                      -top-4
                      left-1/2
                      flex
                      h-10
                      w-10
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-xs
                      font-bold
                      shadow-sm
                      ${step.numberStyle}
                    `}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}

                  <div
                    className={`
                      mx-auto
                      flex
                      h-18
                      w-18
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      ${step.gradient}
                      shadow-lg
                      transition-all
                      duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon className="h-9 w-9 text-white sm:h-10 sm:w-10" />
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-7
                      text-lg
                      font-bold
                      text-slate-900
                      sm:text-xl
                      dark:text-white
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-600
                      dark:text-slate-300
                    "
                  >
                    {step.description}
                  </p>

                  {/* Bottom Accent */}

                  <div
                    className={`
                      mx-auto
                      mt-6
                      h-1
                      w-10
                      rounded-full
                      bg-gradient-to-r
                      ${step.gradient}
                      opacity-70
                      transition-all
                      duration-300
                      group-hover:w-16
                    `}
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