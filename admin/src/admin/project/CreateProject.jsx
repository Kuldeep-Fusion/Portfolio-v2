import ProjectHeader from "../../components/ProjectHeader";
import ProjectForm from "../../components/projects/ProjectForm";
import ProjectPreview from "../../components/projects/ProjectPreview";
import { useState } from "react";

const CreateProject = () => {
  const [project, setProject] = useState({
    title: "",
    slug: "",
    tagline: "",
    description: "",
    technologies: [],
    featured: false,
    order: 1,
    live: "",
    github: "",
    imageAlt: "",
    image: null,
  });

  return (
    <section className="min-h-screen">

      <ProjectHeader />

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)]">

        {/* FORM */}
        <ProjectForm
          project={project}
          setProject={setProject}
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