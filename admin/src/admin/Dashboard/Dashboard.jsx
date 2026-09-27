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

      const [projectResponse, contactResponse] =
        await Promise.all([
          getProjects(),
          getContact(),
        ]);

      setProjects(projectResponse?.data || []);
      setContacts(contactResponse?.data || []);
    } catch (error) {
      console.error(
        "Failed to load dashboard:",
        error
      );
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
    () =>
      projects.filter(
        (project) => project.featured
      ),
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
    () =>
      contacts.filter(
        (contact) =>
          contact.status?.toLowerCase() === "new"
      ).length,
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
    .sort(
      (a, b) =>
        Number(a.order || 0) -
        Number(b.order || 0)
    )
    .slice(0, 5);

  // =========================================
  // RECENT CONTACTS
  // =========================================

  const recentContacts = [...contacts]
    .sort(
      (a, b) =>
        new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0)
    )
    .slice(0, 4);

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-white/10 border-t-[#9CFF00]" />

          <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.25em] text-gray-600">
            Loading Dashboard
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full space-y-6">
      {/* =====================================
          HEADER
      ===================================== */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Portfolio Control
          </p>

          <h1 className="text-3xl font-black uppercase tracking-[-0.05em] text-white sm:text-4xl">
            Dashboard
            <span className="text-[#9CFF00]">.</span>
          </h1>

          <p className="mt-2 max-w-xl text-xs leading-5 text-gray-600">
            Manage your portfolio, projects,
            messages and content from one place.
          </p>
        </div>

        {/* Status */}

        <div className="flex items-center gap-3 border border-white/[0.07] bg-white/[0.02] px-4 py-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9CFF00] opacity-40" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9CFF00]" />
          </span>

          <div>
            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600">
              System Status
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-[#9CFF00]">
              All Systems Operational
            </p>
          </div>
        </div>
      </div>

      {/* =====================================
          STATS
      ===================================== */}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="
                group
                border
                border-white/[0.07]
                bg-[#0b100b]
                p-5
                transition-all
                duration-300
                hover:border-[#9CFF00]/20
                hover:bg-[#0d130d]
              "
            >
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center border border-[#9CFF00]/15 bg-[#9CFF00]/[0.04]">
                  <Icon
                    size={15}
                    className="text-[#9CFF00]"
                  />
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-gray-700 transition group-hover:text-[#9CFF00]"
                />
              </div>

              <p className="mt-5 text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600">
                {stat.title}
              </p>

              <p className="mt-1 text-3xl font-black tracking-tight text-white">
                {stat.value}
              </p>

              <p className="mt-1 text-[8px] text-gray-700">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* =====================================
          MAIN GRID
      ===================================== */}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.5fr_1fr]">
        {/* =====================================
            RECENT PROJECTS
        ===================================== */}

        <div className="border border-white/[0.07] bg-[#0b100b]">
          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
                Portfolio
              </p>

              <h2 className="mt-1 text-sm font-black uppercase tracking-tight text-white">
                Recent Projects
              </h2>
            </div>

            <a
              href="/admin/projects"
              className="
                flex
                items-center
                gap-1.5
                text-[7px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-gray-600
                transition
                hover:text-[#9CFF00]
              "
            >
              View All
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Projects */}

          <div className="divide-y divide-white/[0.05]">
            {recentProjects.length > 0 ? (
              recentProjects.map((project, index) => (
                <div
                  key={project._id}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    px-5
                    py-4
                    transition
                    hover:bg-[#9CFF00]/[0.02]
                  "
                >
                  {/* Image */}

                  <div className="h-12 w-20 shrink-0 overflow-hidden bg-[#050805]">
                    {project.image?.url ? (
                      <img
                        src={project.image.url}
                        alt={
                          project.image.alt ||
                          project.title
                        }
                        className="h-full w-full object-cover opacity-70 transition group-hover:opacity-100"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Image
                          size={14}
                          className="text-gray-700"
                        />
                      </div>
                    )}
                  </div>

                  {/* Info */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[7px] font-bold text-gray-700">
                        #{String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <h3 className="truncate text-[10px] font-bold uppercase tracking-wide text-white">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <Star
                          size={10}
                          className="shrink-0 text-[#9CFF00]"
                        />
                      )}
                    </div>

                    <p className="mt-1 truncate text-[8px] text-gray-600">
                      {project.tagline ||
                        project.description}
                    </p>
                  </div>

                  {/* Technologies */}

                  <div className="hidden items-center gap-1 md:flex">
                    {project.technologies
                      ?.slice(0, 2)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/[0.06] px-2 py-1 text-[6px] font-bold uppercase tracking-wider text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="shrink-0 text-gray-700 transition group-hover:text-[#9CFF00]"
                  />
                </div>
              ))
            ) : (
              <EmptyState text="No projects available" />
            )}
          </div>
        </div>

        {/* =====================================
            CONTACTS
        ===================================== */}

        <div className="border border-white/[0.07] bg-[#0b100b]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
                Communication
              </p>

              <h2 className="mt-1 text-sm font-black uppercase tracking-tight text-white">
                Recent Messages
              </h2>
            </div>

            <a
              href="/admin/contacts"
              className="flex items-center gap-1.5 text-[7px] font-bold uppercase tracking-[0.15em] text-gray-600 transition hover:text-[#9CFF00]"
            >
              View All
              <ArrowUpRight size={11} />
            </a>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {recentContacts.length > 0 ? (
              recentContacts.map((contact) => (
                <div
                  key={contact._id || contact.id}
                  className="flex items-center gap-3 px-5 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#9CFF00]/15 bg-[#9CFF00]/[0.04]">
                    <span className="text-[9px] font-black text-[#9CFF00]">
                      {contact.name
                        ?.charAt(0)
                        ?.toUpperCase()}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[9px] font-bold uppercase text-white">
                      {contact.name}
                    </p>

                    <p className="mt-1 truncate text-[7px] text-gray-600">
                      {contact.subject ||
                        "New message"}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-1.5
                        border
                        px-2
                        py-1
                        text-[6px]
                        font-bold
                        uppercase
                        tracking-wider
                        ${
                          contact.status
                            ?.toLowerCase() ===
                          "new"
                            ? "border-[#9CFF00]/20 bg-[#9CFF00]/[0.04] text-[#9CFF00]"
                            : "border-white/[0.06] text-gray-600"
                        }
                      `}
                    >
                      {contact.status ||
                        "New"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <EmptyState text="No messages yet" />
            )}
          </div>
        </div>
      </div>

      {/* =====================================
          QUICK ACTIONS
      ===================================== */}

      <div>
        <div className="mb-3">
          <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
            Shortcuts
          </p>

          <h2 className="mt-1 text-sm font-black uppercase text-white">
            Quick Actions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>

      {/* =====================================
          OVERVIEW FOOTER
      ===================================== */}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <OverviewItem
          icon={Activity}
          label="Content Status"
          value="Active"
          description="Portfolio is running"
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
      </div>
    </section>
  );
};

/* =========================================
   QUICK ACTION
========================================= */

const QuickAction = ({
  icon: Icon,
  title,
  description,
  href,
  external = false,
}) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noreferrer"
          : undefined
      }
      className="
        group
        flex
        items-center
        gap-4
        border
        border-white/[0.07]
        bg-[#0b100b]
        p-4
        transition-all
        duration-300
        hover:border-[#9CFF00]/20
        hover:bg-[#0d130d]
      "
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.07] bg-white/[0.02] transition group-hover:border-[#9CFF00]/20 group-hover:bg-[#9CFF00]/[0.04]">
        <Icon
          size={14}
          className="text-gray-600 transition group-hover:text-[#9CFF00]"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-wide text-white">
          {title}
        </p>

        <p className="mt-1 truncate text-[7px] text-gray-600">
          {description}
        </p>
      </div>

      <ArrowUpRight
        size={12}
        className="text-gray-700 transition group-hover:text-[#9CFF00]"
      />
    </a>
  );
};

/* =========================================
   OVERVIEW ITEM
========================================= */

const OverviewItem = ({
  icon: Icon,
  label,
  value,
  description,
}) => {
  return (
    <div className="flex items-center gap-3 border border-white/[0.06] bg-[#0b100b] p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#9CFF00]/10 bg-[#9CFF00]/[0.03]">
        <Icon
          size={13}
          className="text-[#9CFF00]"
        />
      </div>

      <div className="min-w-0">
        <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-700">
          {label}
        </p>

        <p className="mt-1 text-[9px] font-bold uppercase text-white">
          {value}
        </p>

        <p className="mt-0.5 text-[7px] text-gray-700">
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
    <div className="flex min-h-[150px] items-center justify-center">
      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-700">
        {text}
      </p>
    </div>
  );
};

export default Dashboard;

