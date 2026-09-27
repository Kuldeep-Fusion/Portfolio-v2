import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLogin from "./admin/auth/AdminLogin";
import AdminLayout from "./admin/AdminLayout";

import Dashboard from "./admin/Dashboard/Dashboard";
import Project from "./admin/project/Porject";
import CreateProject from "./admin/project/CreateProject";
import Contact from "./admin/contact/Contact";

import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROOT → ADMIN LOGIN */}
        <Route
          path="/"
          element={<Navigate to="/admin/login" replace />}
        />

        {/* PUBLIC */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* PROTECTED ADMIN */}
        <Route element={<ProtectedAdminRoute />}>

          <Route path="/admin" element={<AdminLayout />}>

            {/* /admin */}
            <Route
              index
              element={<Dashboard />}
            />

            {/* /admin/projects */}
            <Route
              path="projects"
              element={<Project />}
            />

            {/* /admin/projects/create */}
            <Route
              path="projects/create"
              element={<CreateProject />}
            />

            {/* /admin/contact */}
            <Route
              path="contact"
              element={<Contact />}
            />

          </Route>

        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;