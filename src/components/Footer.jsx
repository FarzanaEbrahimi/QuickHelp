import {
  Sparkles,
  ArrowUpRight,
  Mail,
  Bot,
  Database,
  Code2,
} from "lucide-react";


function Footer() {


  const productLinks = [
    "Features",
    "AI Chat",
    "Dashboard",
    "Documents",
  ];


  const companyLinks = [
    "About",
    "Contact",
    "Privacy Policy",
    "Terms",
  ];


  const resourceLinks = [
    "Documentation",
    "Support",
    "Community",
    "Updates",
  ];



  return (

    <footer
      className="
        relative
        overflow-hidden
        bg-slate-950
        text-slate-300
      "
    >


      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
      />



      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >



        {/* Top CTA */}

        <div
          className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            md:p-12
          "
        >

          <div
            className="
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >


            <div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500
                    to-purple-600
                  "
                >
                  <Sparkles className="text-white"/>
                </div>


                <h2
                  className="
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  QuickHelp AI
                </h2>


              </div>



              <p
                className="
                  mt-5
                  max-w-xl
                  leading-7
                  text-slate-400
                "
              >
                Transform your business documents into an
                intelligent AI customer support assistant.
              </p>


            </div>



            <button
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-blue-600
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:bg-blue-500
              "
            >

              Get Started

              <ArrowUpRight
                className="h-5 w-5"
              />

            </button>


          </div>


        </div>







        {/* Main Footer */}

        <div
          className="
            mt-16
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-5
          "
        >



          {/* Brand */}

          <div
            className="
              lg:col-span-2
            "
          >


            <p
              className="
                max-w-sm
                leading-7
                text-slate-400
              "
            >
              AI-powered support platform using document
              intelligence, embeddings, and RAG technology.
            </p>




            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >


              <TechBadge
                icon={Bot}
                text="AI Powered"
              />


              <TechBadge
                icon={Database}
                text="Supabase"
              />


              <TechBadge
                icon={Code2}
                text="React"
              />


            </div>



          </div>





          <FooterColumn
            title="Product"
            links={productLinks}
          />



          <FooterColumn
            title="Company"
            links={companyLinks}
          />



          <FooterColumn
            title="Resources"
            links={resourceLinks}
          />


        </div>







        {/* Bottom */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-8
            text-sm
            md:flex-row
            md:justify-between
          "
        >


          <p>
            © 2026 QuickHelp AI. All rights reserved.
          </p>



          <div
            className="
              flex
              items-center
              gap-2
              text-slate-400
            "
          >

            <Mail className="h-4 w-4"/>

            Contact Support

          </div>


        </div>


      </div>


    </footer>

  );

}





function TechBadge({icon: Icon,text}) {


  return (

    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        transition
        hover:bg-white/10
      "
    >

      <Icon className="h-4 w-4 text-blue-400"/>

      {text}

    </div>

  );

}





function FooterColumn({title,links}) {


  return (

    <div>

      <h3
        className="
          mb-5
          font-bold
          text-white
        "
      >
        {title}
      </h3>


      <ul
        className="
          space-y-4
        "
      >

        {links.map((item)=>(

          <li key={item}>

            <a
              href="#"
              className="
                transition
                hover:text-blue-400
              "
            >

              {item}

            </a>

          </li>

        ))}


      </ul>


    </div>

  );

}



export default Footer;