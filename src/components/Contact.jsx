import {
  Mail,
  Sparkles,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

import { useState } from "react";


function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [submitted, setSubmitted] = useState(false);



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();


    console.log("Contact Form:", formData);


    setSubmitted(true);


    setFormData({
      name: "",
      email: "",
      message: "",
    });


    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

  };



  return (

    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-28
      "
    >


      <div
        className="
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-200/40
          blur-3xl
        "
      />


      <div
        className="
          absolute
          -right-32
          bottom-20
          h-72
          w-72
          rounded-full
          bg-purple-200/40
          blur-3xl
        "
      />



      <div className="relative mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-3xl text-center">


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

            CONTACT QUICKHELP

          </span>



          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
            "
          >

            Ready To Build

            <span className="text-blue-600">
              {" "}AI Support?
            </span>

          </h2>


          <p className="mt-6 text-lg leading-8 text-slate-600">

            Have questions about QuickHelp?
            Send us a message and we will get back to you.

          </p>


        </div>




        <div
          className="
            mt-20
            grid
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200
            bg-white
            shadow-2xl
            lg:grid-cols-5
          "
        >



          <div
            className="
              bg-gradient-to-br
              from-blue-600
              via-indigo-600
              to-purple-700
              p-10
              text-white
              lg:col-span-2
            "
          >

            <h3 className="text-3xl font-bold">
              QuickHelp AI
            </h3>


            <p className="mt-5 leading-8 text-blue-100">
              Transform your business knowledge into an intelligent
              customer support experience.
            </p>



            <div className="mt-10 space-y-5">


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





          <div className="p-10 lg:col-span-3">


            {submitted && (

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-green-50
                  p-4
                  text-green-700
                "
              >

                <CheckCircle />

                Message sent successfully!

              </div>

            )}



            <form
              onSubmit={handleSubmit}
              className="grid gap-6 md:grid-cols-2"
            >


              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input-style"
              />


              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="input-style"
              />



              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us how we can help..."
                className="input-style md:col-span-2"
              />



              <button
                type="submit"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-slate-900
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-600
                  md:col-span-2
                "
              >

                Send Message

                <Send
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />

              </button>


            </form>


          </div>


        </div>


      </div>


    </section>

  );

}




function InfoCard({icon: Icon,title,text}) {

  return (

    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        bg-white/10
        p-4
        backdrop-blur
      "
    >

      <Icon />

      <div>

        <p className="text-sm text-blue-100">
          {title}
        </p>


        <p className="font-semibold">
          {text}
        </p>

      </div>


    </div>

  );

}


export default Contact;