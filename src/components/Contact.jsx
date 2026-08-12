import {
  Mail,
  Sparkles,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

import { useState } from "react";

import { supabase } from "../lib/supabase";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setErrorMessage("");

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          status: "new",
        });

      if (error) {
        throw error;
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setErrorMessage(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-50
        py-20
        transition-colors
        duration-300
        sm:py-24
        lg:py-28
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-200/30
          blur-3xl
          dark:bg-blue-900/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-72
          w-72
          rounded-full
          bg-cyan-200/30
          blur-3xl
          dark:bg-cyan-900/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-blue-700
              shadow-sm
              sm:text-sm

              dark:border-blue-900/60
              dark:bg-blue-950/50
              dark:text-blue-300
            "
          >
            <Sparkles className="h-4 w-4" />

            CONTACT QUICKHELP
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Ready To Build{" "}
            <span className="text-blue-600 dark:text-blue-400">
              AI Support?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
              dark:text-slate-400
            "
          >
            Have questions about QuickHelp?
            Send us a message and we will get back to you.
          </p>

        </div>

        {/* Main Contact Card */}

        <div
          className="
            mt-14
            grid
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-xl
            transition-all
            duration-300

            sm:mt-16
            lg:mt-20
            lg:grid-cols-5

            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/30
          "
        >

          {/* Left Information Panel */}

          <div
            className="
              relative
              border-b
              border-blue-100
              bg-gradient-to-br
              from-blue-50
              via-white
              to-cyan-50
              p-7

              sm:p-8
              lg:col-span-2
              lg:border-b-0
              lg:border-r
              lg:p-10

              dark:border-slate-800
              dark:from-blue-950/40
              dark:via-slate-900
              dark:to-cyan-950/20
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-cyan-500
                text-white
                shadow-lg
              "
            >
              <Sparkles className="h-7 w-7" />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              QuickHelp AI
            </h3>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                sm:leading-8
                dark:text-slate-400
              "
            >
              Transform your business knowledge into an intelligent
              customer support experience.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10">

              <InfoCard
                icon={Mail}
                title="Email Support"
                text="Available Anytime"
              />

              <InfoCard
                icon={Clock}
                title="Response Time"
                text="Fast Assistance"
              />

              <InfoCard
                icon={ShieldCheck}
                title="Security"
                text="Your Data Protected"
              />

            </div>
          </div>

          {/* Form */}

          <div
            className="
              bg-white
              p-7

              sm:p-8
              lg:col-span-3
              lg:p-10

              dark:bg-slate-900
            "
          >

            {/* Success */}

            {submitted && (
              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-emerald-200
                  bg-emerald-50
                  p-4
                  text-sm
                  font-medium
                  text-emerald-700

                  dark:border-emerald-900/50
                  dark:bg-emerald-950/40
                  dark:text-emerald-400
                "
              >
                <CheckCircle className="h-5 w-5 shrink-0" />

                Message sent successfully!
              </div>
            )}

            {/* Error */}

            {errorMessage && (
              <div
                className="
                  mb-6
                  rounded-2xl
                  border
                  border-red-200
                  bg-red-50
                  p-4
                  text-sm
                  font-medium
                  text-red-700

                  dark:border-red-900/50
                  dark:bg-red-950/40
                  dark:text-red-400
                "
              >
                {errorMessage}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="
                grid
                gap-5
                sm:gap-6
                md:grid-cols-2
              "
            >

              {/* Name */}

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Your Name
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={submitting}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    text-sm
                    text-slate-900
                    outline-none
                    transition-all

                    placeholder:text-slate-400

                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/20

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-blue-500
                    dark:focus:bg-slate-950
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                  disabled={submitting}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    text-sm
                    text-slate-900
                    outline-none
                    transition-all

                    placeholder:text-slate-400

                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/20

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-blue-500
                    dark:focus:bg-slate-950
                  "
                />
              </div>

              {/* Message */}

              <div className="md:col-span-2">

                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us how we can help..."
                  required
                  disabled={submitting}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    text-sm
                    text-slate-900
                    outline-none
                    transition-all

                    placeholder:text-slate-400

                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/20

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-blue-500
                    dark:focus:bg-slate-950
                  "
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={submitting}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  py-3.5
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-lg

                  disabled:cursor-not-allowed
                  disabled:opacity-60

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-2

                  md:col-span-2
                "
              >
                {submitting ? (
                  <>
                    <span
                      className="
                        h-5
                        w-5
                        animate-spin
                        rounded-full
                        border-2
                        border-white/40
                        border-t-white
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      className="
                        h-5
                        w-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  const iconStyles = {
    "Email Support":
      "border-blue-200 bg-blue-100 text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-400",

    "Response Time":
      "border-violet-200 bg-violet-100 text-violet-600 dark:border-violet-900/50 dark:bg-violet-950/50 dark:text-violet-400",

    Security:
      "border-emerald-200 bg-emerald-100 text-emerald-600 dark:border-emerald-900/50 dark:bg-emerald-950/50 dark:text-emerald-400",
  };

  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        p-4
        shadow-sm
        backdrop-blur-sm
        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:shadow-md

        dark:border-slate-800
        dark:bg-slate-950/60
        dark:hover:border-slate-700
      "
    >
      <div
        className={`
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          ${iconStyles[title]}
        `}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-sm
            font-medium
            text-slate-500
            dark:text-slate-400
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-sm
            font-semibold
            text-slate-800
            sm:text-base
            dark:text-slate-200
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Contact;