import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import UploadCenter from "./pages/UploadCenter";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";

import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Dashboard Area */}
        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >
          {/* /dashboard */}
          <Route
            index
            element={<Dashboard />}
          />
          
          {/* /dashboard/documents */}
          <Route
            path="documents"
            element={<Documents />}
          />

          {/* /dashboard/upload */}
          <Route
            path="upload"
            element={<UploadCenter />}
          />
          <Route
            path="messages"
            element={<Messages />}
          />


          {/* /dashboard/settings */}
          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>

        {/* Public AI Assistant */}
        <Route
          path="/assistant"
          element={<AIAssistant />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;