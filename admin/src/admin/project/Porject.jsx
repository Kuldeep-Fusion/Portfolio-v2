import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { deleteProject, getProjects } from "../../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getProjects();
      setProjects(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setError("Unable to load projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!id) return;
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      alert("Failed to delete project");
    }
  };

  const handleEdit = (project) => {
    window.location.href = `/admin/projects/edit/${project._id}`;
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-sm font-medium text-red-600">{error}</p>
        <button
          onClick={fetchProjects}
          className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your portfolio projects.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <p className="text-xs font-medium text-gray-500">Total</p>
            <p className="text-lg font-bold text-blue-600">{projects.length}</p>
          </div>
          <a
            href="/admin/projects/create"
            className="flex h-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            + Add New Project
          </a>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white shadow-sm">
          <p className="text-sm font-medium text-gray-500">No Projects Found</p>
          <a href="/admin/projects/create" className="mt-4 text-xs font-medium text-blue-600 hover:underline">
            Create your first project
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              index={index}
              onEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
