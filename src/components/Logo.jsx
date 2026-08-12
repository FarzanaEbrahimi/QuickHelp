import { MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

function Logo({ footer = false }) {
  return (
    <Link
      to="/"
      className="
        inline-flex
        items-center
        gap-3
        rounded-xl
        outline-none
        transition
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
      "
    >
      {/* Logo Mark */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-blue-600
          via-cyan-500
          to-purple-600
          shadow-lg
          sm:h-11
          sm:w-11
        "
      >
        <MessageSquareText className="h-6 w-6 text-white" />
      </div>

      {/* Brand */}
      <div className="min-w-0 leading-tight">
        <h1
          className={`
            truncate
            text-lg
            font-black
            tracking-tight
            ${footer ? "text-white" : "text-slate-900 dark:text-white"}
          `}
        >
          QuickHelp AI
        </h1>

        <p
          className={`
            mt-0.5
            text-[11px]
            font-medium
            ${
              footer
                ? "text-slate-400"
                : "text-slate-500 dark:text-slate-400"
            }
          `}
        >
          AI Knowledge Platform
        </p>
      </div>
    </Link>
  );
}

export default Logo;