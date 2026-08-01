import {
  Bot,
  User,
  Send,
  Sparkles,
  Loader2,
  Copy,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";

function AIChatPanel({
  sendMessage,
}) {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Welcome to QuickHelp AI.\n\nAsk me anything about your uploaded documents and I'll answer using your knowledge base.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async () => {

    if (!message.trim()) return;

    const currentMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: currentMessage,
      },
    ]);

    setMessage("");

    setLoading(true);

    try {

      const response = await sendMessage(
        currentMessage
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            response ||
            "No response received.",
        },
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "Something went wrong while contacting the AI service.",
        },
      ]);

    }

    setLoading(false);

  };

  return (

    <section
      id="chat"
      className="
        mt-10
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >

      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-200
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-8
          py-6
        "
      >

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white/20
              backdrop-blur
            "
          >

            <Sparkles className="h-7 w-7 text-white"/>

          </div>

          <div>

            <h2 className="text-2xl font-black text-white">
              AI Assistant
            </h2>

            <p className="text-blue-100">
              Chat with your knowledge base
            </p>

          </div>

        </div>

        <span
          className="
            rounded-full
            bg-white/20
            px-4
            py-2
            text-sm
            font-semibold
            text-white
          "
        >
          Online
        </span>

      </div>

      {/* Messages */}

      <div
        className="
          h-[520px]
          overflow-y-auto
          bg-slate-50
          px-8
          py-8
          space-y-6
        "
      >
                {messages.map((item, index) => (

          <div
            key={index}
            className={`
              flex
              items-end
              gap-4
              ${
                item.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }
            `}
          >

            {item.role === "ai" && (

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  text-white
                  shadow-lg
                "
              >
                <Bot className="h-5 w-5" />
              </div>

            )}

            <div
              className={`
                group
                relative
                max-w-[78%]
                rounded-[24px]
                px-6
                py-5
                leading-8
                transition-all
                duration-300

                ${
                  item.role === "user"
                    ? `
                      rounded-br-md
                      bg-gradient-to-r
                      from-blue-600
                      to-cyan-500
                      text-white
                      shadow-lg
                    `
                    : `
                      rounded-bl-md
                      border
                      border-slate-200
                      bg-white
                      text-slate-700
                      shadow-sm
                    `
                }
              `}
            >

              <p
                className="
                  whitespace-pre-line
                  text-[15px]
                "
              >
                {item.text}
              </p>

              {item.role === "ai" && (

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(item.text)
                  }
                  className="
                    absolute
                    -right-3
                    -top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    opacity-0
                    shadow-md
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    hover:bg-blue-50
                  "
                >
                  <Copy className="h-4 w-4 text-slate-600" />
                </button>

              )}

            </div>

            {item.role === "user" && (

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-900
                  text-white
                  shadow-md
                "
              >
                <User className="h-5 w-5" />
              </div>

            )}

          </div>

        ))}

        {loading && (

          <div className="flex items-end gap-4">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-white
              "
            >
              <Bot className="h-5 w-5" />
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                py-4
                shadow-sm
              "
            >

              <Loader2
                className="
                  h-5
                  w-5
                  animate-spin
                  text-blue-600
                "
              />

              <span className="text-slate-500">
                AI is thinking...
              </span>

            </div>

          </div>

        )}

        <div ref={messagesEndRef} />

      </div>
            {/* Input */}

      <div
        className="
          border-t
          border-slate-200
          bg-white
          p-6
        "
      >

        <div
          className="
            flex
            items-end
            gap-4
            rounded-[28px]
            border
            border-slate-200
            bg-slate-50
            p-3
            transition-all
            duration-300
            focus-within:border-blue-500
            focus-within:bg-white
            focus-within:shadow-lg
          "
        >

          <textarea
            rows={1}
            value={message}
            disabled={loading}
            placeholder="Ask anything about your uploaded documents..."
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                !e.shiftKey
              ) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="
              max-h-40
              min-h-[52px]
              flex-1
              resize-none
              bg-transparent
              px-4
              py-3
              text-[15px]
              text-slate-700
              outline-none
              placeholder:text-slate-400
            "
          />

          <button
            onClick={handleSend}
            disabled={loading || !message.trim()}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:translate-y-0
            "
          >

            {loading ? (

              <Loader2
                className="
                  h-6
                  w-6
                  animate-spin
                "
              />

            ) : (

              <Send className="h-6 w-6" />

            )}

          </button>

        </div>

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            text-sm
            text-slate-400
          "
        >

          <span>
            Press <strong>Enter</strong> to send •
            <strong> Shift + Enter</strong> for a new line
          </span>

          <span>
            Powered by QuickHelp AI
          </span>

        </div>

      </div>

    </section>

  );

}

export default AIChatPanel;