import {
  ExternalLinkIcon,
  GithubIcon,
  StarIcon,
} from "@animateicons/react/lucide";

const ProjectPreview = ({ project }) => {
  const imageUrl = project.image?.preview;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* =====================================
          HEADER
      ===================================== */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-5 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Live Preview
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Project Card
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#3b82f6]" />
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Preview
          </span>
        </div>
      </div>

      {/* =====================================
          CARD
      ===================================== */}
      <div className="p-4 bg-gray-50/50">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
          {/* IMAGE */}
          <div className="relative aspect-video overflow-hidden bg-gray-100">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={project.imageAlt || project.title || "Project preview"}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-400">
                    <span className="text-2xl font-light">+</span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Project Image
                  </p>
                </div>
              </div>
            )}
            {/* Featured */}
            {project.featured && (
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-lg border border-yellow-200 bg-yellow-100 px-2.5 py-1.5">
                <StarIcon size={12} className="text-yellow-600 fill-yellow-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="p-5">
            {/* Slug */}
            {project.slug && (
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-500">
                /{project.slug}
              </p>
            )}

            {/* Title */}
            <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900">
              {project.title || "Project Title"}
            </h3>

            {/* Tagline */}
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {project.tagline || "Your project tagline will appear here."}
            </p>

            {/* Description */}
            <p className="mt-3 line-clamp-3 text-xs leading-5 text-gray-500">
              {project.description || "Project description preview will appear here once you start filling the form."}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies?.length > 0 ? (
                project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-gray-100 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-600"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-400">Technologies</span>
              )}
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Order
                </p>
                <p className="mt-1 text-xs font-bold text-gray-700">
                  #{project.order || 0}
                </p>
              </div>
              <div className="flex gap-2">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                  >
                    <ExternalLinkIcon size={14} />
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                  >
                    <GithubIcon size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* =====================================
          JSON DEBUG / STATUS
      ===================================== */}
      <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
            Form Status
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-green-600 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block"></span> Live
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;