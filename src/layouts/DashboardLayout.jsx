
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import DashboardSidebar from "../components/DashboardSidebar";
import Footer from "../components/Footer";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        overflow-x-hidden
        bg-slate-100
        text-slate-900
        antialiased
        transition-colors
        duration-300

        dark:bg-[#070b14]
        dark:text-slate-100
      "
    >
      {/* ========================================================= */}
      {/* Navbar */}
      {/* ========================================================= */}

      <Navbar onMenuClick={openSidebar} />

      {/* ========================================================= */}
      {/* Dashboard Body */}
      {/* ========================================================= */}

      <div className="flex min-h-0 flex-1">
        {/* Sidebar */}

        <DashboardSidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        {/* ======================================================= */}
        {/* Main Content */}
        {/* ======================================================= */}

        <div
          className="
            min-w-0
            flex-1
            overflow-x-hidden
            bg-slate-100
            transition-colors
            duration-300

            dark:bg-[#070b14]
          "
        >
          <Outlet />
        </div>
      </div>

      {/* ========================================================= */}
      {/* Footer */}
      {/* ========================================================= */}

      <Footer dashboard />
    </div>
  );
}

export default DashboardLayout;