import { ExternalLinkIcon as ExternalLink, GithubIcon as Github, PencilIcon as Pencil, Trash2Icon as Trash2, StarIcon as Star } from "@animateicons/react/lucide";

const ProjectCard = ({ project, index, onEdit, handleDelete }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:border-gray-200 hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
        {project.image?.url ? (
          <img
            src={project.image?.url}
            alt={project.image?.alt || project.title}
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400 font-medium">No Image</div>
        )}
        {project.featured && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-yellow-400 px-2 py-1 text-xs font-semibold text-yellow-900 shadow-sm">
            <Star size={12} className="fill-yellow-900" /> Featured
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-gray-900">
              {project.title}
            </h3>
            <p className="mt-1 truncate text-xs text-gray-500">
              /{project.slug}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={() => onEdit?.(project)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={() => handleDelete?.(project._id)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-gray-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-gray-100 bg-gray-50 px-2 py-1 text-[10px] font-semibold text-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="rounded-md border border-gray-100 bg-gray-50 px-2 py-1 text-[10px] font-semibold text-gray-600">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              <ExternalLink size={14} /> Live App
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <Github size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;