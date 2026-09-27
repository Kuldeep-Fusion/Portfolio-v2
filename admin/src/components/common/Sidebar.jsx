import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  HouseIcon,
  FolderIcon,
  MessageSquareIcon,
  ChartNoAxesCombinedIcon,
  Settings,
  LogOut,
  Menu,
  LinkIcon,
  X,
  ChevronDownIcon,
} from "@animateicons/react/lucide";

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: HouseIcon,
  },

  {
    name: "Projects",
    icon: FolderIcon,

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
    icon: MessageSquareIcon,
  },

  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: ChartNoAxesCombinedIcon,
  },
];

/* =========================================================
   SIDEBAR
========================================================= */

const Sidebar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  /* =======================================================
     MOBILE SIDEBAR
  ======================================================= */

  const closeSidebar = () => {
    setIsOpen(false);
  };

  /* =======================================================
     SUBMENU TOGGLE
  ======================================================= */

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  /* =======================================================
     AUTO OPEN PROJECTS SUBMENU
  ======================================================= */

  const isProjectsRoute =
    location.pathname === "/projects" ||
    location.pathname.startsWith("/projects/");

  return (
    <>
      {/* =====================================================
          MOBILE HEADER
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-white/[0.06] bg-[#020502]/95 px-4 backdrop-blur-xl lg:hidden">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeSidebar}
          className="flex items-center gap-3"
        >
          {/* Logo Box */}
          <div className="flex h-8 w-8 items-center justify-center border border-[#9CFF00]/30 bg-[#9CFF00]/[0.06]">
            <span className="text-xs font-black text-[#9CFF00]">KF</span>
          </div>

          {/* Logo Text */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white">
              Admin
            </p>

            <p className="text-[7px] uppercase tracking-[0.25em] text-gray-600">
              Control Panel
            </p>
          </div>
        </NavLink>

        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-9 w-9 items-center justify-center border border-white/10 text-gray-400 transition hover:border-[#9CFF00]/30 hover:text-[#9CFF00]"
        >
          <Menu size={17} />
        </button>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 z-40 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300 lg:hidden

          ${isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`
          fixed bottom-0 left-0 top-0 z-50
          flex w-[280px] flex-col
          border-r border-white/[0.06]
          bg-[#050805]
          transition-transform duration-300 ease-out

          lg:w-64 lg:translate-x-0

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* ===================================================
            BACKGROUND GRID
        =================================================== */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(156,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,0,1) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        {/* ===================================================
            TOP GLOW
        =================================================== */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#9CFF00]/5 blur-[70px]" />

        {/* ===================================================
            LOGO
        =================================================== */}

        <div className="relative z-10 flex h-20 items-center justify-between border-b border-white/[0.06] px-5">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeSidebar}
            className="flex items-center gap-3"
          >
            {/* Logo Box */}
            <div className="relative flex h-10 w-10 items-center justify-center border border-[#9CFF00]/30 bg-[#9CFF00]/[0.05]">
              <span className="text-sm font-black tracking-[-0.05em] text-[#9CFF00]">
                KF
              </span>

              {/* Status Dot */}
              <span className="absolute -right-[2px] -top-[2px] h-1.5 w-1.5 bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
            </div>

            {/* Brand */}
            <div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.15em] text-white">
                Kuldeep
                <span className="text-[#9CFF00]">.</span>
              </h2>

              <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.25em] text-gray-600">
                Admin System
              </p>
            </div>
          </NavLink>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-8 w-8 items-center justify-center border border-white/10 text-gray-500 transition hover:border-[#9CFF00]/30 hover:text-[#9CFF00] lg:hidden"
          >
            <X size={15} />
          </button>
        </div>

        {/* ===================================================
            STATUS
        =================================================== */}

        <div className="relative z-10 px-4 pt-5">
          <div className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
            {/* System */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9CFF00] opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9CFF00]" />
              </span>

              <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-500">
                System
              </span>
            </div>

            {/* Online */}
            <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#9CFF00]">
              Online
            </span>
          </div>
        </div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <nav className="relative z-10 flex-1 overflow-y-auto px-4 py-6">
          {/* Navigation Title */}
          <p className="mb-3 px-3 text-[7px] font-bold uppercase tracking-[0.3em] text-gray-700">
            Navigation
          </p>

          <div className="space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              /* =================================================
                 MENU WITH SUBMENU
              ================================================= */

              if (item.submenu) {
                const submenuActive = item.submenu.some(
                  (subItem) => location.pathname === subItem.path
                );

                const menuIsOpen =
                  openMenu === item.name ||
                  (item.name === "Projects" && isProjectsRoute);

                return (
                  <div key={item.name}>
                    {/* =========================================
                        PARENT MENU
                    ========================================= */}

                    <button
                      type="button"
                      onClick={() => toggleMenu(item.name)}
                      className={`
                        group relative flex h-11 w-full
                        items-center gap-3
                        border px-3
                        transition-all duration-300

                        ${submenuActive
                          ? "border-[#9CFF00]/20 bg-[#9CFF00]/[0.06] text-[#9CFF00]"
                          : "border-transparent text-gray-500 hover:border-white/[0.05] hover:bg-white/[0.02] hover:text-white"
                        }
                      `}
                    >
                      {/* Active Line */}
                      {submenuActive && (
                        <span className="absolute bottom-2 left-0 top-2 w-[2px] bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
                      )}

                      {/* Number */}
                      <span
                        className={`
                          w-4 text-[7px] font-bold

                          ${submenuActive
                            ? "text-[#9CFF00]/60"
                            : "text-gray-800"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      {/* Icon */}
                      <Icon size={17} duration={0.5} color="currentColor" />

                      {/* Name */}
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
                        {item.name}
                      </span>

                      {/* Arrow */}
                      <ChevronDownIcon
                        size={14}
                        className={`
                          ml-auto transition-transform duration-300

                          ${menuIsOpen ? "rotate-180 text-[#9CFF00]" : ""}
                        `}
                      />
                    </button>

                    {/* =========================================
                        SUBMENU
                    ========================================= */}

                    <div
                      className={`
                        grid transition-all duration-300

                        ${menuIsOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-7 mt-1 space-y-1 border-l border-white/[0.06] pl-3">
                          {item.submenu.map((subItem) => (
                            <NavLink
                              key={subItem.path}
                              to={subItem.path}
                              onClick={closeSidebar}
                              className={({ isActive }) =>
                                `
                                  relative flex h-9
                                  items-center px-3

                                  text-[8px] font-bold
                                  uppercase tracking-[0.12em]

                                  transition-all duration-200

                                  ${isActive
                                  ? "bg-[#9CFF00]/[0.06] text-[#9CFF00]"
                                  : "text-gray-600 hover:bg-white/[0.02] hover:text-gray-300"
                                }
                                `
                              }
                            >
                              {({ isActive }) => (
                                <>
                                  {/* Active Line */}
                                  {isActive && (
                                    <span className="absolute -left-[1px] h-4 w-[2px] bg-[#9CFF00] shadow-[0_0_6px_#9CFF00]" />
                                  )}

                                  {/* Name */}
                                  <span>{subItem.name}</span>

                                  {/* Active Dot */}
                                  {isActive && (
                                    <span className="ml-auto h-1 w-1 rounded-full bg-[#9CFF00] shadow-[0_0_7px_#9CFF00]" />
                                  )}
                                </>
                              )}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* =================================================
                 NORMAL MENU
              ================================================= */

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `
                      group relative flex h-11
                      items-center gap-3
                      border px-3
                      transition-all duration-300

                      ${isActive
                      ? "border-[#9CFF00]/20 bg-[#9CFF00]/[0.06] text-[#9CFF00]"
                      : "border-transparent text-gray-500 hover:border-white/[0.05] hover:bg-white/[0.02] hover:text-white"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Line */}
                      {isActive && (
                        <span className="absolute bottom-2 left-0 top-2 w-[2px] bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
                      )}

                      {/* Number */}
                      <span
                        className={`
                          w-4 text-[7px] font-bold

                          ${isActive ? "text-[#9CFF00]/60" : "text-gray-800"}
                        `}
                      >
                        0{index + 1}
                      </span>

                      {/* Icon */}
                      <Icon size={17} duration={0.5} color="currentColor" />

                      {/* Name */}
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
                        {item.name}
                      </span>

                      {/* Active Dot */}
                      {isActive && (
                        <span className="ml-auto h-1 w-1 rounded-full bg-[#9CFF00] shadow-[0_0_7px_#9CFF00]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* ===================================================
              MANAGEMENT
          =================================================== */}

          <p className="mb-3 mt-8 px-3 text-[7px] font-bold uppercase tracking-[0.3em] text-gray-700">
            Management
          </p>

          {/* Settings */}
          <NavLink
            to="/settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `
                group flex h-11 items-center gap-3
                border px-3
                transition-all duration-300

                ${isActive
                ? "border-[#9CFF00]/20 bg-[#9CFF00]/[0.06] text-[#9CFF00]"
                : "border-transparent text-gray-500 hover:border-white/[0.05] hover:bg-white/[0.02] hover:text-white"
              }
              `
            }
          >
            {({ isActive }) => (
              <>
                <Settings size={15} strokeWidth={1.7} />

                <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
                  Settings
                </span>

                {isActive && (
                  <span className="ml-auto h-1 w-1 rounded-full bg-[#9CFF00] shadow-[0_0_7px_#9CFF00]" />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div className="relative z-10 border-t border-white/[0.06] p-4">
          {/* Website Link */}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noreferrer"
            className="mb-2 flex h-10 items-center gap-3 border border-white/[0.06] px-3 text-gray-500 transition-all duration-300 hover:border-[#9CFF00]/20 hover:bg-[#9CFF00]/[0.03] hover:text-[#9CFF00]"
          >
            <LinkIcon size={14} />

            <span className="text-[8px] font-bold uppercase tracking-[0.15em]">
              View Website
            </span>

            <span className="ml-auto text-[9px]">↗</span>
          </a>

          {/* Logout */}
          <button
            type="button"
            className="flex h-10 w-full items-center gap-3 border border-transparent px-3 text-gray-600 transition-all duration-300 hover:border-red-500/10 hover:bg-red-500/[0.03] hover:text-red-400"
          >
            <LogOut size={14} />

            <span className="text-[8px] font-bold uppercase tracking-[0.15em]">
              Logout
            </span>
          </button>

          {/* Version */}
          <div className="mt-4 flex items-center justify-between px-3">
            <span className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-800">
              KF Admin
            </span>

            <span className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-800">
              V1.0.0
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;