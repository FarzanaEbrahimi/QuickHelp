import { useEffect, useState } from "react";
import {
  Mail,
  MessageSquare,
  Clock3,
  CheckCircle2,
  Search,
  Trash2,
} from "lucide-react";

import { supabase } from "../lib/supabase";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMessages = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("Failed to fetch messages:", error);
      setMessages([]);
    } else {
      setMessages(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Failed to delete message:", error);
      alert("Could not delete the message.");
      return;
    }

    setMessages((prev) =>
      prev.filter((message) => message.id !== id)
    );
  };

  const filteredMessages = messages.filter((item) => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return true;

    return (
      item.name?.toLowerCase().includes(query) ||
      item.email?.toLowerCase().includes(query) ||
      item.message?.toLowerCase().includes(query)
    );
  });

  const newMessages = messages.filter(
    (item) => item.status === "new"
  ).length;

  return (
    <main
      className="
        min-h-screen
        bg-slate-100
        transition-colors
        duration-300
        dark:bg-slate-950
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-slate-200
          bg-slate-100
          px-5
          py-8
          transition-colors
          duration-300
          dark:border-slate-800
          dark:bg-slate-950
          lg:px-8
          xl:px-10
        "
      >
        <div className="mx-auto max-w-[1700px]">
          <div
            className="
              flex
              flex-col
              gap-6
              xl:flex-row
              xl:items-end
              xl:justify-between
            "
          >
            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-blue-600
                  dark:text-blue-400
                "
              >
                QuickHelp
              </p>

              <h1
                className="
                  mt-3
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Messages
              </h1>

              <p
                className="
                  mt-3
                  text-lg
                  text-slate-500
                  dark:text-slate-400
                "
              >
                View messages sent through your Contact form.
              </p>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-blue-100
                bg-blue-50
                px-5
                py-4
                dark:border-blue-900/50
                dark:bg-blue-950/30
              "
            >
              <MessageSquare
                className="
                  h-5
                  w-5
                  text-blue-600
                  dark:text-blue-400
                "
              />

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  New Messages
                </p>

                <p
                  className="
                    mt-1
                    text-2xl
                    font-black
                    text-slate-900
                    dark:text-white
                  "
                >
                  {newMessages}
                </p>
              </div>
            </div>
          </div>

          {/* Search */}

          <div
            className="
              mt-8
              flex
              max-w-xl
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              shadow-sm

              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <Search
              className="
                h-5
                w-5
                text-slate-400
                dark:text-slate-500
              "
            />

            <input
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search name, email or message..."
              className="
                w-full
                bg-transparent
                text-sm
                text-slate-700
                outline-none
                placeholder:text-slate-400

                dark:text-slate-200
                dark:placeholder:text-slate-500
              "
            />
          </div>
        </div>
      </div>

      {/* Content */}

      <div
        className="
          mx-auto
          max-w-[1700px]
          px-5
          py-8
          lg:px-8
          xl:px-10
        "
      >
        {loading ? (
          <section
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              rounded-[30px]
              border
              border-slate-200
              bg-white
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  h-10
                  w-10
                  animate-spin
                  rounded-full
                  border-4
                  border-slate-200
                  border-t-blue-600
                  dark:border-slate-700
                  dark:border-t-blue-400
                "
              />

              <p
                className="
                  mt-4
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Loading messages...
              </p>
            </div>
          </section>
        ) : filteredMessages.length === 0 ? (
          <section
            className="
              rounded-[30px]
              border
              border-slate-200
              bg-white
              p-12
              text-center
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <Mail
              className="
                mx-auto
                h-12
                w-12
                text-slate-300
                dark:text-slate-600
              "
            />

            <h2
              className="
                mt-5
                text-2xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              No messages found
            </h2>

            <p
              className="
                mt-2
                text-slate-500
                dark:text-slate-400
              "
            >
              Contact messages will appear here when users submit the form.
            </p>
          </section>
        ) : (
          <div className="space-y-5">
            {filteredMessages.map((item) => (
              <article
                key={item.id}
                className="
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-md

                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:hover:border-slate-700

                  lg:p-7
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-6
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                  "
                >
                  <div className="min-w-0 flex-1">
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-50
                          text-blue-600
                          dark:bg-blue-500/10
                          dark:text-blue-400
                        "
                      >
                        <Mail className="h-5 w-5" />
                      </div>

                      <div>
                        <h2
                          className="
                            text-lg
                            font-bold
                            text-slate-900
                            dark:text-white
                          "
                        >
                          {item.name}
                        </h2>

                        <a
                          href={`mailto:${item.email}`}
                          className="
                            text-sm
                            text-blue-600
                            hover:text-blue-700
                            dark:text-blue-400
                            dark:hover:text-blue-300
                          "
                        >
                          {item.email}
                        </a>
                      </div>

                      <span
                        className={`
                          rounded-full
                          px-3
                          py-1.5
                          text-xs
                          font-bold
                          ${
                            item.status === "new"
                              ? `
                                bg-amber-100
                                text-amber-700
                                dark:bg-amber-500/10
                                dark:text-amber-400
                              `
                              : `
                                bg-emerald-100
                                text-emerald-700
                                dark:bg-emerald-500/10
                                dark:text-emerald-400
                              `
                          }
                        `}
                      >
                        {item.status === "new"
                          ? "New"
                          : item.status}
                      </span>
                    </div>

                    <div
                      className="
                        mt-5
                        rounded-2xl
                        bg-slate-50
                        p-5
                        dark:bg-slate-950
                      "
                    >
                      <p
                        className="
                          whitespace-pre-line
                          leading-7
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {item.message}
                      </p>
                    </div>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-slate-400
                        dark:text-slate-500
                      "
                    >
                      <Clock3 className="h-4 w-4" />

                      {new Date(
                        item.created_at
                      ).toLocaleString()}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(item.id)
                    }
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-slate-200
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-slate-600
                      transition

                      hover:border-red-200
                      hover:bg-red-50
                      hover:text-red-600

                      dark:border-slate-700
                      dark:text-slate-400
                      dark:hover:border-red-900/50
                      dark:hover:bg-red-500/10
                      dark:hover:text-red-400

                      lg:shrink-0
                    "
                  >
                    <Trash2 className="h-4 w-4" />

                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Messages;