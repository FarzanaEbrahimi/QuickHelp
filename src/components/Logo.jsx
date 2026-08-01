import { MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
        <MessageSquareText className="h-7 w-7 text-white" />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          QuickHelp AI
        </h1>

        <p className="text-xs text-[15px] font-semibold text-slate-500">
          AI Customer Support
        </p>
      </div>
    </Link>
  );
}

export default Logo;