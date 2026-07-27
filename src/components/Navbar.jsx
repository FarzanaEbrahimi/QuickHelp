import { Link } from "react-router-dom";
import { MessageSquareText } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white"
        >
          <MessageSquareText className="h-7 w-7 text-cyan-400" />
          QuickHelp AI
        </Link>

        <nav className="hidden gap-8 md:flex text-slate-300">

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#how" className="hover:text-white transition">
            How it Works
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </nav>

        <div className="flex gap-3">

          <Link
            to="/chat"
            className="rounded-xl bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-600 transition"
          >
            Try AI
          </Link>

          <Link
            to="/dashboard"
            className="rounded-xl border border-slate-700 px-5 py-2 text-white hover:bg-slate-800 transition"
          >
            Dashboard
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;