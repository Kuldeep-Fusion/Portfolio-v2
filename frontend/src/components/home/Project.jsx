import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const projects = [
  {
    number: "01",
    title: "AI SaaS Platform",
    category: "AI / SAAS",
    status: "LIVE",
    description:
      "AI-powered SaaS platform built to automate workflows, generate intelligent content and improve productivity using modern LLM APIs.",
    technologies: ["Next.js", "OpenAI", "MongoDB", "Tailwind"],
    image: "/projects/ai-saas.png",
    live: "#",
    github: "#",
  },
  {
    number: "02",
    title: "Developer Dashboard",
    category: "WEB APPLICATION",
    status: "LIVE",
    description:
      "Modern developer dashboard with analytics, reusable components and responsive interfaces.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/projects/dashboard.png",
    live: "#",
    github: "#",
  },
  {
    number: "03",
    title: "Automation Engine",
    category: "BACKEND / API",
    status: "LIVE",
    description:
      "Backend automation system connecting APIs, processing data and executing automated workflows.",
    technologies: ["Node.js", "Express", "REST API"],
    image: "/projects/automation.png",
    live: "#",
    github: "#",
  },
  {
    number: "04",
    title: "E-Commerce Platform",
    category: "FULL STACK",
    status: "LIVE",
    description:
      "Production-ready e-commerce platform with product management, responsive UI, secure APIs and scalable backend architecture.",
    technologies: ["Next.js", "MongoDB", "REST API", "Tailwind"],
    image: "/projects/ecommerce.png",
    live: "#",
    github: "#",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
  project,
  index,
  totalProjects,
  scrollProgress,
}) => {
  const start = index / totalProjects;
  const end = (index + 1) / totalProjects;

  const previous = Math.max(0, start - 0.08);
  const current = start;
  const next = Math.min(1, end);

  /* CARD Y */
  const y = useTransform(
    scrollProgress,
    [previous, current, next],
    [
      60,
      0,
      index === totalProjects - 1 ? 0 : -45,
    ]
  );

  /* CARD SCALE */
  const scale = useTransform(
    scrollProgress,
    [previous, current, next],
    [
      index === 0 ? 1 : 0.94,
      1,
      index === totalProjects - 1 ? 1 : 0.92,
    ]
  );

  /* CARD OPACITY */
  const opacity = useTransform(
    scrollProgress,
    [previous, current, next],
    [
      index === 0 ? 1 : 0,
      1,
      index === totalProjects - 1 ? 1 : 0,
    ]
  );

  /* SMALL ROTATION */
  const rotate = useTransform(
    scrollProgress,
    [previous, current, next],
    [
      index % 2 === 0 ? -1 : 1,
      0,
      index === totalProjects - 1
        ? 0
        : index % 2 === 0
        ? 1
        : -1,
    ]
  );

  /* IMAGE ZOOM */
  const imageScale = useTransform(
    scrollProgress,
    [current, next],
    [1, 1.05]
  );

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        rotate,
        zIndex: totalProjects - index,
      }}
      className="
        absolute
        left-1/2
        top-0
        w-[calc(100vw-24px)]
        h-[590px]
        -translate-x-1/2
        overflow-hidden
        border
        border-[#9CFF00]/20
        bg-[#050905]
        shadow-[0_25px_80px_rgba(0,0,0,0.6)]
        will-change-transform

        xs:w-[calc(100vw-28px)]

        sm:w-[calc(100vw-50px)]
        sm:h-[540px]

        md:w-[calc(100vw-100px)]
        md:h-[500px]

        lg:max-w-6xl
      "
    >
      {/* =================================================
          HUD FRAME
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 z-30">
        {/* Corners */}

        <div className="absolute left-3 top-3 h-7 w-7 border-l border-t border-[#9CFF00] sm:left-4 sm:top-4 sm:h-9 sm:w-9" />

        <div className="absolute right-3 top-3 h-7 w-7 border-r border-t border-[#9CFF00] sm:right-4 sm:top-4 sm:h-9 sm:w-9" />

        <div className="absolute bottom-3 left-3 h-7 w-7 border-b border-l border-[#9CFF00] sm:bottom-4 sm:left-4 sm:h-9 sm:w-9" />

        <div className="absolute bottom-3 right-3 h-7 w-7 border-b border-r border-[#9CFF00] sm:bottom-4 sm:right-4 sm:h-9 sm:w-9" />

        {/* Top glowing line */}

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9CFF00] to-transparent shadow-[0_0_12px_#9CFF00]" />

        {/* Scanlines */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 4px)",
          }}
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(156,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,0,1) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 grid h-full md:grid-cols-[1.08fr_0.92fr]">

        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            h-[220px]
            overflow-hidden
            border-b
            border-[#9CFF00]/10

            sm:h-[235px]

            md:h-full
            md:border-b-0
            md:border-r
          "
        >
          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9CFF00]/10 blur-[80px] sm:h-64 sm:w-64" />

          {/* Image */}

          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              scale: imageScale,
            }}
            className="
              relative
              h-full
              w-full
              object-cover
              opacity-70
              will-change-transform
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#020502] via-transparent to-transparent" />

          {/* =================================================
              PROJECT NUMBER
          ================================================= */}

          <div
            className="
              absolute
              bottom-2
              left-3
              z-20
              select-none
              text-[64px]
              font-black
              leading-none
              tracking-[-0.08em]
              text-white/[0.08]

              sm:bottom-3
              sm:left-4
              sm:text-[80px]

              md:bottom-5
              md:left-5
              md:text-[120px]
            "
          >
            {project.number}
          </div>

          {/* Number label */}

          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 sm:bottom-5 sm:left-5">
            <span className="h-px w-5 bg-[#9CFF00] sm:w-6" />

            <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#9CFF00] sm:text-[8px] sm:tracking-[0.25em]">
              Project {project.number}
            </span>
          </div>

          {/* Category */}

          <div
            className="
              absolute
              bottom-4
              right-4
              z-20
              max-w-[45%]
              truncate
              border
              border-[#9CFF00]/30
              bg-black/75
              px-2.5
              py-1.5
              text-[7px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#9CFF00]
              backdrop-blur-md

              sm:bottom-5
              sm:right-5
              sm:px-3
              sm:py-2
              sm:text-[8px]
            "
          >
            {project.category}
          </div>

          {/* Status */}

          <div
            className="
              absolute
              left-4
              top-4
              z-20
              flex
              items-center
              gap-1.5
              border
              border-[#9CFF00]/20
              bg-black/75
              px-2.5
              py-1.5
              text-[7px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#9CFF00]
              backdrop-blur-md

              sm:px-3
              sm:py-2
              sm:text-[8px]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />

            {project.status}
          </div>
        </div>

        {/* =================================================
            PROJECT INFO
        ================================================= */}

        <div
          className="
            flex
            min-h-0
            flex-col
            justify-between
            p-4

            sm:p-6

            md:p-7
            lg:p-8
          "
        >
          <div>

            {/* Project identifier */}

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#9CFF00] sm:text-[8px] sm:tracking-[0.3em]">
                Project
              </span>

              <span className="text-gray-800">
                /
              </span>

              <span className="text-[7px] font-bold tracking-[0.2em] text-gray-600 sm:text-[8px] sm:tracking-[0.25em]">
                {project.number}
              </span>
            </div>

            {/* Title */}

            <h3
              className="
                mt-3
                max-w-[500px]
                text-2xl
                font-black
                uppercase
                leading-[0.92]
                tracking-[-0.035em]
                text-white

                sm:mt-4
                sm:text-3xl

                md:text-4xl

                lg:text-5xl
              "
            >
              {project.title}
            </h3>

            {/* Divider */}

            <div className="my-4 h-px w-full bg-[#9CFF00]/10 sm:my-5 md:my-6" />

            {/* Description */}

            <p
              className="
                max-w-xl
                text-[11px]
                leading-5
                text-gray-500

                sm:text-xs
                sm:leading-6

                md:text-sm
                md:leading-7
              "
            >
              {project.description}
            </p>

            {/* Technologies */}

            <div className="mt-4 sm:mt-5 md:mt-6">

              <p className="mb-2.5 text-[7px] font-bold uppercase tracking-[0.2em] text-gray-600 sm:mb-3 sm:text-[8px] sm:tracking-[0.25em]">
                Built With
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      border
                      border-[#9CFF00]/15
                      bg-[#9CFF00]/[0.04]
                      px-2
                      py-1.5
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-gray-400
                      transition-all
                      duration-300

                      sm:px-2.5
                      sm:text-[8px]

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

          <div
            className="
              mt-4
              flex
              w-full
              items-center
              gap-2

              sm:mt-5
              sm:gap-3

              md:flex-wrap
            "
          >
            <a
              href={project.live}
              className="
                inline-flex
                min-h-[38px]
                flex-1
                items-center
                justify-center
                gap-2
                bg-[#9CFF00]
                px-3
                py-2.5
                text-[7px]
                font-black
                uppercase
                tracking-[0.15em]
                text-black
                transition-all
                duration-300

                sm:min-h-[42px]
                sm:flex-none
                sm:px-5
                sm:py-3
                sm:text-[8px]
                sm:tracking-widest

                hover:shadow-[0_0_25px_rgba(156,255,0,0.35)]
              "
            >
              View Live
              <span>↗</span>
            </a>

            <a
              href={project.github}
              className="
                inline-flex
                min-h-[38px]
                flex-1
                items-center
                justify-center
                gap-2
                border
                border-white/10
                px-3
                py-2.5
                text-[7px]
                font-black
                uppercase
                tracking-[0.15em]
                text-gray-400
                transition-all
                duration-300

                sm:min-h-[42px]
                sm:flex-none
                sm:px-5
                sm:py-3
                sm:text-[8px]
                sm:tracking-widest

                hover:border-[#9CFF00]/40
                hover:text-[#9CFF00]
              "
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   PROJECT SECTION
========================================================= */

const Project = () => {
  const sectionRef = useRef(null);

  /* Scroll progress */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Smooth scroll */

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 30,
    mass: 0.8,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        h-[470vh]
        bg-[#020502]
        text-white

        sm:h-[470vh]
        md:h-[470vh]
      "
    >
      {/* =================================================
          STICKY VIEWPORT
      ================================================= */}

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-[#9CFF00]/5
            blur-[100px]

            sm:h-[400px]
            sm:w-[400px]

            md:h-[450px]
            md:w-[450px]
            md:blur-[130px]
          "
        />

        {/* Scanlines */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 4px)",
          }}
        />

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-40
            pt-5

            sm:pt-7

            md:pt-10
          "
        >
          <div
            className="
              container
              mx-auto
              px-4

              sm:px-6

              lg:px-8
            "
          >
            {/* Section Label */}

            <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.25em] sm:gap-3 sm:text-[9px] sm:tracking-[0.3em]">
              <span className="text-[#9CFF00]">
                02
              </span>

              <span className="text-gray-700">
                /
              </span>

              <span className="text-gray-500">
                PROJECTS
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-2
                text-3xl
                font-black
                uppercase
                leading-[0.86]
                tracking-[-0.05em]

                sm:mt-3
                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              SELECTED{" "}

              <span className="text-[#9CFF00]">
                WORK.
              </span>
            </h2>
          </div>
        </div>

        {/* =================================================
            STACK AREA
        ================================================= */}

        <div
          className="
            absolute
            left-0
            right-0
            top-[145px]
            bottom-[45px]

            sm:top-[175px]
            sm:bottom-[55px]

            md:top-[205px]
            md:bottom-[60px]
          "
        >
          <div
            className="
              relative
              mx-auto
              h-[590px]
              w-full

              sm:h-[540px]

              md:h-[500px]
            "
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
                totalProjects={projects.length}
                scrollProgress={smoothProgress}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            BOTTOM HUD
        ================================================= */}

        <div
          className="
            absolute
            bottom-4
            left-0
            right-0
            z-40
            px-4

            sm:bottom-5
            sm:px-8

            md:px-10
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-[1100px]
              items-center
              justify-between
            "
          >
            {/* Scroll indicator */}

            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  opacity: [1, 0.25, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#9CFF00]
                  shadow-[0_0_8px_#9CFF00]
                "
              />

              <span className="hidden text-[7px] font-bold uppercase tracking-[0.2em] text-gray-700 xs:block sm:text-[8px] sm:tracking-[0.25em]">
                Scroll to explore
              </span>
            </div>

            {/* Count */}

            <div className="flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.15em] sm:gap-3 sm:text-[8px] sm:tracking-[0.2em]">
              <span className="text-gray-700">
                04
              </span>

              <span className="h-px w-5 bg-gray-800 sm:w-8" />

              <span className="text-[#9CFF00]">
                PROJECTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;