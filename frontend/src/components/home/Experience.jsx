import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const experiences = [
  {
    number: "01",
    company: "VILLAM",
    role: "Technology Lead",
    period: "Aug 2022 — Jun 2023",
    location: "New Delhi, India",
    duration: "11 MONTHS",
    description:
      "Architected the full-stack application using React.js, Node.js, and MongoDB, enabling real-time inventory tracking and order management for 500+ SKUs.",
    technologies: ["React.js", "Node.js", "MongoDB", "Cloud"],
  },
  {
    number: "02",
    company: "SAVSHKA DIGITAL MEDIA",
    role: "Web Developer",
    period: "Nov 2023 — Feb 2024",
    location: "Noida, Uttar Pradesh, India",
    duration: "4 MONTHS",
    description:
      "Developed responsive and accessible web interfaces using HTML5, CSS3, JavaScript, and React.js while collaborating with designers and product managers.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    number: "03",
    company: "MEDISELLER",
    role: "Head of Digital Platform",
    period: "Mar 2024 — Nov 2024",
    location: "Delhi, India",
    duration: "9 MONTHS",
    description:
      "Owned the complete digital product roadmap, overseeing platform architecture, UX design, and engineering delivery for a healthcare-focused e-commerce platform.",
    technologies: ["Next.js", "MongoDB", "Shopify", "CMS"],
  },
  {
    number: "04",
    company: "SAVSHKA DIGITAL MEDIA",
    role: "Lead Web Developer — Full Stack",
    period: "Dec 2024 — PRESENT",
    location: "Noida, Uttar Pradesh, India",
    duration: "1 Year 4 Months",
    description:
      "Designing, developing, and maintaining responsive web applications and digital platforms using modern full-stack technologies while driving production-grade development and AI-assisted engineering workflows.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "JavaScript",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const isLast = index === experiences.length - 1;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        y: -8,
      }}
      viewport={{
        once: true,
        amount: 0.45,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group relative
        h-[390px]
        w-[82vw]
        max-w-[720px]
        shrink-0
        overflow-hidden
        rounded-[2px]
        border border-white/[0.08]
        bg-[#050805]/95
        shadow-[0_18px_70px_rgba(0,0,0,0.35)]
        md:h-[410px]
        md:w-[58vw]
      "
    >
      {/* HUD FRAME */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-8 w-px bg-[#9CFF00]" />

        <div className="absolute left-0 top-0 h-px w-24 bg-[#9CFF00]" />

        <div className="absolute bottom-0 right-0 h-8 w-px bg-[#9CFF00]/50" />

        <div className="absolute bottom-0 right-0 h-px w-24 bg-[#9CFF00]/50" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(156,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,0,1) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9CFF00] to-transparent opacity-60" />

        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#9CFF00]/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* CONTENT */}
      <div className="relative flex h-full flex-col justify-between p-5 md:p-7">
        {/* HEADER */}
        <div>
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              {/* EXPERIENCE NUMBER */}
              <div className="flex items-center gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.28em] text-[#9CFF00]">
                  Experience
                </span>

                <span className="text-gray-800">/</span>

                <span className="text-[8px] font-bold tracking-[0.2em] text-gray-700">
                  {experience.number}
                </span>
              </div>

              {/* POSITION */}
              <div className="mt-5">
                <span className="mb-2 block text-[8px] font-black uppercase tracking-[0.3em] text-[#9CFF00]">
                  Position
                </span>

                <h3
                  className="
                    max-w-[620px]
                    text-3xl
                    font-black
                    uppercase
                    leading-[0.9]
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-[#9CFF00]
                    md:text-5xl
                  "
                >
                  {experience.role}
                </h3>
              </div>

              {/* COMPANY */}
              <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600 md:text-xs">
                {experience.company}
              </p>
            </div>

            {/* DURATION */}
            <div className="hidden shrink-0 border border-[#9CFF00]/20 bg-[#9CFF00]/[0.04] px-3 py-2 text-right sm:block">
              <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-700">
                Duration
              </p>

              <p className="mt-1 text-[8px] font-black uppercase tracking-widest text-[#9CFF00]">
                {experience.duration}
              </p>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div>
          {/* PERIOD + LOCATION */}
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="h-px w-8 bg-[#9CFF00] shadow-[0_0_8px_rgba(156,255,0,0.7)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-gray-600">
              {experience.period}
            </span>

            <span className="text-gray-800">/</span>

            <span className="text-[8px] uppercase tracking-widest text-gray-700">
              {experience.location}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-[620px] text-xs leading-6 text-gray-500 md:text-sm md:leading-7">
            {experience.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
            {experience.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  border border-white/[0.06]
                  bg-white/[0.015]
                  px-2.5 py-1.5
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-gray-600
                  transition-all
                  duration-300
                  hover:border-[#9CFF00]/30
                  hover:bg-[#9CFF00]/[0.04]
                  hover:text-[#9CFF00]
                "
              >
                #{technology}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-3">
            <span className="text-6xl font-black leading-none text-white/[0.035] md:text-7xl">
              {experience.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />

            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-700">
              {isLast ? "Current Position" : "Career Chapter"}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);

  /* SCROLL PROGRESS */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* SMOOTH / INERTIA SCROLL */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 28,
    mass: 0.8,
  });

  /*
   * IMPORTANT:
   * Percentage based transform is used here.
   * This avoids invalid CSS calc multiplication.
   */
  const horizontalX = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "-72%"]
  );

  /* TIMELINE */
  const timelineProgress = useTransform(
    smoothProgress,
    [0, 1],
    ["8%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative h-[500vh] bg-[#020502] text-white"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* AMBIENT GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9CFF00]/5 blur-[140px]" />

        {/* SCANLINES */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 4px)",
          }}
        />

        <div className="relative w-full">
          {/* SECTION HEADER */}
          <div className="container mx-auto mb-8 px-6 md:mb-10">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em]">
              <span className="text-[#9CFF00]">03</span>

              <span className="text-gray-700">/</span>

              <span className="text-gray-500">
               3 YEAR OF EXPERIENCE 
              </span>
            </div>

            <div className="mt-4 flex items-end justify-between gap-8">
              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
                CAREER {" "}
                <span className="text-[#9CFF00]">
                   JOURNEY. 
                </span>
              </h2>

              <div className="hidden max-w-xs text-right md:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Full-Stack Developer
                </p>

                <p className="mt-2 text-[10px] leading-5 text-gray-400">
                  Scroll through each chapter of my professional journey.
                </p>
              </div>
            </div>
          </div>

          {/* HORIZONTAL RAIL */}
          <div className="relative">
            {/* BASE LINE */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.07]" />

            {/* ACTIVE LINE */}
            <motion.div
              style={{
                width: timelineProgress,
              }}
              className="
                absolute
                left-0
                top-1/2
                h-px
                -translate-y-1/2
                bg-[#9CFF00]
                shadow-[0_0_14px_rgba(156,255,0,0.8)]
              "
            />

            {/* MOVING TRACK */}
            <motion.div
              style={{
                x: horizontalX,
              }}
              className="
                flex
                w-max
                items-center
                gap-6
                pl-[9vw]
                pr-[9vw]
                will-change-transform
                md:gap-8
                md:pl-[21vw]
                md:pr-[21vw]
              "
            >
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`${experience.company}-${experience.number}`}
                  experience={experience}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          {/* BOTTOM STATUS */}
          <div className="container mx-auto mt-7 px-6 md:mt-8">
            <div className="flex items-center justify-between">
              {/* SCROLL INDICATOR */}
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-700">
                  Scroll to continue
                </span>
              </div>

              {/* YEARS */}
              <div className="flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.2em]">
                <span className="text-gray-700">
                  2022
                </span>

                <span className="h-px w-8 bg-gray-800" />

                <span className="text-[#9CFF00]">
                  PRESENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;