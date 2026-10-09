import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import StickyButton from "../components/home/SticyButton";
import { GetProjectById } from "../services/api";

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const res = await GetProjectById(id);
        // Assuming backend returns project inside data.data or data.project
        setProject(res?.data || res?.project || res);
        console.log(res);
      } catch (err) {
        setError("Failed to load project details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020502] text-[#9CFF00] flex flex-col items-center justify-center font-sans gap-4">
        <div className="text-xl font-bold uppercase tracking-[0.2em] animate-pulse">Initializing Datalink...</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[#020502] text-red-500 flex flex-col items-center justify-center font-sans gap-6">
        <div className="text-2xl font-black uppercase tracking-[0.2em]">{error || "Project Not Found"}</div>
        <Link to="/#projects" className="border border-[#9CFF00]/30 bg-[#9CFF00]/5 px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#9CFF00] transition-all hover:bg-[#9CFF00]/10 hover:border-[#9CFF00]/60">
          Return to Projects ↗
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020502] text-white flex flex-col font-sans">
      <Navbar />
      <StickyButton />

      <main className="flex-grow pt-24 pb-16 relative">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#9CFF00]/10 blur-[130px]" />

        {/* Scanlines */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 4px)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 sm:mb-16"
          >
            {/* Breadcrumbs / Status */}
            <div className="flex items-center gap-2 mb-6">
              <Link to="/#projects" className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#9CFF00] transition-colors">
                BACK TO PROJECTS
              </Link>
              <span className="text-gray-700">/</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9CFF00]">
                {project.number}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 border border-[#9CFF00]/20 bg-black/75 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#9CFF00] backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
                    {project.status}
                  </div>
                  <div className="border border-[#9CFF00]/30 bg-black/75 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#9CFF00] backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                  {project.title.split(' ')[0]} <br />
                  <span className="text-[#9CFF00]">
                    {project.title.substring(project.title.indexOf(' ') + 1)}
                  </span>
                </h1>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:min-w-[300px]">
                <a
                  href={project?.links?.live || project?.live || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 inline-flex items-center justify-center gap-3
                    bg-[#9CFF00] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-black
                    transition-all duration-300 hover:shadow-[0_0_30px_rgba(156,255,0,0.4)] hover:scale-[1.02]
                  "
                >
                  Visit Live Site
                  <span>↗</span>
                </a>
                <a
                  href={project?.links?.github || project?.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1 inline-flex items-center justify-center gap-3
                    border border-[#9CFF00]/30 bg-[#9CFF00]/5 px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#9CFF00]
                    transition-all duration-300 hover:bg-[#9CFF00]/10 hover:border-[#9CFF00]/60 hover:scale-[1.02]
                  "
                >
                  Source Code
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-video md:aspect-[21/9] mb-16 lg:mb-24 overflow-hidden border border-[#9CFF00]/20 bg-[#050905] shadow-[0_8px_40px_rgba(0,0,0,0.5)] group"
          >
            {/* Corners */}
            <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[#9CFF00] z-20" />
            <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-[#9CFF00] z-20" />
            <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#9CFF00] z-20" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#9CFF00] z-20" />

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020502] via-transparent to-transparent opacity-80" />

            <img
              src={project?.image?.url || project?.image || ''}
              alt={project?.title || 'Project'}
              className="relative w-full h-full object-cover opacity-80 transition-transform duration-[2000ms] group-hover:scale-105"
            />

            {/* HUD Overlay */}
            <div className="absolute bottom-6 left-6 z-20 hidden md:block">
              <div className="flex flex-col gap-1">
                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#9CFF00]">DATALINK // ESTABLISHED</span>
                <span className="text-[7px] font-bold tracking-[0.2em] text-gray-500">SYS.VER_2.4.1</span>
              </div>
            </div>
          </motion.div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Left Column: Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-8 space-y-8"
            >
              <div>
                <h3 className="flex items-center gap-4 text-xl font-black uppercase tracking-[0.1em] text-white mb-6">
                  <span className="w-10 h-px bg-[#9CFF00]" />
                  Project Overview
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-400">
                  {project?.longDescription || project?.description || ''}
                </p>
              </div>

              <div className="p-6 border border-[#9CFF00]/10 bg-gradient-to-br from-[#9CFF00]/[0.02] to-transparent relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#9CFF00]/50" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">Key Features</h4>
                <ul className="space-y-3">
                  {["Real-time data synchronization across all clients", "Optimized performance and load times", "Responsive, mobile-first design architecture"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-[#9CFF00] mt-1">▹</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Metadata */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="border border-[#9CFF00]/20 bg-[#050905] p-8 space-y-8">

                {/* Tech Stack */}
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(project?.technologies || []).map(tech => (
                      <span key={tech} className="border border-[#9CFF00]/20 bg-[#9CFF00]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#9CFF00]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-[#9CFF00]/10" />

                {/* Role */}
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-2">Role</h4>
                  <p className="text-sm font-bold tracking-wider text-white uppercase">{project?.role || 'Developer'}</p>
                </div>

                {/* Year */}
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 mb-2">Year</h4>
                  <p className="text-sm font-bold tracking-wider text-white">{project?.year || '2024'}</p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SingleProject;