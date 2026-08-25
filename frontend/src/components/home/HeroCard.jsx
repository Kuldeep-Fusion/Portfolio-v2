import React, { useRef } from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaGithub,
  FaCode,
  FaStar,
} from "react-icons/fa";

import {
  HiOutlineLocationMarker,
} from "react-icons/hi";

import {
  IoMdCheckmarkCircle,
} from "react-icons/io";

import image from "../../assets/kuldeep.png";


const HeroCard = () => {
  const cardRef = useRef(null);

  /* =========================================================
     MOUSE POSITION
  ========================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* =========================================================
     SMOOTH SPRING
  ========================================================= */

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });

  /* =========================================================
     REVERSE 3D TRACKING

     Mouse right  -> card tilts left
     Mouse left   -> card tilts right

     Mouse down   -> card tilts up
     Mouse up     -> card tilts down
  ========================================================= */

  const rotateY = useTransform(
    smoothX,
    [-100, 100],
    [5, -5]
  );

  const rotateX = useTransform(
    smoothY,
    [-100, 100],
    [-5, 5]
  );

  /* =========================================================
     SUBTLE REVERSE TRANSLATION
  ========================================================= */

  const translateX = useTransform(
    smoothX,
    [-100, 100],
    [4, -4]
  );

  const translateY = useTransform(
    smoothY,
    [-100, 100],
    [4, -4]
  );

  /* =========================================================
     MOUSE MOVE
  ========================================================= */

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    const x =
      event.clientX - centerX;

    const y =
      event.clientY - centerY;

    /*
     * Negative multiplier = reverse tracking.
     *
     * The card reacts opposite to mouse movement.
     */

    mouseX.set(x * 0.14);
    mouseY.set(y * 0.14);
  };

  /* =========================================================
     RESET
  ========================================================= */

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      /* =====================================================
         SLOW CINEMATIC ENTRANCE
      ===================================================== */

      initial={{
        opacity: 0,
        y: -65,
        scale: 0.94,
        filter: "blur(7px)",
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}

      transition={{
        duration: 1.9,
        ease: [0.16, 1, 0.3, 1],
      }}

      /* =====================================================
         3D TRANSFORM
      ===================================================== */

      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,

        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}

      /* =====================================================
         HOVER
      ===================================================== */

      whileHover={{
        scale: 1.025,
      }}

      className="
        relative
        mx-auto
        mt-10
        w-full
        max-w-[350px]
        will-change-transform
      "
    >

      {/* =====================================================
          SOFT BACK LIGHT
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[80%]
          w-[90%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-400/[0.09]
          blur-[70px]
        "

        animate={{
          scale: [
            0.92,
            1.08,
            0.92,
          ],

          opacity: [
            0.35,
            0.65,
            0.35,
          ],
        }}

        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SECONDARY SOFT LIGHT
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-10
          left-1/2
          -z-10
          h-32
          w-[75%]
          -translate-x-1/2
          rounded-full
          bg-green-500/[0.06]
          blur-[55px]
        "

        animate={{
          x: [
            "-50%",
            "-46%",
            "-50%",
          ],

          opacity: [
            0.25,
            0.45,
            0.25,
          ],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MAIN CARD
      ===================================================== */}

      <motion.div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-lime-400/20
          bg-[#080d08]/95
          p-3
          shadow-[0_0_45px_rgba(132,255,0,0.07)]
          backdrop-blur-xl
        "

        /* ===================================================
           VERY SLOW FLOAT
        =================================================== */

        animate={{
          y: [
            0,
            -4,
            0,
            3,
            0,
          ],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* =================================================
            STATIC TOP LINE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-0
            z-20
            h-px
            bg-gradient-to-r
            from-transparent
            via-lime-400/70
            to-transparent
          "
        />

        {/* =================================================
            PROFILE IMAGE
        ================================================= */}

        <motion.div
          className="
            group
            relative
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-black
          "

          whileHover={{
            borderColor:
              "rgba(132,255,0,0.3)",
          }}

          transition={{
            duration: 0.3,
          }}
        >

          <motion.img
            src={image}
            alt="Kuldeep Kumar - Full Stack Developer"

            className="
              h-[320px]
              w-full
              object-cover
              object-center
            "

            whileHover={{
              scale: 1.035,
            }}

            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          />

          {/* =================================================
              DARK GRADIENT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#030603]
              via-transparent
              to-transparent
            "
          />

          {/* =================================================
              SUBTLE GREEN OVERLAY
          ================================================= */}

          <motion.div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-lime-400/[0.02]
              mix-blend-screen
            "

            animate={{
              opacity: [
                0.2,
                0.35,
                0.2,
              ],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =================================================
              SCANLINES
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.06]

              [background-image:repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(132,255,0,0.25)_4px)]
            "
          />

          {/* =================================================
              CORNER DECORATIONS
          ================================================= */}

          <motion.div
            className="
              absolute
              left-3
              top-3
              h-7
              w-7
              border-l
              border-t
              border-lime-400/60
            "
            animate={{
              opacity: [
                0.35,
                0.8,
                0.35,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              absolute
              right-3
              top-3
              h-7
              w-7
              border-r
              border-t
              border-lime-400/60
            "
            animate={{
              opacity: [
                0.35,
                0.8,
                0.35,
              ],
            }}
            transition={{
              duration: 3,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              absolute
              bottom-3
              left-3
              h-7
              w-7
              border-b
              border-l
              border-lime-400/60
            "
            animate={{
              opacity: [
                0.35,
                0.8,
                0.35,
              ],
            }}
            transition={{
              duration: 3,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              absolute
              bottom-3
              right-3
              h-7
              w-7
              border-b
              border-r
              border-lime-400/60
            "
            animate={{
              opacity: [
                0.35,
                0.8,
                0.35,
              ],
            }}
            transition={{
              duration: 3,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =================================================
              OPEN TO WORK
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1.25,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}

            className="
              absolute
              bottom-4
              left-4
              flex
              items-center
              gap-2
              rounded
              border
              border-lime-400/25
              bg-black/70
              px-3
              py-2
              font-mono
              text-[8px]
              font-bold
              uppercase
              tracking-widest
              text-lime-400
              backdrop-blur-md
            "
          >

            <motion.span
              animate={{
                opacity: [
                  1,
                  0.3,
                  1,
                ],

                scale: [
                  1,
                  0.7,
                  1,
                ],
              }}

              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}

              className="
                h-1.5
                w-1.5
                rounded-full
                bg-lime-400
                shadow-[0_0_7px_#84ff00]
              "
            />

            Open to Work
          </motion.div>

        </motion.div>


        {/* =================================================
            LOCATION / STATUS
        ================================================= */}

        <div className="mt-3 grid grid-cols-2 gap-3">

          {/* LOCATION */}

          <motion.div
            whileHover={{
              y: -2,
            }}

            transition={{
              duration: 0.25,
            }}

            className="
              rounded-lg
              border
              border-white/5
              bg-white/[0.02]
              p-3
              transition-colors
              duration-300
              hover:border-lime-400/25
            "
          >

            <p
              className="
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-600
              "
            >
              Location
            </p>

            <div className="mt-2 flex items-center gap-2">

              <HiOutlineLocationMarker
                className="
                  h-4
                  w-4
                  text-lime-400
                "
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-gray-200
                "
              >
                India
              </span>

            </div>
          </motion.div>


          {/* STATUS */}

          <motion.div
            whileHover={{
              y: -2,
            }}

            transition={{
              duration: 0.25,
            }}

            className="
              rounded-lg
              border
              border-lime-400/10
              bg-lime-400/[0.02]
              p-3
              transition-colors
              duration-300
              hover:border-lime-400/30
            "
          >

            <p
              className="
                text-right
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-600
              "
            >
              Status
            </p>

            <div
              className="
                mt-2
                flex
                items-center
                justify-end
                gap-2
              "
            >

              <motion.div
                animate={{
                  scale: [
                    1,
                    1.12,
                    1,
                  ],
                }}

                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IoMdCheckmarkCircle
                  className="
                    h-4
                    w-4
                    text-lime-400
                    drop-shadow-[0_0_5px_#84ff00]
                  "
                />
              </motion.div>

              <span
                className="
                  text-xs
                  font-bold
                  text-lime-400
                "
              >
                AVAILABLE
              </span>

            </div>
          </motion.div>

        </div>


        {/* =================================================
            STATS
        ================================================= */}

        <div
          className="
            mt-3
            grid
            grid-cols-3
            gap-2
          "
        >

          {/* EXPERIENCE */}

          <motion.div
            whileHover={{
              y: -4,
              scale: 1.025,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}

            className="
              group
              rounded-lg
              border
              border-white/5
              bg-white/[0.025]
              px-2
              py-3
              text-center
              transition-all
              duration-300
              hover:border-lime-400/30
              hover:bg-lime-400/[0.04]
              hover:shadow-[0_0_15px_rgba(132,255,0,0.08)]
            "
          >

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: -5,
              }}
            >
              <FaCode
                className="
                  mx-auto
                  h-4
                  w-4
                  text-lime-400
                "
              />
            </motion.div>

            <p
              className="
                mt-2
                font-mono
                text-[8px]
                font-bold
                tracking-widest
                text-gray-600
              "
            >
              EXPERIENCE
            </p>

            <p
              className="
                mt-1
                text-lg
                font-black
                text-white
              "
            >
              3 Year
              <span className="text-lime-400">
                +
              </span>
            </p>

          </motion.div>


          {/* GITHUB */}

          <motion.div
            whileHover={{
              y: -4,
              scale: 1.025,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}

            className="
              group
              rounded-lg
              border
              border-white/5
              bg-white/[0.025]
              px-2
              py-3
              text-center
              transition-all
              duration-300
              hover:border-lime-400/30
              hover:bg-lime-400/[0.04]
              hover:shadow-[0_0_15px_rgba(132,255,0,0.08)]
            "
          >

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
            >
              <FaGithub
                className="
                  mx-auto
                  h-4
                  w-4
                  text-lime-400
                "
              />
            </motion.div>

            <p
              className="
                mt-2
                font-mono
                text-[8px]
                font-bold
                tracking-widest
                text-gray-600
              "
            >
              GITHUB
            </p>

            <p
              className="
                mt-1
                text-lg
                font-black
                text-white
              "
            >
              24
              <span className="text-lime-400">
                +
              </span>
            </p>

          </motion.div>


          {/* SINCE */}

          <motion.div
            whileHover={{
              y: -4,
              scale: 1.025,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}

            className="
              group
              rounded-lg
              border
              border-white/5
              bg-white/[0.025]
              px-2
              py-3
              text-center
              transition-all
              duration-300
              hover:border-lime-400/30
              hover:bg-lime-400/[0.04]
              hover:shadow-[0_0_15px_rgba(132,255,0,0.08)]
            "
          >

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 8,
              }}
            >
              <FaStar
                className="
                  mx-auto
                  h-4
                  w-4
                  text-lime-400
                "
              />
            </motion.div>

            <p
              className="
                mt-2
                font-mono
                text-[8px]
                font-bold
                tracking-widest
                text-gray-600
              "
            >
              SINCE
            </p>

            <p
              className="
                mt-1
                text-lg
                font-black
                text-white
              "
            >
              2022
            </p>

          </motion.div>

        </div>


        {/* =================================================
            BOTTOM ACCENT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-lime-400/40
            to-transparent
          "
        />

      </motion.div>
    </motion.div>
  );
};

export default HeroCard;