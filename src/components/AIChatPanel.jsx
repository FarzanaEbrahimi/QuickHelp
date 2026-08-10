import {
  Bot,
  User,
  Send,
  Sparkles,
  Loader2,
  Copy,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";

function AIChatPanel({ sendMessage }) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Welcome to QuickHelp AI.\n\nAsk me anything about your uploaded documents and I'll answer using your knowledge base.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const firstRender = useRef(true);

  const suggestedQuestions = [
    "What is your refund policy?",
    "How can I contact customer support?",
    "What are your business hours?",
  ];

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  const handleSend = async (customMessage = null) => {
    const currentMessage =
      customMessage !== null
        ? customMessage
        : message;

    if (!currentMessage.trim() || loading) return;

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
      const response = await sendMessage(currentMessage);

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
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "Something went wrong while contacting the AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const showSuggestions =
    messages.length === 1 && !loading;

  return (
    <section
      className="
        mt-8
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >

      {/* ================================================== */}
      {/* Header */}
      {/* ================================================== */}

      <div
        className="
          flex
          flex-col
          gap-4
          border-b
          border-slate-200
          bg-white
          px-6
          py-5
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-7
        "
      >

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-cyan-500
              text-white
              shadow-md
            "
          >
            <Sparkles className="h-6 w-6" />
          </div>

          <div>

            <div className="flex items-center gap-3">

              <h2
                className="
                  text-xl
                  font-black
                  text-slate-900
                "
              >
                AI Assistant
              </h2>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-emerald-50
                  px-2.5
                  py-1
                  text-xs
                  font-semibold
                  text-emerald-600
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-500
                  "
                />
                Online
              </span>

            </div>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              Ask questions about your knowledge base.
            </p>

          </div>

        </div>

      </div>

      {/* ================================================== */}
      {/* Messages */}
      {/* ================================================== */}

      <div
        className="
          min-h-[390px]
          max-h-[460px]
          overflow-y-auto
          bg-slate-50
          px-5
          py-6
          sm:px-7
          sm:py-7
        "
      >

        {messages.map((item, index) => (

          <div
            key={index}
            className={`
              mb-5
              flex
              items-end
              gap-3
              ${
                item.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }
            `}
          >

            {/* AI Avatar */}

            {item.role === "ai" && (

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
                  to-cyan-500
                  text-white
                  shadow-md
                "
              >
                <Bot className="h-5 w-5" />
              </div>

            )}

            {/* Message */}

            <div
              className={`
                group
                relative
                max-w-[85%]
                rounded-[22px]
                px-5
                py-4
                leading-7
                ${
                  item.role === "user"
                    ? `
                      rounded-br-md
                      bg-gradient-to-r
                      from-blue-600
                      to-cyan-500
                      text-white
                      shadow-md
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
                  text-sm
                  sm:text-[15px]
                "
              >
                {item.text}
              </p>

              {/* Copy AI response */}

              {item.role === "ai" && (

                <button
                  type="button"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      item.text
                    )
                  }
                  aria-label="Copy response"
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    opacity-0
                    shadow-md
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    hover:bg-blue-50
                  "
                >
                  <Copy className="h-3.5 w-3.5 text-slate-600" />
                </button>

              )}

            </div>

            {/* User Avatar */}

            {item.role === "user" && (

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
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

        {/* ================================================== */}
        {/* Suggested Questions */}
        {/* ================================================== */}

        {showSuggestions && (

          <div
            className="
              ml-0
              mt-7
              sm:ml-[52px]
            "
          >

            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-slate-400
              "
            >
              Suggested questions
            </p>

            <div className="flex flex-wrap gap-3">

              {suggestedQuestions.map((question) => (

                <button
                  key={question}
                  type="button"
                  onClick={() => handleSend(question)}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-medium
                    text-slate-600
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-300
                    hover:bg-blue-50
                    hover:text-blue-700
                    hover:shadow-md
                  "
                >
                  {question}
                </button>

              ))}

            </div>

          </div>

        )}

        {/* ================================================== */}
        {/* Loading */}
        {/* ================================================== */}

        {loading && (

          <div className="flex items-end gap-3">

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
                px-5
                py-3.5
                shadow-sm
              "
            >

              <Loader2
                className="
                  h-4
                  w-4
                  animate-spin
                  text-blue-600
                "
              />

              <span
                className="
                  text-sm
                  text-slate-500
                "
              >
                AI is thinking...
              </span>

            </div>

          </div>

        )}

        <div ref={messagesEndRef} />

      </div>

      {/* ================================================== */}
      {/* Input */}
      {/* ================================================== */}

      <div
        className="
          border-t
          border-slate-200
          bg-white
          p-5
          sm:p-6
        "
      >

        <div
          className="
            flex
            items-end
            gap-3
            rounded-[24px]
            border
            border-slate-200
            bg-slate-50
            p-2.5
            transition-all
            duration-200
            focus-within:border-blue-400
            focus-within:bg-white
            focus-within:shadow-md
          "
        >

          <textarea
            rows={1}
            value={message}
            disabled={loading}
            placeholder="Ask anything about your documents..."
            onChange={(e) =>
              setMessage(e.target.value)
            }
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
              max-h-32
              min-h-[48px]
              flex-1
              resize-none
              bg-transparent
              px-3
              py-2.5
              text-sm
              text-slate-700
              outline-none
              placeholder:text-slate-400
            "
          />

          <button
            type="button"
            onClick={() => handleSend()}
            disabled={
              loading || !message.trim()
            }
            aria-label="Send message"
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:translate-y-0
            "
          >

            {loading ? (

              <Loader2
                className="
                  h-5
                  w-5
                  animate-spin
                "
              />

            ) : (

              <Send className="h-5 w-5" />

            )}

          </button>

        </div>

        <div
          className="
            mt-3
            flex
            flex-col
            gap-1
            text-xs
            text-slate-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span>
            Enter to send • Shift + Enter for a new line
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

