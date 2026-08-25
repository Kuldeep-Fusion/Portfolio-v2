import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../../assets/Kuldeep(Full-stack)AI.pdf"

import {
  FiDownload,
  FiMail,
  FiChevronLeft,
  FiLinkedin,
} from "react-icons/fi";

import {
  FaGithub,
  FaXTwitter,
  FaCode,
} from "react-icons/fa6";


const StickyButton = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 2.2,
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        right-0
        top-1/2
        z-[100]
        -translate-y-1/2
        hidden
        md:block
      "
    >

      <motion.div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}

        animate={{
          width: expanded ? 250 : 64,
          height: expanded ? 150 : 155,
        }}

        transition={{
          type: "spring",
          stiffness: 260,
          damping: 24,
          mass: 0.7,
        }}

        className="
          relative
          overflow-hidden
          rounded-l-2xl
          border
          border-r-0
          border-lime-400/25
          bg-[#080d08]/95
          shadow-[-10px_0_40px_rgba(132,255,0,0.08)]
          backdrop-blur-xl
        "
      >

        {/* =================================================
            GREEN SIDE LIGHT
        ================================================= */}

        <motion.div
          className="
            absolute
            bottom-0
            left-0
            top-0
            w-px
            bg-lime-400
          "
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 14px #84ff00",
          }}
        />


        {/* =================================================
            DOWNLOAD CV - ALWAYS VISIBLE
        ================================================= */}

        <motion.a
          href={resume}
          download="Kuldeep(Full-stack)AI.pdf"

          whileHover={{
            backgroundColor:
              "rgba(132,255,0,0.06)",
          }}

          className="
            absolute
            bottom-0
            left-0
            top-0
            z-30
            flex
            w-16
            flex-col
            items-center
            justify-center
            gap-3
            border-r
            border-white/10
            text-lime-400
          "
        >

          {/* Download icon */}

          <motion.div
            animate={{
              y: [0, 3, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-lime-400/20
              bg-lime-400/10
            "
          >
            <FiDownload className="h-4 w-4" />
          </motion.div>


          {/* Vertical text */}

          <span
            className="
              [writing-mode:vertical-rl]
              rotate-180
              font-mono
              text-[9px]
              font-black
              uppercase
              tracking-[0.18em]
              text-gray-300
              transition-colors
              duration-300
              hover:text-lime-400
            "
          >
            Download CV
          </span>

        </motion.a>


        {/* =================================================
            SOCIAL AREA
        ================================================= */}

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 30,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                bottom-0
                right-0
                top-0
                flex
                w-[184px]
                flex-col
                justify-center
                gap-2
                px-3
              "
            >

              {/* =================================================
                  ROW 1
              ================================================= */}

              <div className="grid grid-cols-2 gap-2">

                {/* LINKEDIN */}

                <SocialButton
                  href="https://www.linkedin.com/in/kuldeepfusion-developer/"
                  label="LinkedIn"
                >
                  <FiLinkedin />
                </SocialButton>


                {/* EMAIL */}

                <SocialButton
                  href="mailto:kk761734@gmail.com"
                  label="Email"
                >
                  <FiMail />
                </SocialButton>

              </div>


              {/* =================================================
                  ROW 2
              ================================================= */}

              <div className="grid grid-cols-2 gap-2">

                {/* X */}

                <SocialButton
                  href="https://x.com/kuldeep70218569?s=11"
                  label="X"
                >
                  <FaXTwitter />
                </SocialButton>


                {/* GITHUB */}

                <SocialButton
                  href="https://github.com/Kuldeep-Fusion"
                  label="GitHub"
                >
                  <FaGithub />
                </SocialButton>

              </div>


              {/* =================================================
                  ROW 3
              ================================================= */}

              <div className="grid grid-cols-2 gap-2">

                {/* LEETCODE */}

                <SocialButton
                  href="https://leetcode.com/u/kuldeep-fusion/"
                  label="LeetCode"
                >
                  <FaCode />
                </SocialButton>

                {/* Empty space */}

                <div />

              </div>

            </motion.div>
          )}
        </AnimatePresence>


        {/* =================================================
            CLOSED STATE ARROW
        ================================================= */}

        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                pointer-events-none
                absolute
                right-2
                top-1/2
                -translate-y-1/2
              "
            >
              <FiChevronLeft
                className="
                  h-3
                  w-3
                  text-gray-600
                "
              />
            </motion.div>
          )}
        </AnimatePresence>


        {/* =================================================
            BOTTOM ACCENT
        ================================================= */}

        <motion.div
          className="
            absolute
            bottom-0
            left-0
            h-px
            bg-lime-400
          "
          animate={{
            width: expanded
              ? "100%"
              : "45%",
          }}
          transition={{
            duration: 0.4,
          }}
        />

      </motion.div>
    </motion.div>
  );
};


/* =========================================================
   SOCIAL BUTTON
========================================================= */

const SocialButton = ({
  href,
  label,
  children,
}) => {
  return (
    <motion.a
      href={href}
      target={
        href.startsWith("mailto:")
          ? undefined
          : "_blank"
      }
      rel="noreferrer"
      aria-label={label}

      whileHover={{
        y: -2,
        scale: 1.04,
      }}

      whileTap={{
        scale: 0.94,
      }}

      className="
        group
        flex
        h-10
        items-center
        gap-2
        rounded-lg
        border
        border-white/10
        bg-white/[0.025]
        px-3
        text-gray-400
        transition-all
        duration-300
        hover:border-lime-400/30
        hover:bg-lime-400/10
        hover:text-lime-400
      "
    >

      <span className="text-sm">
        {children}
      </span>

      <span
        className="
          font-mono
          text-[8px]
          font-bold
          uppercase
          tracking-wider
        "
      >
        {label}
      </span>

    </motion.a>
  );
};

export default StickyButton;