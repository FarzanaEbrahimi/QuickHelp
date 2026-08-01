import { Link, useLocation } from "react-router-dom";
import { Bell, Settings, ArrowLeft } from "lucide-react";


function Navbar() {

  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";


  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">


      <div className="max-w-7xl mx-auto px-6 lg:px-8">


        <div className="h-20 flex items-center justify-between">


          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-blue-600"
          >
            QuickHelp AI
          </Link>




          {/* Home Navigation */}

          {!isDashboard && (

            <div className="hidden md:flex items-center gap-9">


              <a
                href="#features"
                className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Features
              </a>



              <a
                href="#how-it-works"
                className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                How It Works
              </a>



              <a
                href="#about"
                className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                About
              </a>



              <a
                href="#contact"
                className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                Contact
              </a>



            </div>

          )}






          {/* Right Side */}

          <div className="flex items-center gap-4">


            {isDashboard ? (

              <>


                <Link
                  to="/"
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-xl
                  text-sm
                  font-semibold
                  text-slate-700
                  hover:bg-slate-100
                  transition
                  "
                >

                  <ArrowLeft size={18}/>

                  Back to Home

                </Link>





                <button
                  className="
                  w-10 h-10
                  rounded-xl
                  flex items-center justify-center
                  hover:bg-slate-100
                  transition
                  "
                >

                  <Bell size={20}/>

                </button>





                <button
                  className="
                  w-10 h-10
                  rounded-xl
                  flex items-center justify-center
                  hover:bg-slate-100
                  transition
                  "
                >

                  <Settings size={20}/>

                </button>






                <button
                  className="
                  w-10 h-10
                  rounded-full
                  bg-blue-600
                  text-white
                  font-bold
                  flex items-center justify-center
                  "
                >

                  F

                </button>



              </>


            ) : (

              <>


                <Link
                  to="/dashboard"
                  className="
                  hidden sm:block
                  text-sm
                  font-semibold
                  text-slate-700
                  hover:text-blue-600
                  transition
                  "
                >

                  Dashboard

                </Link>




                <Link
                  to="/dashboard"
                  className="
                  px-6 py-3
                  rounded-xl
                  bg-blue-600
                  text-white
                  text-sm
                  font-semibold
                  shadow-lg
                  shadow-blue-600/20
                  hover:bg-blue-700
                  transition
                  "
                >

                  Get Started

                </Link>


              </>

            )}



          </div>



        </div>


      </div>


    </nav>

  );

}


export default Navbar;