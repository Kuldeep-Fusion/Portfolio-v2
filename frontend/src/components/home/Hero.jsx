import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "@base-ui/react";
import { KineticText } from "../ui/kinetic-text";
import HeroCard from "../home/HeroCard";
import { SpinningText } from "../ui/spinning-text";

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "Next.js Engineer",
    "Backend Designer",
    "Automation Engineer",
    "API Architect",
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6">

      {/* Background HUD glow */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-lime-400/5 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-32 -z-10 h-96 w-96 rounded-full bg-green-500/5 blur-3xl" />

      <div className="grid min-h-[75vh] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

        {/* ================= CONTENT ================= */}
        <div className="relative mt-8">

          {/* Player status */}
          <div className="mb-8 inline-flex items-center gap-3 rounded border border-lime-400/30 bg-lime-400/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-lime-400 shadow-[0_0_20px_rgba(132,255,0,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]" />
            </span>

            Available for Full-Time Work

            <span className="text-lime-500">↗</span>
          </div>

          {/* Heading */}
          <div className="relative">
            <KineticText
              text="Kuldeep"
              className="mb-[-1.5rem] p-0 text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-8xl lg:text-[7rem]"
            />

            <KineticText
              text="Kumar"
              className="text-6xl font-black uppercase leading-none tracking-[-0.05em] text-lime-400 drop-shadow-[0_0_18px_rgba(132,255,0,0.25)] md:text-8xl lg:text-[7rem]"
            />

          </div>

          {/* Role */}
          <div className="mt-8 flex flex-wrap items-center gap-3 font-bold md:text-4xl">
            <span className="text-gray-400">I AM A</span>

            <TypingAnimation
              words={roles}
              cursorStyle="line"
              loop
              className="text-2xl font-black uppercase text-lime-400 drop-shadow-[0_0_10px_rgba(132,255,0,0.3)] md:text-4xl"
            />
          </div>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
            Full-Stack MERN + Next.js developer building{" "}
            <span className="font-bold text-lime-400">
              AI-powered SaaS applications
            </span>{" "}
            using OpenAI, Claude, and Gemini.
          </p>

          {/* Stats */}
          {/* <div className="mt-7 flex flex-wrap gap-3">
            <div className="border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="font-mono text-lg font-bold text-lime-400">
                03+
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-gray-600">
                Live Apps
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="font-mono text-lg font-bold text-lime-400">
                AI
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-gray-600">
                Powered
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="font-mono text-lg font-bold text-lime-400">
                24/7
              </div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-gray-600">
                Automation
              </div>
            </div>
          </div> */}

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">

            <button className="group relative overflow-hidden border border-lime-400 bg-lime-400 px-7 py-3.5 text-xs font-black uppercase tracking-[0.15em] text-black shadow-[0_0_20px_rgba(132,255,0,0.2)] transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(132,255,0,0.4)]">
              <span className="relative z-10">
                View My Work
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-300 group-hover:translate-x-0" />
            </button>

            <Button className="border border-white/15 bg-white/[0.03] px-7 py-3.5 text-xs font-black uppercase tracking-[0.15em] text-gray-300 transition-all hover:border-lime-400/50 hover:bg-lime-400/5 hover:text-lime-400">
              Contact Me
            </Button>

          </div>
        </div>

        {/* ================= VISUAL ================= */}
              <HeroCard />
      </div>
 <div className=" flex w-full justify-center">
  <div className="relative flex h-28 w-28 items-center justify-center">

    <div className="absolute inset-0 rounded-full bg-lime-400/10 blur-xl" />

    <SpinningText className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-lime-400">
      scroll down • explore more •
    </SpinningText>

    <div className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/30 bg-[#080d08] shadow-[0_0_15px_rgba(132,255,0,0.15)]">
      <span className="animate-bounce text-lg text-lime-400">
        ↓
      </span>
    </div>

  </div>
</div>

      {/* Bottom scanline */}
      
    </section>
  );
};

export default Hero;