import {
  ExternalLinkIcon,
  GithubIcon,
  StarIcon,
} from "@animateicons/react/lucide";

const ProjectPreview = ({ project }) => {
  const imageUrl = project.image?.preview;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d120d]">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CFF00]">
            Live Preview
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Project Card
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />

          <span className="text-xs font-bold uppercase tracking-wider text-[#9CFF00]">
            Preview
          </span>

        </div>

      </div>

      {/* =====================================
          CARD
      ===================================== */}

      <div className="p-4">

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080b08]">

          {/* IMAGE */}
          <div className="relative aspect-video overflow-hidden bg-[#101510]">

            {imageUrl ? (
              <img
                src={imageUrl}
                alt={
                  project.imageAlt ||
                  project.title ||
                  "Project preview"
                }
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <span className="text-lg text-gray-700">
                      +
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                    Project Image
                  </p>

                </div>

              </div>
            )}

            {/* Featured */}
            {project.featured && (
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-lg border border-[#9CFF00]/20 bg-black/70 px-2.5 py-1.5 backdrop-blur-md">

                <StarIcon
                  size={12}
                  className="text-[#9CFF00]"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-[#9CFF00]">
                  Featured
                </span>

              </div>
            )}

          </div>

          {/* CONTENT */}
          <div className="p-5">

            {/* Slug */}
            {project.slug && (
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#9CFF00]/60">
                /{project.slug}
              </p>
            )}

            {/* Title */}
            <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
              {project.title || "Project Title"}
            </h3>

            {/* Tagline */}
            <p className="mt-2 text-sm leading-6 text-gray-400">
              {project.tagline ||
                "Your project tagline will appear here."}
            </p>

            {/* Description */}
            <p className="mt-3 line-clamp-3 text-xs leading-5 text-gray-600">
              {project.description ||
                "Project description preview will appear here once you start filling the form."}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap gap-2">

              {project.technologies.length > 0 ? (
                project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[8px] font-medium text-gray-400"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-700">
                  Technologies
                </span>
              )}

            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">

              {/* Order */}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-700">
                  Order
                </p>

                <p className="mt-1 text-xs font-semibold text-gray-400">
                  #{project.order}
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-2">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:border-[#9CFF00]/30 hover:text-[#9CFF00]"
                  >
                    <ExternalLinkIcon size={14} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:border-[#9CFF00]/30 hover:text-[#9CFF00]"
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

      <div className="border-t border-white/[0.06] bg-black/10 px-5 py-4">

        <div className="flex items-center justify-between">

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600">
            Form Status
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#9CFF00]">
            Live
          </span>

        </div>

      </div>

    </div>
  );
};

export default ProjectPreview;