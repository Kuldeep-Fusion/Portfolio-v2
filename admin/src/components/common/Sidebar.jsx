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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#9CFF00]/30 bg-[#9CFF00]/[0.06]">
            <span className="text-base font-black text-[#9CFF00]">KF</span>
          </div>

          {/* Logo Text */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Admin
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Control Panel
            </p>
          </div>
        </NavLink>

        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-[#9CFF00]/30 hover:text-[#9CFF00]"
        >
          <Menu size={20} />
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

        <div className="relative z-10 flex h-24 items-center justify-between border-b border-white/[0.06] px-6">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeSidebar}
            className="flex items-center gap-4"
          >
            {/* Logo Box */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#9CFF00]/30 bg-[#9CFF00]/[0.05] shadow-[0_0_15px_rgba(156,255,0,0.1)]">
              <span className="text-lg font-black tracking-[-0.05em] text-[#9CFF00]">
                KF
              </span>

              {/* Status Dot */}
              <span className="absolute -right-[2px] -top-[2px] h-2 w-2 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
            </div>

            {/* Brand */}
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.15em] text-white">
                Kuldeep
                <span className="text-[#9CFF00]">.</span>
              </h2>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
                Admin System
              </p>
            </div>
          </NavLink>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:border-[#9CFF00]/30 hover:text-[#9CFF00] lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* ===================================================
            STATUS
        =================================================== */}

        <div className="relative z-10 px-5 pt-6">
          <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 shadow-sm backdrop-blur-sm">
            {/* System */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9CFF00] opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#9CFF00]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                System
              </span>
            </div>

            {/* Online */}
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#9CFF00]">
              Online
            </span>
          </div>
        </div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <nav className="relative z-10 flex-1 overflow-y-auto px-5 py-6">
          {/* Navigation Title */}
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
            Navigation
          </p>

          <div className="space-y-2">
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
                        group relative flex h-12 w-full
                        items-center gap-3
                        rounded-lg px-4
                        transition-all duration-300

                        ${submenuActive
                          ? "bg-[#9CFF00]/10 text-[#9CFF00] border border-[#9CFF00]/20 shadow-[0_0_10px_rgba(156,255,0,0.05)]"
                          : "border border-transparent text-gray-400 hover:border-white/[0.05] hover:bg-white/[0.03] hover:text-white"
                        }
                      `}
                    >
                      {/* Active Line */}
                      {submenuActive && (
                        <span className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-md bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
                      )}

                      {/* Number */}
                      <span
                        className={`
                          w-5 text-[10px] font-bold
                          ${submenuActive ? "text-[#9CFF00]/60" : "text-gray-600"}
                        `}
                      >
                        0{index + 1}
                      </span>

                      {/* Icon */}
                      <Icon size={18} duration={0.5} color="currentColor" />

                      {/* Name */}
                      <span className="text-xs font-bold uppercase tracking-[0.15em]">
                        {item.name}
                      </span>

                      {/* Arrow */}
                      <ChevronDownIcon
                        size={16}
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
                        <div className="ml-8 mt-2 space-y-1.5 border-l-2 border-white/[0.06] pl-4">
                          {item.submenu.map((subItem) => (
                            <NavLink
                              key={subItem.path}
                              to={subItem.path}
                              onClick={closeSidebar}
                              className={({ isActive }) =>
                                `
                                  relative flex h-10
                                  items-center px-4 rounded-md

                                  text-[10px] font-bold
                                  uppercase tracking-[0.12em]

                                  transition-all duration-200

                                  ${isActive
                                  ? "bg-[#9CFF00]/10 text-[#9CFF00] shadow-sm"
                                  : "text-gray-500 hover:bg-white/[0.02] hover:text-gray-300"
                                }
                                `
                              }
                            >
                              {({ isActive }) => (
                                <>
                                  {/* Active Line */}
                                  {isActive && (
                                    <span className="absolute -left-[2px] h-5 w-[2px] rounded-r-md bg-[#9CFF00] shadow-[0_0_6px_#9CFF00]" />
                                  )}

                                  {/* Name */}
                                  <span>{subItem.name}</span>

                                  {/* Active Dot */}
                                  {isActive && (
                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_7px_#9CFF00]" />
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
                      group relative flex h-12
                      items-center gap-3
                      rounded-lg px-4
                      transition-all duration-300

                      ${isActive
                      ? "bg-[#9CFF00]/10 text-[#9CFF00] border border-[#9CFF00]/20 shadow-[0_0_10px_rgba(156,255,0,0.05)]"
                      : "border border-transparent text-gray-400 hover:border-white/[0.05] hover:bg-white/[0.03] hover:text-white"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Line */}
                      {isActive && (
                        <span className="absolute bottom-3 left-0 top-3 w-[3px] rounded-r-md bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
                      )}

                      {/* Number */}
                      <span
                        className={`
                          w-5 text-[10px] font-bold

                          ${isActive ? "text-[#9CFF00]/60" : "text-gray-600"}
                        `}
                      >
                        0{index + 1}
                      </span>

                      {/* Icon */}
                      <Icon size={18} duration={0.5} color="currentColor" />

                      {/* Name */}
                      <span className="text-xs font-bold uppercase tracking-[0.15em]">
                        {item.name}
                      </span>

                      {/* Active Dot */}
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_7px_#9CFF00]" />
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

          <p className="mb-4 mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
            Management
          </p>

          {/* Settings */}
          <NavLink
            to="/settings"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `
                group flex h-12 items-center gap-3
                rounded-lg px-4
                transition-all duration-300

                ${isActive
                ? "bg-[#9CFF00]/10 text-[#9CFF00] border border-[#9CFF00]/20 shadow-[0_0_10px_rgba(156,255,0,0.05)]"
                : "border border-transparent text-gray-400 hover:border-white/[0.05] hover:bg-white/[0.03] hover:text-white"
              }
              `
            }
          >
            {({ isActive }) => (
              <>
                <Settings size={18} strokeWidth={1.7} />

                <span className="text-xs font-bold uppercase tracking-[0.15em]">
                  Settings
                </span>

                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_7px_#9CFF00]" />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div className="relative z-10 border-t border-white/[0.06] p-5">
          {/* Website Link */}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noreferrer"
            className="mb-3 flex h-12 items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 text-gray-400 transition-all duration-300 hover:border-[#9CFF00]/30 hover:bg-[#9CFF00]/10 hover:text-[#9CFF00]"
          >
            <LinkIcon size={16} />

            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
              View Website
            </span>

            <span className="ml-auto text-xs">↗</span>
          </a>

          {/* Logout */}
          <button
            type="button"
            className="flex h-12 w-full items-center gap-3 rounded-lg border border-transparent px-4 text-gray-500 transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={16} />

            <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
              Logout
            </span>
          </button>

          {/* Version */}
          <div className="mt-5 flex items-center justify-between px-3">
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
              KF Admin
            </span>

            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
              V1.0.0
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;