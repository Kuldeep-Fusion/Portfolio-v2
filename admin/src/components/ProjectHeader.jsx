import { ArrowLeftIcon, PlusIcon } from "@animateicons/react/lucide";
import { Link } from "react-router-dom";

const ProjectHeader = () => {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d120d] p-5 sm:p-6 lg:p-8">

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(156,255,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,0,0.06) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Left */}
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#9CFF00]">
            <PlusIcon size={15} />
            Project Management
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Create Project
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
            Add a new project to your portfolio with project details,
            technologies, links and cover image.
          </p>
        </div>

        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-[#9CFF00]/40 hover:text-[#9CFF00]"
        >
          <ArrowLeftIcon size={17} />
          Back to Projects
        </Link>

      </div>
    </header>
  );
};

export default ProjectHeader;