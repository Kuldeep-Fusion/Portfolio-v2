import { useRef } from "react";
import { motion, useInView } from "motion/react";

const experiences = [
  {
    number: "01",
    company: "VILLAM",
    role: "Technology Lead",
    period: "Aug 2022 — Jun 2023",
    location: "New Delhi, India",
    duration: "11 MONTHS",
    year: "2022",
    description:
      "Led the development of a full-stack commerce platform using React.js, Node.js, and MongoDB, with a focus on scalable architecture, real-time inventory tracking, and streamlined order management across 500+ SKUs.",
    technologies: ["React.js", "Node.js", "MongoDB", "Cloud"],
  },

  {
    number: "02",
    company: "SAVSHKA DIGITAL MEDIA",
    role: "Web Developer",
    period: "Nov 2023 — Feb 2024",
    location: "Noida, Uttar Pradesh, India",
    duration: "4 MONTHS",
    year: "2023",
    description:
      "Developed responsive, accessible, and performance-focused web interfaces using modern frontend technologies. Collaborated closely with designers and product teams to translate requirements into production-ready experiences.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },

  {
    number: "03",
    company: "MEDISELLER",
    role: "Head of Digital Platform",
    period: "Mar 2024 — Nov 2024",
    location: "Delhi, India",
    duration: "9 MONTHS",
    year: "2024",
    description:
      "Led the digital platform strategy and development for a healthcare-focused e-commerce business, overseeing product architecture, user experience, platform operations, and engineering delivery across the digital ecosystem.",
    technologies: ["Next.js", "MongoDB", "Shopify", "CMS"],
  },

  {
    number: "04",
    company: "SAVSHKA DIGITAL MEDIA",
    role: "Lead Web Developer — Full Stack",
    period: "Dec 2024 — Present",
    location: "Noida, Uttar Pradesh, India",
    duration: "CURRENT",
    year: "2024 — PRESENT",
    description:
      "Leading the development of modern, scalable web applications and digital platforms using Next.js, JavaScript, MongoDB, Tailwind CSS, and REST APIs. Driving production-grade engineering practices, performance optimization, and AI-assisted development workflows.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "JavaScript",
    ],
    isCurrent: true,
  },
];

/* =========================================================
   TIMELINE ITEM
========================================================= */

const TimelineItem = ({ experience, index }) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <div ref={ref} className="relative flex items-start gap-0">
      {/* =====================================================
          LEFT — YEAR
      ===================================================== */}

      <div className="hidden w-[160px] shrink-0 pr-6 pt-6 text-right md:block">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.45,
            delay: 0.1,
          }}
        >
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#9CFF00]">
            {experience.year}
          </span>

          <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-gray-700">
            {experience.duration}
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          CENTER — TIMELINE
      ===================================================== */}

      <div className="relative flex shrink-0 flex-col items-center">
        {/* Top connector */}
        {index > 0 ? (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-px origin-top bg-[#9CFF00]/25"
            style={{ height: "32px" }}
          />
        ) : (
          <div style={{ height: "32px" }} />
        )}

        {/* Timeline dot */}
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={
            inView
              ? {
                scale: 1,
                opacity: 1,
              }
              : {}
          }
          transition={{
            duration: 0.35,
            delay: 0.15,
          }}
          className="relative z-10 flex h-8 w-8 items-center justify-center"
        >
          {experience.isCurrent ? (
            <>
              <span className="absolute h-8 w-8 animate-ping rounded-full bg-[#9CFF00]/20" />

              <span className="h-3 w-3 rounded-full bg-[#9CFF00] shadow-[0_0_12px_#9CFF00]" />
            </>
          ) : (
            <span className="h-2.5 w-2.5 rounded-full border-2 border-[#9CFF00] bg-[#020502] shadow-[0_0_8px_rgba(156,255,0,0.5)]" />
          )}
        </motion.div>

        {/* Bottom connector */}
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="w-px flex-1 origin-top bg-[#9CFF00]/25"
            style={{ minHeight: "40px" }}
          />
        )}
      </div>

      {/* =====================================================
          RIGHT — EXPERIENCE CARD
      ===================================================== */}

      <motion.article
        initial={{
          opacity: 0,
          x: 24,
        }}
        animate={
          inView
            ? {
              opacity: 1,
              x: 0,
            }
            : {}
        }
        transition={{
          duration: 0.5,
          delay: 0.05,
          ease: "easeOut",
        }}
        className="
          group
          relative
          mb-10
          ml-5
          flex-1
          overflow-hidden
          border
          border-[#9CFF00]/15
          bg-[#050905]/90
          shadow-[0_8px_40px_rgba(0,0,0,0.4)]
          transition-all
          duration-500
          hover:border-[#9CFF00]/40
          hover:shadow-[0_0_30px_rgba(156,255,0,0.08)]
          md:ml-6
        "
      >
        {/* ===================================================
            HUD FRAME
        =================================================== */}

        <div className="pointer-events-none absolute inset-0 z-10">
          {/* Top left */}
          <div className="absolute left-0 top-0 h-6 w-px bg-[#9CFF00]" />

          <div className="absolute left-0 top-0 h-px w-16 bg-[#9CFF00]" />

          {/* Bottom right */}
          <div className="absolute bottom-0 right-0 h-6 w-px bg-[#9CFF00]/40" />

          <div className="absolute bottom-0 right-0 h-px w-16 bg-[#9CFF00]/40" />

          {/* Top gradient */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9CFF00]/50 to-transparent" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(156,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,0,1) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Hover glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#9CFF00]/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* ===================================================
            CARD CONTENT
        =================================================== */}

        <div className="relative z-20 p-5 sm:p-6 md:p-7">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4">
            {/* Role + Company */}
            <div className="min-w-0">
              {/* Experience label */}
              <div className="flex items-center gap-2">
                <span className="text-[7px] font-black uppercase tracking-[0.28em] text-[#9CFF00]">
                  Professional Experience
                </span>

                <span className="text-gray-800">/</span>

                <span className="text-[7px] font-bold tracking-[0.2em] text-gray-700">
                  {experience.number}
                </span>
              </div>

              {/* Role */}
              <h3
                className="
                  mt-3
                  text-xl
                  font-black
                  uppercase
                  leading-[0.95]
                  tracking-tight
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#9CFF00]
                  sm:text-2xl
                  md:text-3xl
                "
              >
                {experience.role}
              </h3>

              {/* Company */}
              <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.22em] text-gray-500">
                {experience.company}
              </p>
            </div>

            {/* Duration */}
            <div className="hidden shrink-0 border border-[#9CFF00]/20 bg-[#9CFF00]/[0.04] px-3 py-2.5 text-right sm:block">
              <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-700">
                Duration
              </p>

              <p className="mt-1 text-[7px] font-black uppercase tracking-widest text-[#9CFF00]">
                {experience.duration}
              </p>

              {experience.isCurrent && (
                <div className="mt-1.5 flex items-center justify-end gap-1">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-[#9CFF00] shadow-[0_0_6px_#9CFF00]" />

                  <span className="text-[6px] font-bold uppercase tracking-widest text-[#9CFF00]">
                    Currently Active
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-[#9CFF00]/10" />

          {/* Mobile year */}
          <div className="flex flex-wrap items-center gap-2 md:hidden">
            <span className="text-[7px] font-black uppercase tracking-widest text-[#9CFF00]">
              {experience.year}
            </span>

            <span className="text-gray-800">/</span>

            <span className="text-[7px] font-bold uppercase tracking-widest text-gray-600">
              {experience.duration}
            </span>
          </div>

          {/* Period + Location */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="h-px w-6 bg-[#9CFF00] shadow-[0_0_6px_rgba(156,255,0,0.7)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-gray-500">
              {experience.period}
            </span>

            <span className="text-gray-800">/</span>

            <span className="text-[8px] uppercase tracking-widest text-gray-700">
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-3xl text-[11px] leading-6 text-gray-500 sm:text-xs sm:leading-7">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.05] pt-4">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  border
                  border-white/[0.06]
                  bg-white/[0.015]
                  px-2
                  py-1
                  text-[6px]
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
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

const Experience = () => {
  const headingRef = useRef(null);

  const inView = useInView(headingRef, {
    once: true,
    margin: "-60px",
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020502] py-20 text-white sm:py-28 md:py-32"
    >
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-[#9CFF00]/[0.04] blur-[120px]" />

      {/* =====================================================
          SCANLINES
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          ref={headingRef}
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={
            inView
              ? {
                opacity: 1,
                y: 0,
              }
              : {}
          }
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="mb-14 sm:mb-16"
        >
          {/* Section indicator */}
          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.25em] sm:gap-3 sm:text-[9px]">
            <span className="text-[#9CFF00]">03</span>

            <span className="text-gray-700">/</span>

            <span className="text-gray-500">
              FULL-STACK DEVELOPMENT · 2022 — PRESENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-3xl font-black uppercase leading-[0.86] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
            PROFESSIONAL{" "}
            <span className="text-[#9CFF00]">EXPERIENCE.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 sm:text-[11px]">
            Full-Stack Developer · Web Engineering · Scalable Digital
            Experiences
          </p>
        </motion.div>

        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div className="md:pl-0">
          <div className="relative md:ml-[160px]">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${experience.number}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-4 flex items-center justify-between">
          {/* Status */}
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

            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-gray-700">
              Career Timeline
            </span>
          </div>

          {/* Timeline range */}
          <div className="flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.15em] sm:gap-3 sm:text-[8px]">
            <span className="text-gray-700">2022</span>

            <span className="h-px w-6 bg-gray-800 sm:w-10" />

            <span className="text-[#9CFF00]">PRESENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;