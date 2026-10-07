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
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#0b100b]
        shadow-lg
        transition-all
        duration-300
        hover:border-[#9CFF00]/40
        hover:bg-[#0d130d]
        hover:shadow-[0_10px_30px_rgba(156,255,0,0.1)]
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
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050805] via-[#050805]/20 to-transparent" />

        {/* Project Number */}

        <span
          className="
            absolute
            left-5
            top-5
            text-6xl
            font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.15]
            transition-all
            duration-300
            group-hover:text-white/[0.25]
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
              gap-2
              rounded-full
              border
              border-[#9CFF00]/30
              bg-[#050805]/90
              px-3
              py-1.5
              backdrop-blur-md
            "
          >
            <StarIcon
              size={14}
              duration={0.4}
              className="text-[#9CFF00]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9CFF00]">
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
            rounded-md
            border
            border-white/[0.15]
            bg-black/70
            px-3
            py-1.5
            backdrop-blur-md
          "
        >
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
            /{project.slug}
          </span>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-5 sm:p-6">
        {/* Title + Edit */}

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9CFF00]">
              Project {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
              {project.title}
            </h3>
          </div>

          {/* Edit */}

          <button
            type="button"
            onClick={() => onEdit?.(project)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-white/[0.1]
              bg-white/5
              text-gray-400
              transition-all
              duration-300
              hover:border-[#9CFF00]/40
              hover:bg-[#9CFF00]/10
              hover:text-[#9CFF00]
            "
          >
            <PencilIcon
              size={18}
              duration={0.4}
            />
          </button>
        </div>

        {/* Tagline */}

        {project.tagline && (
          <p className="mt-3 text-sm font-medium leading-relaxed text-[#9CFF00]/80">
            {project.tagline}
          </p>
        )}

        {/* Description */}

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border
                border-white/[0.1]
                bg-white/[0.04]
                px-3
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-gray-400
                transition-colors
                group-hover:border-[#9CFF00]/20
                group-hover:text-[#9CFF00]/80
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Divider */}

        <div className="my-5 h-px bg-white/[0.08]" />

        {/* ================= META ================= */}

        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Order
            </p>

            <p className="mt-1 text-sm font-bold text-gray-300">
              #{project.order}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Status
            </p>

            <div className="mt-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />

              <span className="text-xs font-bold uppercase tracking-wider text-[#9CFF00]">
                Published
              </span>
            </div>
          </div>
        </div>

        {/* ================= ACTIONS ================= */}

        <div className="flex items-center gap-3">
          {/* Live */}

          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-11
                flex-1
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#9CFF00]
                px-4
                text-xs
                font-black
                uppercase
                tracking-[0.15em]
                text-black
                transition-all
                duration-300
                hover:shadow-[0_0_20px_rgba(156,255,0,0.3)]
                hover:scale-[1.02]
              "
            >
              <ExternalLinkIcon
                size={16}
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
                h-11
                flex-1
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-white/[0.1]
                bg-white/5
                px-4
                text-xs
                font-black
                uppercase
                tracking-[0.15em]
                text-gray-400
                transition-all
                duration-300
                hover:border-[#9CFF00]/40
                hover:bg-[#9CFF00]/10
                hover:text-[#9CFF00]
                hover:scale-[1.02]
              "
            >
              <GithubIcon
                size={16}
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
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-white/[0.1]
              bg-white/5
              text-gray-400
              transition-all
              duration-300
              hover:border-red-500/40
              hover:bg-red-500/10
              hover:text-red-400
              hover:scale-[1.05]
            "
          >
            <Trash2Icon
              size={18}
              duration={0.4}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;