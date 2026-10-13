import ProjectHeader from "../../components/ProjectHeader";
import ProjectForm from "../../components/projects/ProjectForm";
import ProjectPreview from "../../components/projects/ProjectPreview";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../services/api";

const CreateProject = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [loadingProject, setLoadingProject] = useState(isEdit);
  const [fetchError, setFetchError] = useState("");

  const [project, setProject] = useState({
    title: "",
    slug: "",
    tagline: "",
    description: "",
    technologies: [],
    featured: false,
    order: 1,
    links: {
      live: "",
      github: "",
    },
    imageAlt: "",
    image: null,
  });

  useEffect(() => {
    if (isEdit) {
      const fetchProject = async () => {
        try {
          setLoadingProject(true);
          setFetchError("");
          const response = await getProjectById(id);
          if (response?.data) {
            const data = response.data;
            setProject({
              title: data.title || "",
              slug: data.slug || "",
              tagline: data.tagline || "",
              description: data.description || "",
              technologies: data.technologies || [],
              featured: data.featured || false,
              order: data.order || 1,
              links: {
                live: data.links?.live || "",
                github: data.links?.github || "",
              },
              imageAlt: data.image?.alt || "",
              image: {
                file: null,
                preview: data.image?.url || "",
              },
            });
          }
        } catch (error) {
          console.error("Failed to fetch project:", error);
          setFetchError(error.response?.data?.message || "Failed to load project details.");
        } finally {
          setLoadingProject(false);
        }
      };
      fetchProject();
    }
  }, [id, isEdit]);

  if (loadingProject) {
    return (
      <section className="min-h-screen">
        <ProjectHeader title="Edit Project" />
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-blue-500" />
        </div>
      </section>
    );
  }

  if (fetchError) {
    return (
      <section className="min-h-screen">
        <ProjectHeader title="Edit Project" />
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-sm font-medium text-red-600">{fetchError}</p>
          <a
            href="/admin/projects"
            className="mt-4 inline-block rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Back to Projects
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen">
      <ProjectHeader title={isEdit ? "Edit Project" : "Create Project"} />

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)]">
        {/* FORM */}
        <ProjectForm
          project={project}
          setProject={setProject}
          isEdit={isEdit}
          projectId={id}
        />

        {/* LIVE PREVIEW */}
        <div className="xl:sticky xl:top-6 xl:self-start">
          <ProjectPreview project={project} />
        </div>
      </div>
    </section>
  );
};

export default CreateProject;