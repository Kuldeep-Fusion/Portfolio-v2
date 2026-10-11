import ProjectHeader from "../../components/ProjectHeader";
import ProjectForm from "../../components/projects/ProjectForm";
import ProjectPreview from "../../components/projects/ProjectPreview";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../services/api";

const CreateProject = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);

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
      };
      fetchProject();
    }
  }, [id, isEdit]);

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