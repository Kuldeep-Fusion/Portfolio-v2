
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

      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Portfolio
          </p>

          <h1 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em] text-white sm:text-3xl">
            Projects
            <span className="text-[#9CFF00]">.</span>
          </h1>

          <p className="mt-2 text-xs text-gray-600">
            Manage your portfolio projects.
          </p>
        </div>

        {/* Total */}

        <div className="hidden border border-white/[0.08] bg-white/[0.02] px-4 py-3 sm:block">
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600">
            Total Projects
          </p>

          <p className="mt-1 text-lg font-black text-[#9CFF00]">
            {projects.length}
          </p>
        </div>
      </div>

      {/* ================= LOADING ================= */}

      {loading && (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-[#9CFF00]" />

            <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.25em] text-gray-600">
              Loading Projects
            </p>
          </div>
        </div>
      )}

      {/* ================= ERROR ================= */}

      {!loading && error && (
        <div className="flex min-h-[300px] items-center justify-center border border-red-500/10 bg-red-500/[0.02]">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-red-400">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchProjects}
              className="
                mt-4
                border
                border-white/10
                px-4
                py-2
                text-[7px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-400
                transition
                hover:border-[#9CFF00]/30
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
                gap-4
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
            <div className="flex min-h-[300px] items-center justify-center border border-dashed border-white/[0.08]">
              <div className="text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
                  No Projects Found
                </p>

                <p className="mt-2 text-[8px] text-gray-700">
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
