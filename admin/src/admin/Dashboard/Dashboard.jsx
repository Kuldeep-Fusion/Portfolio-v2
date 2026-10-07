import {
  FolderHeart,
  MessageSquare,
  Star,
  Eye,
  ArrowUpRight,
  Plus,
  Github,
  Clock,
  Activity,
  ChartBarIcon,
  Image,
  CircleCheck,
} from "@animateicons/react/lucide";

import { useEffect, useMemo, useState } from "react";
import { getContact, getProjects } from "../../services/api";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================================
  // FETCH DASHBOARD DATA
  // =========================================

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const [projectResponse, contactResponse] = await Promise.all([
        getProjects(),
        getContact(),
      ]);

      setProjects(projectResponse?.data || []);
      setContacts(contactResponse?.data || []);
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // =========================================
  // DASHBOARD STATS
  // =========================================

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [projects]
  );

  const technologies = useMemo(() => {
    const tech = new Set();
    projects.forEach((project) => {
      project.technologies?.forEach((item) => {
        tech.add(item);
      });
    });
    return tech.size;
  }, [projects]);

  const newMessages = useMemo(
    () => contacts.filter((contact) => contact.status?.toLowerCase() === "new").length,
    [contacts]
  );

  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      description: "Published projects",
      icon: FolderHeart,
    },
    {
      title: "Featured",
      value: featuredProjects.length,
      description: "Featured projects",
      icon: Star,
    },
    {
      title: "Messages",
      value: contacts.length,
      description: `${newMessages} new messages`,
      icon: MessageSquare,
    },
    {
      title: "Technologies",
      value: technologies,
      description: "Used across projects",
      icon: ChartBarIcon,
    },
  ];

  // =========================================
  // RECENT PROJECTS
  // =========================================

  const recentProjects = [...projects]
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
    .slice(0, 5);

  // =========================================
  // RECENT CONTACTS
  // =========================================

  const recentContacts = [...contacts]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 4);

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#9CFF00]" />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
            Loading Dashboard
          </p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full space-y-8 pb-12"
    >
      {/* =====================================
          HEADER
      ===================================== */}

      <motion.div variants={itemVariants} className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Portfolio Control
          </p>

          <h1 className="text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl">
            Dashboard
            <span className="text-[#9CFF00] drop-shadow-[0_0_10px_#9CFF00]">.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400">
            Manage your portfolio, projects, messages and content from one central command center.
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-4 rounded-xl border border-[#9CFF00]/20 bg-[#9CFF00]/5 px-5 py-4 shadow-[0_0_15px_rgba(156,255,0,0.05)] backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9CFF00] opacity-40" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
          </span>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]/70">
              System Status
            </p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wider text-[#9CFF00]">
              All Systems Operational
            </p>
          </div>
        </div>
      </motion.div>

      {/* =====================================
          STATS
      ===================================== */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              key={stat.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0b100b]/80
                p-6
                shadow-lg
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#9CFF00]/40
                hover:shadow-[0_10px_30px_rgba(156,255,0,0.1)]
              "
            >
              <div className="absolute -inset-px -z-10 bg-gradient-to-br from-[#9CFF00]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#9CFF00]/20 bg-[#9CFF00]/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#9CFF00]/20">
                  <Icon size={22} className="text-[#9CFF00] drop-shadow-[0_0_8px_rgba(156,255,0,0.5)]" />
                </div>
                <ArrowUpRight size={20} className="text-gray-600 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9CFF00]" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                {stat.title}
              </p>
              <p className="mt-2 text-4xl font-black tracking-tight text-white group-hover:text-[#9CFF00] transition-colors duration-300">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================
          MAIN GRID
      ===================================== */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* =====================================
            RECENT PROJECTS
        ===================================== */}

        <motion.div variants={itemVariants} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b100b]/80 backdrop-blur-sm shadow-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-6 py-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
                Portfolio
              </p>
              <h2 className="mt-1 text-lg font-black uppercase tracking-tight text-white">
                Recent Projects
              </h2>
            </div>
            <a
              href="/admin/projects"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-400 transition hover:border-[#9CFF00]/30 hover:bg-[#9CFF00]/10 hover:text-[#9CFF00]"
            >
              View All
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {recentProjects.length > 0 ? (
              recentProjects.map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  key={project._id}
                  className="group flex items-center gap-5 px-6 py-5 transition hover:bg-[#9CFF00]/[0.03]"
                >
                  {/* Image */}
                  <div className="h-16 w-28 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#050805] shadow-md transition-all group-hover:border-[#9CFF00]/30 group-hover:shadow-[0_0_15px_rgba(156,255,0,0.15)]">
                    {project.image?.url ? (
                      <img
                        src={project.image.url}
                        alt={project.image.alt || project.title}
                        className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Image size={20} className="text-gray-700" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-gray-500">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="truncate text-sm font-bold uppercase tracking-wide text-gray-200 transition group-hover:text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Star size={14} className="shrink-0 fill-[#9CFF00] text-[#9CFF00]" />
                      )}
                    </div>
                    <p className="mt-1.5 truncate text-xs text-gray-400">
                      {project.tagline || project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="hidden items-center gap-2 md:flex">
                    {project.technologies?.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-300 transition group-hover:bg-[#9CFF00]/10 group-hover:text-[#9CFF00]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-[#9CFF00]/10 group-hover:border-[#9CFF00]/30">
                    <ArrowUpRight size={18} className="text-[#9CFF00]" />
                  </div>
                </motion.div>
              ))
            ) : (
              <EmptyState text="No projects available" />
            )}
          </div>
        </motion.div>

        {/* =====================================
            CONTACTS
        ===================================== */}

        <motion.div variants={itemVariants} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b100b]/80 backdrop-blur-sm shadow-xl">
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-6 py-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
                Communication
              </p>
              <h2 className="mt-1 text-lg font-black uppercase tracking-tight text-white">
                Recent Messages
              </h2>
            </div>
            <a
              href="/admin/contacts"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-400 transition hover:border-[#9CFF00]/30 hover:bg-[#9CFF00]/10 hover:text-[#9CFF00]"
            >
              View All
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {recentContacts.length > 0 ? (
              recentContacts.map((contact, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  key={contact._id || contact.id}
                  className="group flex items-center gap-4 px-6 py-5 transition hover:bg-[#9CFF00]/[0.03]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#9CFF00]/20 bg-[#9CFF00]/10 shadow-[0_0_10px_rgba(156,255,0,0.05)] transition-transform group-hover:scale-110">
                    <span className="text-lg font-black text-[#9CFF00]">
                      {contact.name?.charAt(0)?.toUpperCase()}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold uppercase text-gray-200 transition group-hover:text-white">
                      {contact.name}
                    </p>
                    <p className="mt-1 truncate text-xs text-gray-400">
                      {contact.subject || "New message"}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`
                        inline-flex
                        items-center
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        ${
                          contact.status?.toLowerCase() === "new"
                            ? "border-[#9CFF00]/30 bg-[#9CFF00]/10 text-[#9CFF00]"
                            : "border-white/10 bg-white/5 text-gray-400"
                        }
                      `}
                    >
                      {contact.status || "New"}
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              <EmptyState text="No messages yet" />
            )}
          </div>
        </motion.div>
      </div>

      {/* =====================================
          QUICK ACTIONS
      ===================================== */}

      <motion.div variants={itemVariants}>
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
            Shortcuts
          </p>
          <h2 className="mt-1 text-xl font-black uppercase text-white">
            Quick Actions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <QuickAction
            icon={Plus}
            title="Add Project"
            description="Create a new portfolio project"
            href="/admin/projects/create"
          />
          <QuickAction
            icon={MessageSquare}
            title="Messages"
            description={`${newMessages} unread messages`}
            href="/admin/contacts"
          />
          <QuickAction
            icon={Eye}
            title="View Portfolio"
            description="Open your public portfolio"
            href="/"
          />
          <QuickAction
            icon={Github}
            title="GitHub"
            description="Open your GitHub profile"
            href="https://github.com"
            external
          />
        </div>
      </motion.div>

      {/* =====================================
          OVERVIEW FOOTER
      ===================================== */}

      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-5 sm:grid-cols-3 pt-6">
        <OverviewItem
          icon={Activity}
          label="Content Status"
          value="Active"
          description="Portfolio is running smoothly"
        />
        <OverviewItem
          icon={CircleCheck}
          label="Projects"
          value={`${projects.length} Published`}
          description="All projects are visible"
        />
        <OverviewItem
          icon={Clock}
          label="Last Updated"
          value="Just Now"
          description="Dashboard data synced"
        />
      </motion.div>
    </motion.section>
  );
};

/* =========================================
   QUICK ACTION
========================================= */

const QuickAction = ({ icon: Icon, title, description, href, external = false }) => {
  return (
    <motion.a
      whileHover={{ y: -4, scale: 1.02 }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="
        group
        relative
        flex
        items-center
        gap-5
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#0b100b]/80
        p-5
        shadow-md
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-[#9CFF00]/40
        hover:shadow-[0_8px_20px_rgba(156,255,0,0.1)]
      "
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#9CFF00]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#9CFF00]/30 group-hover:bg-[#9CFF00]/10 group-hover:scale-110">
        <Icon size={22} className="text-gray-400 transition-colors duration-300 group-hover:text-[#9CFF00]" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-200 transition-colors group-hover:text-white">
          {title}
        </p>
        <p className="mt-1 truncate text-xs text-gray-500 transition-colors group-hover:text-gray-300">
          {description}
        </p>
      </div>

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 opacity-0 transition-all duration-300 group-hover:bg-[#9CFF00]/20 group-hover:opacity-100">
        <ArrowUpRight size={16} className="text-[#9CFF00]" />
      </div>
    </motion.a>
  );
};

/* =========================================
   OVERVIEW ITEM
========================================= */

const OverviewItem = ({ icon: Icon, label, value, description }) => {
  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-white/[0.06] bg-[#0b100b]/60 p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.03]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#9CFF00]/15 bg-[#9CFF00]/[0.05] transition-transform group-hover:scale-110">
        <Icon size={20} className="text-[#9CFF00]" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          {label}
        </p>
        <p className="mt-1.5 text-sm font-bold uppercase text-gray-200 group-hover:text-white transition-colors">
          {value}
        </p>
        <p className="mt-1 text-xs text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

/* =========================================
   EMPTY STATE
========================================= */

const EmptyState = ({ text }) => {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <FolderHeart size={24} className="text-gray-500" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
