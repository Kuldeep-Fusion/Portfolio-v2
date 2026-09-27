import {
  ExternalLinkIcon,
  GithubIcon,
  PencilIcon,
  Trash2Icon,
  StarIcon,
} from "@animateicons/react/lucide";

const ProjectCard = ({
  project,
  index,
  onEdit,
  handleDelete,
}) => {
  return (
    <article
      className="
        group
        overflow-hidden
        border
        border-white/[0.08]
        bg-[#0b100b]
        transition-all
        duration-300
        hover:border-[#9CFF00]/25
        hover:bg-[#0d130d]
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative aspect-[16/9] overflow-hidden bg-[#050805]">
        <img
          src={project.image?.url}
          alt={project.image?.alt || project.title}
          className="
            h-full
            w-full
            object-cover
            opacity-80
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050805] via-transparent to-transparent" />

        {/* Project Number */}

        <span
          className="
            absolute
            left-4
            top-4
            text-5xl
            font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.08]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Featured */}

        {project.featured && (
          <div
            className="
              absolute
              right-4
              top-4
              flex
              items-center
              gap-1.5
              border
              border-[#9CFF00]/25
              bg-[#050805]/85
              px-2.5
              py-1.5
              backdrop-blur-md
            "
          >
            <StarIcon
              size={12}
              duration={0.4}
              className="text-[#9CFF00]"
            />

            <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#9CFF00]">
              Featured
            </span>
          </div>
        )}

        {/* Slug */}

        <div
          className="
            absolute
            bottom-4
            left-4
            max-w-[70%]
            truncate
            border
            border-white/[0.10]
            bg-black/60
            px-2.5
            py-1.5
            backdrop-blur-md
          "
        >
          <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-gray-400">
            /{project.slug}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-4 sm:p-5">
        {/* Title + Edit */}

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-1 text-[7px] font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
              Project {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-base font-black uppercase tracking-[-0.02em] text-white sm:text-lg">
              {project.title}
            </h3>
          </div>

          {/* Edit */}

          <button
            type="button"
            onClick={() => onEdit?.(project)}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              border
              border-white/[0.08]
              text-gray-600
              transition-all
              duration-300
              hover:border-[#9CFF00]/30
              hover:bg-[#9CFF00]/[0.04]
              hover:text-[#9CFF00]
            "
          >
            <PencilIcon
              size={13}
              duration={0.4}
            />
          </button>
        </div>

        {/* Tagline */}

        {project.tagline && (
          <p className="mt-2 text-[9px] font-medium leading-5 text-[#9CFF00]/70">
            {project.tagline}
          </p>
        )}

        {/* Description */}

        <p className="mt-2 line-clamp-3 text-[10px] leading-5 text-gray-500">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
              className="
                border
                border-white/[0.07]
                bg-white/[0.02]
                px-2
                py-1
                text-[7px]
                font-bold
                uppercase
                tracking-wider
                text-gray-500
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Divider */}

        <div className="my-4 h-px bg-white/[0.06]" />

        {/* ================= META ================= */}

        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-700">
              Order
            </p>

            <p className="mt-1 text-[9px] font-bold text-gray-400">
              #{project.order}
            </p>
          </div>

          <div>
            <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-700">
              Status
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_7px_#9CFF00]" />

              <span className="text-[8px] font-bold uppercase tracking-wider text-[#9CFF00]">
                Published
              </span>
            </div>
          </div>
        </div>

        {/* ================= ACTIONS ================= */}

        <div className="flex items-center gap-2">
          {/* Live */}

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                min-h-[34px]
                flex-1
                items-center
                justify-center
                gap-2
                bg-[#9CFF00]
                px-3
                text-[7px]
                font-black
                uppercase
                tracking-[0.15em]
                text-black
                transition-all
                duration-300
                hover:shadow-[0_0_20px_rgba(156,255,0,0.25)]
              "
            >
              <ExternalLinkIcon
                size={12}
                duration={0.4}
              />
              Live
            </a>
          )}

          {/* Github */}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                min-h-[34px]
                flex-1
                items-center
                justify-center
                gap-2
                border
                border-white/[0.08]
                px-3
                text-[7px]
                font-black
                uppercase
                tracking-[0.15em]
                text-gray-500
                transition-all
                duration-300
                hover:border-[#9CFF00]/30
                hover:text-[#9CFF00]
              "
            >
              <GithubIcon
                size={12}
                duration={0.4}
              />
              GitHub
            </a>
          )}

          {/* Delete */}

          <button
            type="button"
            onClick={() => handleDelete?.(project._id)}
            className="
              flex
              h-[34px]
              w-[34px]
              shrink-0
              items-center
              justify-center
              border
              border-white/[0.08]
              text-gray-600
              transition-all
              duration-300
              hover:border-red-500/30
              hover:bg-red-500/[0.04]
              hover:text-red-400
            "
          >
            <Trash2Icon
              size={13}
              duration={0.4}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;