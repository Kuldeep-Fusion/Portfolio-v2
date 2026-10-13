import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  HouseIcon as DashboardIcon,
  FolderIcon as ProjectsIcon,
  MessageSquareIcon as ContactsIcon,
  ChartNoAxesCombinedIcon as AnalyticsIcon,
  Settings as SettingsIcon,
  LogOut,
  Menu,
  X,
  ChevronDownIcon,
  BoxIcon,
} from "@animateicons/react/lucide";

const navItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: DashboardIcon,
  },
  {
    name: "Projects",
    icon: ProjectsIcon,
    submenu: [
      {
        name: "All Projects",
        path: "/admin/projects",
      },
      {
        name: "Create Project",
        path: "/admin/projects/create",
      },
    ],
  },
  {
    name: "Contacts",
    path: "/admin/contact",
    icon: ContactsIcon,
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: AnalyticsIcon,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    sessionStorage.removeItem("adminLoggedIn");
    navigate("/admin/login", { replace: true });
  };

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  const isProjectsRoute =
    location.pathname === "/admin/projects" ||
    location.pathname.startsWith("/admin/projects/");

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:hidden">
        <NavLink to="/admin" onClick={closeSidebar} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <BoxIcon size={24} className="text-blue-500" />
            <h2 className="text-lg font-bold text-gray-800">Admin</h2>
          </div>
        </NavLink>
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
      </header>

      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <NavLink to="/admin" onClick={closeSidebar} className="flex items-center gap-3">
            <BoxIcon size={28} className="text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Admin</h2>
          </NavLink>
          <button
            onClick={closeSidebar}
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.submenu) {
              const submenuActive = item.submenu.some((subItem) => location.pathname === subItem.path);
              const menuIsOpen = openMenu === item.name || (item.name === "Projects" && isProjectsRoute);

              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      submenuActive
                        ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} />
                      {item.name}
                    </div>
                    <ChevronDownIcon
                      size={16}
                      className={`transition-transform duration-300 ${menuIsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${menuIsOpen ? "max-h-40" : "max-h-0"}`}>
                    <div className="mt-1 space-y-1 pl-4">
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={closeSidebar}
                          className={({ isActive }) =>
                            `flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-gray-100 p-4 space-y-1">
          <NavLink
            to="/admin/settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <SettingsIcon size={20} />
            Settings
          </NavLink>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-red-600 cursor-pointer"
          >
            <LogOut size={20} />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;