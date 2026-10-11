import { ArrowLeftIcon, PlusIcon } from "@animateicons/react/lucide";
import { Link } from "react-router-dom";

const ProjectHeader = ({ title = "Create Project" }) => {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Left */}
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
            <PlusIcon size={15} />
            Project Management
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Add or edit a project in your portfolio with details,
            technologies, links, and a cover image.
          </p>
        </div>

        {/* Back Button */}
        <Link
          to="/admin/projects"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition hover:border-gray-300 hover:text-gray-900"
        >
          <ArrowLeftIcon size={17} />
          Back to Projects
        </Link>

      </div>
    </header>
  );
};

export default ProjectHeader;