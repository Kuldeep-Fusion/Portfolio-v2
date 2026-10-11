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

  const recentProjects = [...projects]
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
    .slice(0, 5);

  const recentContacts = [...contacts]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 4);

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-blue-500" />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            Loading Dashboard
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full space-y-8 pb-12">
      
      {/* HEADER */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your portfolio, projects, messages and content.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-400">{stat.description}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        
        {/* RECENT PROJECTS */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
            <a
              href="/admin/projects"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View All
            </a>
          </div>

          <div className="divide-y divide-gray-50">
            {recentProjects.length > 0 ? (
              recentProjects.map((project, index) => (
                <div
                  key={project._id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100 border border-gray-200">
                    {project.image?.url ? (
                      <img
                        src={project.image.url}
                        alt={project.image.alt || project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Image size={20} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-bold text-gray-900">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      )}
                    </div>
                    <p className="truncate text-xs text-gray-500 mt-1">
                      {project.slug}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 border border-green-200">
                      Active
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <EmptyState text="No projects available" />
            )}
          </div>
        </div>

        {/* RECENT CONTACTS */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Messages</h2>
            <a
              href="/admin/contact"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View All
            </a>
          </div>

          <div className="divide-y divide-gray-50">
            {recentContacts.length > 0 ? (
              recentContacts.map((contact, index) => (
                <div
                  key={contact._id || contact.id}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold border border-blue-100">
                    {contact.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-gray-900">
                      {contact.name}
                    </p>
                    <p className="mt-1 truncate text-xs text-gray-500">
                      {contact.subject || "New message"}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                        contact.status?.toLowerCase() === "new"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }`}
                    >
                      {contact.status || "Pending"}
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

    </section>
  );
};

const EmptyState = ({ text }) => {
  return (
    <div className="flex min-h-[150px] items-center justify-center py-8">
      <div className="flex flex-col items-center gap-2">
        <FolderHeart size={24} className="text-gray-400" />
        <p className="text-sm font-medium text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
