import { Outlet } from "react-router-dom";

import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#080b08] text-white">

      <Sidebar />

      <div className="lg:pl-64">

        <Header />

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;