import { BrowserRouter, Routes, Route } from "react-router-dom";

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

        {/* PUBLIC */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* PROTECTED ADMIN */}
        <Route element={<ProtectedAdminRoute />}>

          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route
              index
              element={<Dashboard />}
            />

            <Route
              path="/admin/projects"
              element={<Project />}
            />

            <Route
              path="/admin/projects/create"
              element={<CreateProject />}
            />

            <Route
              path="/admin/contact"
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