import {
  FaArrowRight,
  FaCode,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";
import TrueFocus from "../TrueFocus";

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      label: "BUILD",
      title: "Full-Stack",
      description: "Modern web applications",
    },
    {
      icon: FaRocket,
      label: "FOCUS",
      title: "AI + SaaS",
      description: "Intelligent digital products",
    },
    {
      icon: FaLayerGroup,
      label: "APPROACH",
      title: "Clean & Scalable",
      description: "Architecture that lasts",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-6 py-16 md:flex md:items-center md:py-10"
    >
 
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/[0.035] blur-[120px]" />

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025] [background-image:linear-gradient(rgba(132,255,0,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(132,255,0,0.6)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="mx-auto w-full max-w-7xl">

        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-lime-400">
            01.
          </span>

          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
            About
          </span>

          <div className="h-px w-16 bg-gradient-to-r from-lime-400/40 to-transparent" />

          <span className="ml-auto hidden font-mono text-[8px] uppercase tracking-[0.25em] text-gray-700 md:block">
            Developer Profile
          </span>
        </div>

        {/* ================= GAMING PANEL ================= */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#070b07]/90 px-6 py-10 shadow-[0_0_50px_rgba(132,255,0,0.03)] backdrop-blur-xl transition-all duration-500 hover:border-lime-400/20 hover:shadow-[0_0_60px_rgba(132,255,0,0.07)] md:px-10 lg:px-14">

          {/* ===== HUD CORNERS ===== */}

          {/* Top Left */}
          <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-lime-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-lime-400" />

          {/* Top Right */}
          <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-lime-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-lime-400" />

          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-lime-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-lime-400" />

          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-lime-400/50 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-lime-400" />

          {/* Small Corner Dots */}
          <span className="absolute left-3 top-3 h-1 w-1 rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]" />
          <span className="absolute right-3 top-3 h-1 w-1 rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]" />
          <span className="absolute bottom-3 left-3 h-1 w-1 rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]" />
          <span className="absolute bottom-3 right-3 h-1 w-1 rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]" />

          {/* Top HUD */}
          <div className="mb-8 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.25em]">

            <span className="text-lime-400">
              ABOUT // 01
            </span>

            <div className="flex items-center gap-2 text-gray-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
              SYSTEM ONLINE
            </div>

          </div>

          {/* Main Content */}
          <div className="relative z-10 mx-auto max-w-5xl text-center">

            {/* Big Heading */}
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-gray-600">
              Who I Am
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
               I build things
              <br />
              <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(132,255,0,0.18)]">
                that matter.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-gray-500 md:text-base md:leading-7">
              I'm a{" "}
              <span className="font-semibold text-gray-200">
                Full-Stack Developer
              </span>{" "}
               focused on building modern, scalable and AI-powered digital
              products. I enjoy turning ideas into clean interfaces,
              powerful backends and experiences people actually want to use.
            </p>

            {/* Tech Line */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "TypeScript",
                "AI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-gray-600 transition-all duration-300 hover:border-lime-400/30 hover:bg-lime-400/5 hover:text-lime-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ================= HIGHLIGHT CARDS ================= */}
          <div className="relative z-10 mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-3">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group/card relative overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-lime-400/[0.04] hover:shadow-[0_0_25px_rgba(132,255,0,0.08)]"
                >
                  {/* Hover glow */}
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-lime-400/0 blur-2xl transition-all duration-300 group-hover/card:bg-lime-400/10" />

                  <Icon className="relative h-5 w-5 text-lime-400 transition-transform duration-300 group-hover/card:scale-110" />

                  <p className="relative mt-4 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
                    {item.label}
                  </p>

                  <h3 className="relative mt-1 text-sm font-bold text-gray-200 transition-colors group-hover/card:text-lime-400">
                    {item.title}
                  </h3>

                  <p className="relative mt-1 text-[10px] text-gray-600">
                    {item.description}
                  </p>

                  {/* Bottom highlight */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-lime-400 shadow-[0_0_8px_#84ff00] transition-all duration-500 group-hover/card:w-full" />
                </div>
              );
            })}
          </div>

          {/* ================= BOTTOM ================= */}
          <div className="relative z-10 mx-auto mt-9 flex max-w-4xl flex-col items-center justify-between gap-5 border-t border-white/5 pt-6 sm:flex-row">

            {/* Stats */}
            <div className="flex items-center gap-6">

              <div>
                <span className="text-xl font-black text-lime-400">
                  15+
                </span>
                <p className="font-mono text-[7px] uppercase tracking-widest text-gray-600">
                  Projects
                </p>
              </div>

              <div className="h-8 w-px bg-white/5" />

              <div>
                <span className="text-xl font-black text-lime-400">
                  35+
                </span>
                <p className="font-mono text-[7px] uppercase tracking-widest text-gray-600">
                  Repositories
                </p>
              </div>

              <div className="h-8 w-px bg-white/5" />

              <div>
                <span className="text-xl font-black text-lime-400">
                  AI
                </span>
                <p className="font-mono text-[7px] uppercase tracking-widest text-gray-600">
                  Focus
                </p>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#projects"
              className="group/btn flex items-center gap-3 rounded-md border border-lime-400/30 bg-lime-400/5 px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-lime-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_25px_rgba(132,255,0,0.25)]"
            >
              Explore My Work

              <FaArrowRight className="transition-transform group-hover/btn:translate-x-1" />
            </a>

          </div>

          {/* Bottom HUD text */}
          <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 font-mono text-[6px] uppercase tracking-[0.4em] text-gray-800 sm:block">
            KULDEEP // FULL-STACK // BUILDER
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;