import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";

import {
  deleteProject,
  getProjects,
} from "../../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================
  // FETCH PROJECTS
  // =========================================

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getProjects();

      setProjects(response.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch projects:",
        error
      );

      setError("Unable to load projects.");
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // INITIAL FETCH
  // =========================================

  useEffect(() => {
    fetchProjects();
  }, []);

  // =========================================
  // DELETE PROJECT
  // =========================================

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Project ID is missing");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) return;

    try {
      const response = await deleteProject(id);

      console.log(
        response,
        "Project deleted successfully"
      );

      // Remove project from UI immediately
      setProjects((prevProjects) =>
        prevProjects.filter(
          (project) => project._id !== id
        )
      );
    } catch (error) {
      console.error(
        "Failed to delete project:",
        error
      );
    }
  };

  return (
    <section>
      {/* ================= HEADER ================= */}

      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Portfolio
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
            Projects
            <span className="text-[#9CFF00] drop-shadow-[0_0_10px_#9CFF00]">.</span>
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Manage your portfolio projects.
          </p>
        </div>

        {/* Total */}

        <div className="hidden rounded-xl border border-[#9CFF00]/20 bg-[#9CFF00]/10 px-5 py-4 shadow-sm sm:block">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]/80">
            Total Projects
          </p>

          <p className="mt-1 text-2xl font-black text-[#9CFF00]">
            {projects.length}
          </p>
        </div>
      </div>

      {/* ================= LOADING ================= */}

      {loading && (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#9CFF00]" />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              Loading Projects
            </p>
          </div>
        </div>
      )}

      {/* ================= ERROR ================= */}

      {!loading && error && (
        <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.05]">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchProjects}
              className="
                mt-6
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-300
                transition
                hover:border-[#9CFF00]/40
                hover:bg-[#9CFF00]/10
                hover:text-[#9CFF00]
              "
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* ================= PROJECTS ================= */}

      {!loading && !error && (
        <>
          {projects.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  index={index}
                  onEdit={(project) => {
                    console.log(
                      "Edit:",
                      project
                    );
                  }}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-dashed border-white/[0.1]">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                  No Projects Found
                </p>

                <p className="mt-2 text-xs text-gray-600">
                  Create your first project to get
                  started.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Projects;
