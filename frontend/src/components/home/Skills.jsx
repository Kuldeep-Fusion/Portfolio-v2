import React, { useRef } from "react";

import {
  motion,
  useAnimationControls,
} from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCode,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaAws,
  FaCcStripe,
  FaPaypal,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostgresql,
  SiOpenaigym,
  SiPostman,
  SiRedux,
  SiSpringsecurity,
  SiClaude,
  SiN8N,
  SiRazorpay,
  SiPhonepe,
} from "react-icons/si";

import { TbPrompt } from "react-icons/tb";

/* =========================================================
   SKILL DATA
========================================================= */

const skillGroups = [
  {
    title: "Core Languages",
    icon: FaCode,

    skills: [
      {
        name: "JAVA",
        icon: FaJava,
        color: "#ED8B00",
        desc: "Backend Development",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        desc: "ES6+ & Async",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        desc: "Type Safety",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34C26",
        desc: "Web Markup",
      },
    ],
  },

  {
    title: "Frontend",
    icon: FaReact,

    skills: [
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
        desc: "Component UI",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
        desc: "Full-Stack React",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC",
        desc: "State Management",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        desc: "Utility-First UI",
      },
    ],
  },

  {
    title: "Backend",
    icon: FaNodeJs,

    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#68A063",
        desc: "JavaScript Runtime",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#FFFFFF",
        desc: "REST APIs",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        desc: "NoSQL Database",
      },
      {
        name: "JWT & Auth",
        icon: SiSpringsecurity,
        color: "#4169E1",
        desc: "Authentication",
      },
    ],
  },

  {
    title: "Tools & DevOps",
    icon: FaGitAlt,

    skills: [
      {
        name: "Git & GitHub",
        icon: FaGithub,
        color: "#FFFFFF",
        desc: "Code & Projects",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        desc: "Containers",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        desc: "API Testing",
      },
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
        desc: "Cloud Services",
      },
    ],
  },

  {
    title: "AI / GenAI",
    icon: SiOpenaigym,

    skills: [
      {
        name: "OpenAI",
        icon: SiOpenaigym,
        color: "#FFFFFF",
        desc: "AI Integration",
      },
      {
        name: "Claude",
        icon: SiClaude,
        color: "orange",
        desc: "LLM Applications",
      },
      {
        name: "Automation",
        icon: SiN8N,
        color: "#EA4B71",
        desc: "AI Workflows",
      },
      {
        name: "Prompt Engineering",
        icon: TbPrompt,
        color: "#5C7EB2",
        desc: "AI Systems",
      },
    ],
  },

  {
    title: "Payments",
    icon: SiSpringsecurity,

    skills: [
      {
        name: "Razorpay",
        icon: SiRazorpay,
        color: "#3395FF",
        desc: "Indian Payments",
      },
      {
        name: "Stripe",
        icon: FaCcStripe,
        color: "#635BFF",
        desc: "Global Payments",
      },
      {
        name: "PhonePe",
        icon: SiPhonepe,
        color: "#5F259F",
        desc: "UPI Payments",
      },
      {
        name: "PayPal",
        icon: FaPaypal,
        color: "#003087",
        desc: "Global Payments",
      },
    ],
  },
];

/* =========================================================
   WAVE SKILL CARD
========================================================= */

const WaveSkillCard = ({
  skill,
  index,
  groupIndex,
}) => {
  const Icon = skill.icon;

  const controls = useAnimationControls();

  const cardRef = useRef(null);

  /*
   * Different delay for every card.
   * This creates a natural water-wave effect.
   */
  const waveDelay =
    groupIndex * 0.18 +
    index * 0.13;

  /*
   * Cinematic entrance delay.
   */
  const entranceDelay =
    0.15 +
    groupIndex * 0.08 +
    index * 0.055;

  /* =======================================================
     START WATER WAVE
  ======================================================= */

  const startWave = () => {
    controls.start({
      x: [0, 4, 0, -4, 0],

      y: [
        0,
        -6,
        0,
        6,
        0,
      ],

      rotate: [
        0,
        1.5,
        0,
        -1.5,
        0,
      ],

      transition: {
        duration: 2.8,
        delay: waveDelay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  };

  /* =======================================================
     ENTRANCE COMPLETE
  ======================================================= */

  const handleAnimationComplete = () => {
    startWave();
  };

  /* =======================================================
     DRAG START
  ======================================================= */

  const handleDragStart = () => {
    /*
     * Stop automatic water movement
     * while user is controlling the card.
     */
    controls.stop();
  };

  /* =======================================================
     DRAG END
  ======================================================= */

  // const handleDragEnd = async () => {
  //   /*
  //    * First return to original position.
  //    */
  //   await controls.start({
  //     x: 0,
  //     y: 0,
  //     rotate: 0,

  //     transition: {
  //       type: "spring",
  //       stiffness: 180,
  //       damping: 17,
  //       mass: 0.65,
  //     },
  //   });

  //   /*
  //    * Then restart the wave.
  //    */
  //   startWave();
  // };

  return (
    <motion.div
      ref={cardRef}
      // drag
      // dragMomentum={true}
      // dragElastic={0.12}
      // onDragStart={handleDragStart}
      // onDragEnd={handleDragEnd}
      animate={controls}

      /* ===================================================
         CINEMATIC ENTRANCE
      =================================================== */

      initial={{
        opacity: 0,
        y: 55,
        scale: 0.86,
        rotateX: 18,
        filter: "blur(9px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      }}

      viewport={{
        once: true,
        amount: 0.12,
      }}

      transition={{
        duration: 0.8,
        delay: entranceDelay,
        ease: [0.16, 1, 0.3, 1],
      }}

      /* ===================================================
         HOVER
      =================================================== */

      whileHover={{
        scale: 1.025,
      }}

      /* ===================================================
         DRAG
      =================================================== */

      whileDrag={{
        scale: 1.06,
        rotate: 2,
        zIndex: 100,
        cursor: "grabbing",

        boxShadow:
          "0 25px 60px rgba(132,255,0,0.15)",
      }}

      onAnimationComplete={handleAnimationComplete}

      style={{
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        touchAction: "none",
      }}

      className="
        group
        relative
        flex
        min-h-[72px]
        cursor-grab
        items-center
        gap-3
        overflow-hidden
        rounded-xl
        border
        border-white/5
        bg-[#080d08]/90
        px-3
        select-none
        will-change-transform

        hover:border-lime-400/35
        hover:bg-lime-400/[0.045]
      "
    >
      {/* =================================================
          TOP WATER REFLECTION
      ================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-1/2
          top-0
          h-px
          w-[200%]
          bg-gradient-to-r
          from-transparent
          via-lime-400/50
          to-transparent
        "
        animate={{
          x: [
            "-20%",
            "20%",
            "-20%",
          ],

          opacity: [
            0.15,
            0.45,
            0.15,
          ],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          LEFT ACTIVE INDICATOR
      ================================================= */}

      <motion.div
        className="
          absolute
          bottom-0
          left-0
          top-0
          w-[2px]
          origin-bottom
          bg-lime-400
          shadow-[0_0_8px_#84ff00]
        "
        initial={{
          scaleY: 0,
          opacity: 0,
        }}
        whileHover={{
          scaleY: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
        }}
      />

      {/* =================================================
          ICON BOX
      ================================================= */}

      <motion.div
        className="
          relative
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/5
          bg-white/[0.025]
        "
        whileHover={{
          scale: 1.08,
          rotate: -3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        {/* Icon background glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-lg
            blur-md
          "
          style={{
            backgroundColor: skill.color,
          }}
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 0.16,
          }}
        />

        <Icon
          className="
            relative
            z-10
            h-6
            w-6
            transition-transform
            duration-300
          "
          style={{
            color: skill.color,
          }}
        />
      </motion.div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="min-w-0 flex-1">
        <p
          className="
            truncate
            text-xs
            font-bold
            text-gray-200
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {skill.name}
        </p>

        <p
          className="
            mt-1
            truncate
            font-mono
            text-[8px]
            uppercase
            tracking-wider
            text-gray-500
          "
        >
          {skill.desc}
        </p>
      </div>

      {/* =================================================
          ARROW
      ================================================= */}

      <motion.span
        className="
          ml-auto
          text-[10px]
          text-lime-400
        "
        initial={{
          opacity: 0,
          x: -5,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
        }}
      >
        →
      </motion.span>

      {/* =================================================
          BOTTOM WATER LINE
      ================================================= */}

      <motion.div
        className="
          absolute
          bottom-0
          left-0
          h-px
          bg-lime-400
          shadow-[0_0_8px_#84ff00]
        "
        initial={{
          width: "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

/* =========================================================
   SKILLS COMPONENT
========================================================= */

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        container
        relative
        m-auto
        mt-20
        overflow-hidden
        px-5
        py-12

        sm:px-6

        md:px-8

        lg:px-10
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/3
          top-1/3
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-lime-400/[0.025]
          blur-[140px]
        "
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          -z-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-green-500/[0.02]
          blur-[120px]
        "
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          BACKGROUND GRID
      ================================================= */}

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

      <div className="mx-auto max-w-[1500px]">

        {/* =================================================
            TOP SECTION HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            items-end
            justify-between
            border-b
            border-white/5
            pb-7
          "
        >
          <div>

            {/* =================================================
                SECTION LABEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex items-center gap-3"
            >
              <span
                className="
                  font-mono
                  text-xs
                  font-bold
                  tracking-[0.25em]
                  text-lime-400
                "
              >
                02.
              </span>

              <span
                className="
                  font-mono
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                "
              >
                Skills
              </span>
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 55,
                scale: 0.94,
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
                delay: 0.1,
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
              My Tech{" "}

              <motion.span
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  inline-block
                  text-lime-400
                  drop-shadow-[0_0_18px_rgba(132,255,0,0.15)]
                "
              >
                Arsenal.
              </motion.span>
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.55,
              }}
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-gray-500
              "
            >
              Technologies I use to build modern,
              scalable and production-ready digital products.
            </motion.p>
          </div>

          {/* =================================================
              TOP RIGHT STATUS
          ================================================= */}

          <motion.div
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
              delay: 0.5,
              duration: 0.5,
            }}
            className="
              hidden
              items-center
              gap-2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-gray-600

              lg:flex
            "
          >
            <motion.span
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-lime-400
                shadow-[0_0_8px_#84ff00]
              "
            />

            Stack Online
          </motion.div>
        </motion.div>

        {/* =================================================
            SKILL GROUPS
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            mt-8
            grid
            gap-x-3
            gap-y-8

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-6
          "
        >
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                    filter: "blur(6px)",
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",

                    transition: {
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="min-w-0"
              >

                {/* =================================================
                    GROUP HEADER
                ================================================= */}

                <motion.div
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
                    delay: groupIndex * 0.07,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mb-4
                    min-h-[58px]
                    border-b
                    border-lime-400/10
                    pb-3
                  "
                >
                  <div className="flex items-start gap-2.5">

                    {/* Group Icon */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0,
                        rotate: -45,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          0.1 +
                          groupIndex * 0.07,

                        type: "spring",

                        stiffness: 260,

                        damping: 16,
                      }}
                    >
                      <GroupIcon
                        className="
                          mt-0.5
                          h-4
                          w-4
                          shrink-0
                          text-lime-400
                          drop-shadow-[0_0_5px_rgba(132,255,0,0.3)]
                        "
                      />
                    </motion.div>

                    {/* Group title */}

                    <h3
                      className="
                        font-mono
                        text-[10px]
                        font-bold
                        uppercase
                        leading-4
                        tracking-[0.12em]
                        text-gray-200
                      "
                    >
                      {group.title}
                    </h3>
                  </div>
                </motion.div>

                {/* =================================================
                    SKILL CARDS
                ================================================= */}

                <div className="space-y-2.5">
                  {group.skills.map(
                    (skill, skillIndex) => (
                      <WaveSkillCard
                        key={`${group.title}-${skill.name}`}
                        skill={skill}
                        index={skillIndex}
                        groupIndex={groupIndex}
                      />
                    )
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =================================================
            BOTTOM STATUS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
          }}
          className="
            mt-8
            flex
            items-center
            gap-4
            border-t
            border-white/5
            pt-5
          "
        >
          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-gray-700
            "
          >
            06 Categories
          </span>

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-lime-400/20
              to-transparent
            "
          />

          <motion.span
            animate={{
              opacity: [0.35, 0.8, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-lime-500/50
            "
          >
            Learn · Build · Ship
          </motion.span>
        </motion.div>

        {/* =================================================
            DRAG HINT
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
            duration: 0.6,
          }}
          className="
            mt-5
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/5
              bg-white/[0.015]
              px-3
              py-1.5
            "
          >
            <motion.span
              animate={{
                x: [-2, 3, -2],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[9px] text-lime-400"
            >
              ↔
            </motion.span>

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-gray-600
              "
            >
              Drag any skill
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;