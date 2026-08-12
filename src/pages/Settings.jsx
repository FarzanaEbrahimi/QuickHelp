import {
  User,
  Building2,
  Bot,
  Palette,
  Save,
  Check,
  Sun,
  Moon,
} from "lucide-react";

import { useEffect, useState } from "react";

function Settings() {
  const [workspaceName, setWorkspaceName] = useState(() => {
    return (
      localStorage.getItem(
        "quickhelp-workspace-name"
      ) || "QuickHelp Workspace"
    );
  });

  const [responseStyle, setResponseStyle] = useState(() => {
    return (
      localStorage.getItem(
        "quickhelp-response-style"
      ) || "Professional"
    );
  });

  const [sourceCount, setSourceCount] = useState(() => {
    return (
      localStorage.getItem(
        "quickhelp-source-count"
      ) || "5"
    );
  });

  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem(
        "quickhelp-theme"
      ) || "light"
    );
  });

  const [saved, setSaved] = useState(false);

  const userEmail =
    "farzanaebrhimi2001@gmail.com";

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem(
      "quickhelp-theme",
      theme
    );
  }, [theme]);

  const handleSave = () => {
    const finalWorkspaceName =
      workspaceName.trim() ||
      "QuickHelp Workspace";

    localStorage.setItem(
      "quickhelp-workspace-name",
      finalWorkspaceName
    );

    localStorage.setItem(
      "quickhelp-response-style",
      responseStyle
    );

    localStorage.setItem(
      "quickhelp-source-count",
      sourceCount
    );

    // Notify the rest of the application.
    window.dispatchEvent(
      new CustomEvent(
        "quickhelp-settings-updated"
      )
    );

    setWorkspaceName(finalWorkspaceName);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main
      className="
        min-h-[calc(100vh-5rem)]
        bg-slate-100
        px-5
        py-8
        transition-colors
        duration-300

        sm:px-6
        sm:py-10

        lg:px-8
        lg:py-12

        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="mb-8">
          <p
            className="
              text-sm
              font-semibold
              text-blue-600
              dark:text-blue-400
            "
          >
            Workspace
          </p>

          <h1
            className="
              mt-1
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            Settings
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
              dark:text-slate-400
            "
          >
            Manage your workspace information,
            AI preferences, appearance, and
            account details.
          </p>
        </div>

        <div className="space-y-6">

          {/* Workspace */}

          <section
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                border-b
                border-slate-100
                px-6
                py-5
                dark:border-slate-800
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
                  dark:bg-blue-950/50
                  dark:text-blue-400
                "
              >
                <Building2 className="h-5 w-5" />
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
                  Workspace
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Basic information about your
                  QuickHelp workspace.
                </p>
              </div>
            </div>

            <div className="p-6">
              <label
                htmlFor="workspaceName"
                className="
                  mb-2
                  block
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:text-slate-300
                "
              >
                Workspace Name
              </label>

              <input
                id="workspaceName"
                type="text"
                value={workspaceName}
                onChange={(e) =>
                  setWorkspaceName(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-3
                  text-sm
                  text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-blue-500/20
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                  dark:focus:bg-slate-950
                "
              />
            </div>
          </section>

          {/* AI Preferences */}

          <section
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                border-b
                border-slate-100
                px-6
                py-5
                dark:border-slate-800
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
                  bg-violet-50
                  text-violet-600
                  dark:bg-violet-950/50
                  dark:text-violet-400
                "
              >
                <Bot className="h-5 w-5" />
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
                  AI Preferences
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Configure how the AI assistant
                  should respond.
                </p>
              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">

              <div>
                <label
                  htmlFor="responseStyle"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Response Style
                </label>

                <select
                  id="responseStyle"
                  value={responseStyle}
                  onChange={(e) =>
                    setResponseStyle(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3
                    text-sm
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                  "
                >
                  <option value="Professional">
                    Professional
                  </option>

                  <option value="Friendly">
                    Friendly
                  </option>

                  <option value="Concise">
                    Concise
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="sourceCount"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  Sources Per Answer
                </label>

                <select
                  id="sourceCount"
                  value={sourceCount}
                  onChange={(e) =>
                    setSourceCount(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3
                    text-sm
                    text-slate-900
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:bg-white
                    focus:ring-2
                    focus:ring-blue-500/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                  "
                >
                  <option value="3">
                    3 sources
                  </option>

                  <option value="5">
                    5 sources
                  </option>

                  <option value="8">
                    8 sources
                  </option>

                  <option value="10">
                    10 sources
                  </option>
                </select>
              </div>
            </div>
          </section>

          {/* Appearance */}

          <section
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                border-b
                border-slate-100
                px-6
                py-5
                dark:border-slate-800
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
                  bg-amber-50
                  text-amber-600
                  dark:bg-amber-950/50
                  dark:text-amber-400
                "
              >
                <Palette className="h-5 w-5" />
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
                  Appearance
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Choose how QuickHelp looks
                  on your device.
                </p>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">

              <ThemeButton
                active={theme === "light"}
                onClick={() =>
                  setTheme("light")
                }
                icon={Sun}
                title="Light Mode"
                description="Bright and clean interface"
                iconClass="bg-white text-amber-500"
              />

              <ThemeButton
                active={theme === "dark"}
                onClick={() =>
                  setTheme("dark")
                }
                icon={Moon}
                title="Dark Mode"
                description="Comfortable dark interface"
                iconClass="bg-slate-900 text-blue-300"
              />
            </div>
          </section>

          {/* Account */}

          <section
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                border-b
                border-slate-100
                px-6
                py-5
                dark:border-slate-800
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
                  bg-emerald-50
                  text-emerald-600
                  dark:bg-emerald-950/50
                  dark:text-emerald-400
                "
              >
                <User className="h-5 w-5" />
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
                  Account
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Your current workspace account
                  information.
                </p>
              </div>
            </div>

            <div className="grid gap-5 p-6 sm:grid-cols-2">

              <AccountItem
                label="Name"
                value="Farzana"
              />

              <AccountItem
                label="Email"
                value={userEmail}
              />

              <AccountItem
                label="Role"
                value="Workspace Owner"
              />

              <AccountItem
                label="Plan"
                value="Pro"
                accent
              />
            </div>
          </section>

          {/* Save */}

          <div
            className="
              flex
              flex-col
              gap-4
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:p-6
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <div>
              <p
                className="
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Save your changes
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                Workspace and AI preferences are
                saved locally on this device.
              </p>
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            >
              {saved ? (
                <>
                  <Check className="h-4 w-4" />
                  Saved
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function ThemeButton({
  active,
  onClick,
  icon: Icon,
  title,
  description,
  iconClass,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        items-center
        gap-4
        rounded-2xl
        border
        p-4
        text-left
        transition-all

        ${
          active
            ? "border-blue-300 bg-blue-50 shadow-sm dark:border-blue-700 dark:bg-blue-950/30"
            : "border-slate-200 bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950"
        }
      `}
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
          shadow-sm
          ${iconClass}
        `}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="
            font-semibold
            text-slate-900
            dark:text-white
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            text-xs
            text-slate-500
            dark:text-slate-400
          "
        >
          {description}
        </p>
      </div>

      {active && (
        <Check
          className="
            h-5
            w-5
            shrink-0
            text-blue-600
            dark:text-blue-400
          "
        />
      )}
    </button>
  );
}

function AccountItem({
  label,
  value,
  accent = false,
}) {
  return (
    <div className="min-w-0">
      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-slate-400
        "
      >
        {label}
      </p>

      <p
        className={`
          mt-2
          break-all
          font-semibold
          ${
            accent
              ? "text-blue-600 dark:text-blue-400"
              : "text-slate-900 dark:text-white"
          }
        `}
      >
        {value}
      </p>
    </div>
  );
}

export default Settings;