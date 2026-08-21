import { FaGithub, FaCode, FaStar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdCheckmarkCircle } from "react-icons/io";

import image from "../../assets/kuldeep.png";

const HeroCard = () => {
  return (
    <div className="relative mx-auto w-full max-w-[350px] mt-10">

      {/* Ambient Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-lime-400/10 blur-3xl" />

      {/* Main Card */}
      <div className="relative overflow-hidden rounded-2xl border border-lime-400/20 bg-[#080d08]/95 p-3 shadow-[0_0_50px_rgba(132,255,0,0.08)] backdrop-blur-xl">

        {/* Top Neon Line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent shadow-[0_0_10px_#84ff00]" />


        {/* Profile Image */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black">

          <img
            src={image}
            alt="Kuldeep Kumar - Full Stack Developer"
            className="h-[320px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
          />

          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030603] via-transparent to-transparent" />

          {/* Subtle Green Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-lime-400/[0.025] mix-blend-screen" />

          {/* Scanlines */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(132,255,0,0.3)_4px)]" />

          {/* Corner Decorations */}
          <div className="absolute left-3 top-3 h-7 w-7 border-l border-t border-lime-400/60" />
          <div className="absolute right-3 top-3 h-7 w-7 border-r border-t border-lime-400/60" />

          <div className="absolute bottom-3 left-3 h-7 w-7 border-b border-l border-lime-400/60" />
          <div className="absolute bottom-3 right-3 h-7 w-7 border-b border-r border-lime-400/60" />

          {/* Available Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded border border-lime-400/25 bg-black/70 px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-widest text-lime-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_7px_#84ff00]" />
            Open to Work
          </div>

        </div>

        {/* Location / Status */}
        <div className="mt-3 grid grid-cols-2 gap-3">

          {/* Location */}
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
              Location
            </p>

            <div className="mt-2 flex items-center gap-2">
              <HiOutlineLocationMarker className="h-4 w-4 text-lime-400" />

              <span className="text-sm font-semibold text-gray-200">
                India
              </span>
            </div>
          </div>

          {/* Status */}
          <div className="rounded-lg border border-lime-400/10 bg-lime-400/[0.02] p-3">
            <p className="text-right font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
              Status
            </p>

            <div className="mt-2 flex items-center justify-end gap-2">
              <IoMdCheckmarkCircle className="h-4 w-4 text-lime-400 drop-shadow-[0_0_5px_#84ff00]" />

              <span className="text-xs font-bold text-lime-400">
                AVAILABLE
              </span>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="mt-3 grid grid-cols-3 gap-2">

          {/* Projects */}
          <div className="group rounded-lg border border-white/5 bg-white/[0.025] px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.04] hover:shadow-[0_0_15px_rgba(132,255,0,0.08)]">

            <FaCode className="mx-auto h-4 w-4 text-lime-400 transition-transform group-hover:scale-110" />

            <p className="mt-2 font-mono text-[8px] font-bold tracking-widest text-gray-600">
              PROJECTS
            </p>

            <p className="mt-1 text-lg font-black text-white">
              15<span className="text-lime-400">+</span>
            </p>
          </div>

          {/* GitHub */}
          <div className="group rounded-lg border border-white/5 bg-white/[0.025] px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.04] hover:shadow-[0_0_15px_rgba(132,255,0,0.08)]">

            <FaGithub className="mx-auto h-4 w-4 text-lime-400 transition-transform group-hover:scale-110" />

            <p className="mt-2 font-mono text-[8px] font-bold tracking-widest text-gray-600">
              GITHUB
            </p>

            <p className="mt-1 text-lg font-black text-white">
              35<span className="text-lime-400">+</span>
            </p>
          </div>

          {/* Year */}
          <div className="group rounded-lg border border-white/5 bg-white/[0.025] px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/[0.04] hover:shadow-[0_0_15px_rgba(132,255,0,0.08)]">

            <FaStar className="mx-auto h-4 w-4 text-lime-400 transition-transform group-hover:scale-110" />

            <p className="mt-2 font-mono text-[8px] font-bold tracking-widest text-gray-600">
              SINCE
            </p>

            <p className="mt-1 text-lg font-black text-white">
              2026
            </p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default HeroCard;