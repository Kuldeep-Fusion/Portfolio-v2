import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GetAllProjects } from "../../services/api";


const ProjectCard = ({ project, index }) => {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="
        group
        relative
        overflow-hidden
        border
        border-[#9CFF00]/20
        bg-[#050905]
        shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        transition-all
        duration-500
        hover:border-[#9CFF00]/50
        hover:shadow-[0_0_40px_rgba(156,255,0,0.12)]
        flex
        flex-col
      "
    >
      {/* =================================================
          HUD FRAME
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 z-30">
        {/* Corners */}
        <div className="absolute left-3 top-3 h-6 w-6 border-l border-t border-[#9CFF00] transition-all duration-300 group-hover:h-8 group-hover:w-8" />
        <div className="absolute right-3 top-3 h-6 w-6 border-r border-t border-[#9CFF00] transition-all duration-300 group-hover:h-8 group-hover:w-8" />
        <div className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-[#9CFF00] transition-all duration-300 group-hover:h-8 group-hover:w-8" />
        <div className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-[#9CFF00] transition-all duration-300 group-hover:h-8 group-hover:w-8" />

        {/* Top glowing line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9CFF00] to-transparent opacity-70 shadow-[0_0_12px_#9CFF00]" />

        {/* Scanlines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 4px)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(156,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,0,1) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="relative h-[200px] overflow-hidden border-b border-[#9CFF00]/10">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9CFF00]/10 blur-[70px]" />

        {/* Image */}
        <img
          src={project?.image?.url || project?.image || ''}
          alt={project?.title || 'Project'}
          className="relative h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020502] via-transparent to-transparent" />

        {/* Project Number bg */}
        <div className="absolute bottom-2 left-3 z-20 select-none text-[64px] font-black leading-none tracking-[-0.08em] text-white/[0.07]">
          {project?.number || `0${index + 1}`}
        </div>

        {/* Number label */}
        <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
          <span className="h-px w-5 bg-[#9CFF00]" />
          <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#9CFF00]">
            Project {project?.number || `0${index + 1}`}
          </span>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 right-4 z-20 max-w-[50%] truncate border border-[#9CFF00]/30 bg-black/75 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[0.14em] text-[#9CFF00] backdrop-blur-md">
          {project.category}
        </div>

        {/* Status */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 border border-[#9CFF00]/20 bg-black/75 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[0.16em] text-[#9CFF00] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
          {project.status}
        </div>
      </div>

      {/* =================================================
          PROJECT INFO
      ================================================= */}

      <div className="relative z-10 flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Project identifier */}
          <div className="flex items-center gap-2">
            <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#9CFF00]">
              Project
            </span>
            <span className="text-gray-800">/</span>
            <span className="text-[7px] font-bold tracking-[0.2em] text-gray-600">
              {project.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-2.5 text-xl font-black uppercase leading-[0.92] tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[#9CFF00]">
            {project?.title || 'Project Title'}
          </h3>

          {/* Divider */}
          <div className="my-4 h-px w-full bg-[#9CFF00]/10" />

          {/* Description */}
          <p className="text-[11px] leading-5 text-gray-500">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-4">
            <p className="mb-2.5 text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600">
              Built With
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(project?.technologies || []).map((technology) => (
                <span
                  key={technology}
                  className="
                    border
                    border-[#9CFF00]/15
                    bg-[#9CFF00]/[0.04]
                    px-2
                    py-1
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-gray-400
                    transition-all
                    duration-300
                    hover:border-[#9CFF00]/50
                    hover:text-[#9CFF00]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="mt-5 flex items-center gap-3">
          <a
            href={project?.links?.live || project?.live || "#"}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              min-h-[40px]
              flex-1
              items-center
              justify-center
              gap-2
              bg-[#9CFF00]
              px-4
              py-2
              text-[8px]
              font-black
              uppercase
              tracking-[0.15em]
              text-black
              transition-all
              duration-300
              hover:shadow-[0_0_25px_rgba(156,255,0,0.4)]
              hover:scale-[1.02]
            "
          >
            Live App
            <span>↗</span>
          </a>

          <a
            href={project?.links?.github || project?.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              min-h-[40px]
              flex-1
              items-center
              justify-center
              gap-2
              border
              border-[#9CFF00]/40
              bg-[#9CFF00]/10
              px-4
              py-2
              text-[8px]
              font-black
              uppercase
              tracking-[0.15em]
              text-[#9CFF00]
              transition-all
              duration-300
              hover:bg-[#9CFF00]/20
              hover:border-[#9CFF00]/80
              hover:shadow-[0_0_20px_rgba(156,255,0,0.15)]
              hover:scale-[1.02]
            "
          >
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>

    </motion.article>
  );
};


const Project = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await GetAllProjects();
        if (res?.data && Array.isArray(res.data)) {
          setProjectsData(res.data);
        } else if (res && Array.isArray(res)) {
          setProjectsData(res);
        }
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-[#020502] py-20 text-white sm:py-28 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#9CFF00]/4 blur-[130px]" />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 sm:mb-16"
        >
          {/* Section Label */}
          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.25em] sm:gap-3 sm:text-[9px] sm:tracking-[0.3em]">
            <span className="text-[#9CFF00]">02</span>
            <span className="text-gray-700">/</span>
            <span className="text-gray-500">PROJECTS</span>
          </div>

          {/* Heading */}
          <h2 className="mt-2 text-3xl font-black uppercase leading-[0.86] tracking-[-0.05em] sm:mt-3 sm:text-5xl md:text-6xl lg:text-7xl">
            SELECTED{" "}
            <span className="text-[#9CFF00]">WORK.</span>
          </h2>

          {/* Subline */}
          <div className="mt-4 flex items-center gap-3">
            <div className="h-px w-8 bg-[#9CFF00]/50" />
            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-600">
              {projectsData.length} Projects
            </span>
          </div>
        </motion.div>

        {/* =================================================
            GRID
        ================================================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-[#9CFF00]">
              <div className="text-sm font-bold uppercase tracking-[0.2em] animate-pulse">Initializing Datalink...</div>
            </div>
          ) : (
            projectsData.map((project, index) => (
              <ProjectCard key={project._id || project.id || index} project={project} index={index} />
            ))
          )}
        </div>

        {/* =================================================
            BOTTOM HUD
        ================================================= */}

        <div className="mt-12 flex items-center justify-between sm:mt-16">
          {/* Scroll indicator */}
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]"
            />
            <span className="hidden text-[7px] font-bold uppercase tracking-[0.2em] text-gray-700 xs:block sm:text-[8px]">
              View All Projects
            </span>
          </div>

          {/* Count */}
          <div className="flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.15em] sm:gap-3 sm:text-[8px]">
            <span className="text-gray-700">0{projectsData.length}</span>
            <span className="h-px w-5 bg-gray-800 sm:w-8" />
            <span className="text-[#9CFF00]">PROJECTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;