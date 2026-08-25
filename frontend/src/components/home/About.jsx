import React from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaArrowRight,
  FaCode,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiOpenaigym,
} from "react-icons/si";


/* =========================================================
   HIGHLIGHTS
========================================================= */

const highlights = [
  {
    icon: FaCode,
    label: "EXPERIENCE",
    title: "3+ Years",
    description: "Full-Stack Engineering",
  },
  {
    icon: FaBrain,
    label: "SPECIALIZATION",
    title: "AI + SaaS",
    description: "Intelligent digital products",
  },
  {
    icon: FaUsers,
    label: "LEADERSHIP",
    title: "Tech Lead",
    description: "Engineering & delivery",
  },
];

/* =========================================================
   TECH STACK
========================================================= */

const techStack = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#68A063",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "OpenAI",
    icon: SiOpenaigym,
    color: "#FFFFFF",
  },
];

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experience = [
  {
    year: "DEC 2024 — PRESENT",
    role: "Lead Web Developer",
    company: "Savshka Digital Media",
    location: "Noida, India",
  },
  {
    year: "MAR 2024 — NOV 2024",
    role: "Head of Digital Platform",
    company: "Mediseller",
    location: "Delhi, India",
  },
  {
    year: "NOV 2023 — FEB 2024",
    role: "Web Developer",
    company: "Savshka Digital Media",
    location: "Noida, India",
  },
  {
    year: "AUG 2022 — JUN 2023",
    role: "Technology Lead",
    company: "Villam",
    location: "New Delhi, India",
  },
];

/* =========================================================
   ANIMATED NUMBER
========================================================= */

const Stat = ({ value, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="min-w-[70px]"
    >
      <div className="text-2xl font-black tracking-tight text-lime-400">
        {value}
      </div>

      <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-gray-600">
        {label}
      </div>
    </motion.div>
  );
};

/* =========================================================
   TECH ICON
========================================================= */

const TechIcon = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: 0.25 + index * 0.07,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      className="
        group
        flex
        items-center
        gap-2
        rounded-md
        border
        border-white/[0.06]
        bg-white/[0.02]
        px-3
        py-2
        transition-colors
        duration-300
        hover:border-white/[0.14]
        hover:bg-white/[0.04]
      "
    >
      <Icon
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
        style={{
          color: item.color,
        }}
      />

      <span className="font-mono text-[7px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-gray-300">
        {item.name}
      </span>
    </motion.div>
  );
};

/* =========================================================
   EXPERIENCE ROW
========================================================= */

const ExperienceRow = ({ item, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        grid
        gap-3
        border-b
        border-white/[0.05]
        py-4
        transition-colors
        duration-300

        md:grid-cols-[150px_1fr_auto]
        md:items-center
      "
    >
      {/* Hover line */}
      <motion.div
        className="
          absolute
          bottom-0
          left-0
          top-0
          w-px
          origin-bottom
          bg-lime-400
          shadow-[0_0_10px_#84ff00]
        "
        initial={{
          scaleY: 0,
        }}
        whileHover={{
          scaleY: 1,
        }}
        transition={{
          duration: 0.25,
        }}
      />

      {/* Date */}
      <span className="pl-3 font-mono text-[7px] uppercase tracking-[0.15em] text-gray-600">
        {item.year}
      </span>

      {/* Role */}
      <div className="pl-3">
        <h4 className="text-xs font-bold uppercase tracking-wide text-gray-300 transition-colors group-hover:text-lime-400">
          {item.role}
        </h4>

        <p className="mt-1 text-[9px] text-gray-600">
          {item.company}
        </p>
      </div>

      {/* Location */}
      <span className="pl-3 font-mono text-[7px] uppercase tracking-wider text-gray-700">
        {item.location}
      </span>
    </motion.div>
  );
};

/* =========================================================
   ABOUT
========================================================= */

const About = () => {
  const sectionRef = React.useRef(null);

  /*
   * Scroll progress for cinematic parallax.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.6,
  });

  const glowY = useTransform(
    smoothProgress,
    [0, 1],
    [-80, 80]
  );

  const panelY = useTransform(
    smoothProgress,
    [0, 1],
    [35, -35]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-5
        py-20
        md:flex
        md:items-center
        md:px-8
        md:py-24
        lg:px-10
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <motion.div
        style={{
          y: glowY,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[550px]
          w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-400/[0.035]
          blur-[130px]
        "
      />

      {/* Secondary glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[15%]
          -z-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-green-500/[0.025]
          blur-[110px]
        "
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.025]

          [background-image:linear-gradient(rgba(132,255,0,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(132,255,0,0.6)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      {/* Scanlines */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.018]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            MAIN PANEL
        ===================================================== */}

        <motion.div
          style={{
            y: panelY,
          }}
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-[#070b07]/90
            px-5
            py-8
            shadow-[0_0_70px_rgba(132,255,0,0.035)]
            backdrop-blur-xl
            md:px-10
            md:py-10
            lg:px-14
            lg:py-12
          "
        >

          {/* =================================================
              HUD CORNERS
          ================================================= */}

          <motion.div
            initial={{
              width: 0,
              height: 0,
            }}
            whileInView={{
              width: 48,
              height: 48,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              absolute
              left-0
              top-0
              border-l-2
              border-t-2
              border-lime-400/60
            "
          />

          <motion.div
            initial={{
              width: 0,
              height: 0,
            }}
            whileInView={{
              width: 48,
              height: 48,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="
              absolute
              right-0
              top-0
              border-r-2
              border-t-2
              border-lime-400/60
            "
          />

          <motion.div
            initial={{
              width: 0,
              height: 0,
            }}
            whileInView={{
              width: 48,
              height: 48,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              absolute
              bottom-0
              left-0
              border-b-2
              border-l-2
              border-lime-400/60
            "
          />

          <motion.div
            initial={{
              width: 0,
              height: 0,
            }}
            whileInView={{
              width: 48,
              height: 48,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="
              absolute
              bottom-0
              right-0
              border-b-2
              border-r-2
              border-lime-400/60
            "
          />

          {/* =================================================
              TOP HUD
          ================================================= */}

          <div className="mb-8 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.25em]">
            <motion.span
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
              }}
              className="text-lime-400"
            >
              ABOUT // 01
            </motion.span>

            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
              }}
              className="flex items-center gap-2 text-gray-700"
            >
              <motion.span
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]"
              />

              SYSTEM ONLINE
            </motion.div>
          </div>

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="relative z-10 mx-auto max-w-5xl text-center">

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
                letterSpacing: "0.15em",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                letterSpacing: "0.35em",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="font-mono text-[9px] uppercase text-gray-600"
            >
              Who I Am
            </motion.p>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 55,
                scale: 0.9,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-4
                text-4xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.05em]
                text-white

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
              "
            >
              <span className="block">
                I Build
              </span>

              <span className="mt-1 block text-lime-400 drop-shadow-[0_0_20px_rgba(132,255,0,0.18)]">
                Digital Products.
              </span>
            </motion.h2>

            {/* =================================================
                MAIN DESCRIPTION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-sm
                leading-7
                text-gray-500

                md:text-base
                md:leading-8
              "
            >
              <p>
                I'm a{" "}
                <span className="font-semibold text-gray-200">
                  Results-driven Full-Stack Developer
                </span>{" "}
                with{" "}
                <span className="font-semibold text-lime-400">
                  3+ years
                </span>{" "}
                of experience architecting scalable web applications
                and AI-integrated platforms.
              </p>

              <p className="mt-3">
                I build with{" "}
                <span className="text-gray-300">
                  React.js, Next.js, Node.js
                </span>{" "}
                and MongoDB, while using modern AI tooling to accelerate
                development and ship production-ready products faster.
              </p>
            </motion.div>

            {/* =================================================
                TECH STACK
            ================================================= */}

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {techStack.map((tech, index) => (
                <TechIcon
                  key={tech.name}
                  item={tech}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* =================================================
              HIGHLIGHTS
          ================================================= */}

          <div className="relative z-10 mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: 0.65 + index * 0.1,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group/card
                    relative
                    overflow-hidden
                    rounded-lg
                    border
                    border-white/5
                    bg-white/[0.02]
                    p-5
                    text-left
                    transition-colors
                    duration-300
                    hover:border-lime-400/30
                    hover:bg-lime-400/[0.035]
                  "
                >
                  {/* Glow */}
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-lime-400/0 blur-2xl transition-all duration-500 group-hover/card:bg-lime-400/10" />

                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: -5,
                    }}
                    className="relative"
                  >
                    <Icon className="h-5 w-5 text-lime-400" />
                  </motion.div>

                  <p className="relative mt-4 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
                    {item.label}
                  </p>

                  <h3 className="relative mt-1 text-sm font-bold text-gray-200 transition-colors group-hover/card:text-lime-400">
                    {item.title}
                  </h3>

                  <p className="relative mt-1 text-[10px] text-gray-600">
                    {item.description}
                  </p>

                  {/* Bottom line */}
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    whileHover={{
                      width: "100%",
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      bg-lime-400
                      shadow-[0_0_8px_#84ff00]
                    "
                  />
                </motion.div>
              );
            })}
          </div>


          {/* =================================================
              BOTTOM STATS + CTA
          ================================================= */}

          <div className="relative z-10 mx-auto mt-9 flex max-w-4xl flex-col items-center justify-between gap-6 border-t border-white/5 pt-6 sm:flex-row">

            {/* Stats */}

            <div className="flex items-center gap-6">
              <Stat
                value="3+"
                label="Years"
                delay={0.2}
              />

              <div className="h-8 w-px bg-white/5" />

              <Stat
                value="40%"
                label="AI Velocity"
                delay={0.3}
              />

              <div className="h-8 w-px bg-white/5" />

              <Stat
                value="500+"
                label="SKUs Managed"
                delay={0.4}
              />

              <div className="h-8 w-px bg-white/5" />

              <Stat
                value="99.5%"
                label="Uptime"
                delay={0.5}
              />
            </div>

            {/* CTA */}

            <motion.a
              href="#projects"
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                duration: 0.5,
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group/btn
                flex
                shrink-0
                items-center
                gap-3
                rounded-md
                border
                border-lime-400/30
                bg-lime-400/5
                px-5
                py-2.5
                font-mono
                text-[9px]
                font-bold
                uppercase
                tracking-widest
                text-lime-400
                transition-all
                duration-300
                hover:border-lime-400
                hover:bg-lime-400
                hover:text-black
                hover:shadow-[0_0_25px_rgba(132,255,0,0.25)]
              "
            >
              Explore My Work

              <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.a>
          </div>

          {/* =================================================
              BOTTOM HUD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="
              absolute
              bottom-3
              left-1/2
              hidden
              -translate-x-1/2
              font-mono
              text-[6px]
              uppercase
              tracking-[0.4em]
              text-gray-800
              sm:block
            "
          >
            KULDEEP // FULL-STACK // AI // BUILDER
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;