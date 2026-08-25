import { motion } from "framer-motion";

import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "@base-ui/react";
import { KineticText } from "../ui/kinetic-text";
import HeroCard from "../home/HeroCard";
import { SpinningText } from "../ui/spinning-text";
import DotGrid from "../DotGrid";

/* =========================================================
   CINEMATIC ANIMATION VARIANTS
========================================================= */

const cinematicContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};


/* =========================================================
   NORMAL ITEM
========================================================= */

const cinematicItem = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* =========================================================
   SLOW CINEMATIC ITEM
========================================================= */

const cinematicSlow = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 1.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* =========================================================
   LEFT ENTRANCE
========================================================= */

const cinematicLeft = {
  hidden: {
    opacity: 0,
    x: -45,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* =========================================================
   RIGHT ENTRANCE
========================================================= */

const cinematicRight = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.96,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const roles = [
    "Full-Stack Developer",
    "Next.js Engineer",
    "Backend Designer",
    "Automation Engineer",
    "API Architect",
  ];

  return (
    <section
      className="
        relative
        isolate
        mx-auto
        min-h-screen
        max-w-7xl
        overflow-hidden
        px-6
      "
    >

      {/* =====================================================
          DOT GRID BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
        aria-hidden="true"
      >

        <div
          className="
            absolute
            inset-0
            opacity-40
          "
        >
          <DotGrid
            dotSize={4}
            gap={18}
            baseColor="#67a80a"
            activeColor="#84CC16"
            proximity={110}
            shockRadius={220}
            shockStrength={3}
            resistance={800}
            returnDuration={1.8}
          />
        </div>


        {/* =================================================
            CENTER FADE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_10%,#030603_76%)]
          "
        />


        {/* =================================================
            TOP FADE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-[#030603]
            to-transparent
          "
        />


        {/* =================================================
            BOTTOM FADE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-[#030603]
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          SOFT HUD LIGHTS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-20
          -z-10
          h-72
          w-72
          rounded-full
          bg-lime-400/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-10
          top-32
          -z-10
          h-96
          w-96
          rounded-full
          bg-green-500/[0.025]
          blur-3xl
        "
      />


      {/* =====================================================
          MAIN CINEMATIC CONTAINER
      ===================================================== */}

      <motion.div
        variants={cinematicContainer}
        initial="hidden"
        animate="show"

        className="
          relative
          grid
          min-h-[75vh]
          items-center
          gap-16
          py-16

          lg:grid-cols-[1.05fr_0.95fr]
          lg:py-10
        "
      >

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            mt-8
          "
        >

          {/* =================================================
              AVAILABLE STATUS
          ================================================= */}

          <motion.div
            variants={cinematicLeft}

            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded
              border
              border-lime-400/30
              bg-[#030603]/60
              px-4
              py-2
              font-mono
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-lime-400
              shadow-[0_0_20px_rgba(132,255,0,0.08)]
              backdrop-blur-sm
            "
          >

            <span className="relative flex h-2 w-2">

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-lime-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-lime-400
                  shadow-[0_0_8px_#84ff00]
                "
              />

            </span>

            Available for Full-Time Work

            <span className="text-lime-500">
              ↗
            </span>

          </motion.div>


          {/* =================================================
              NAME
          ================================================= */}

          <motion.div
            variants={cinematicSlow}
            className="relative"
          >

            <KineticText
              text="Kuldeep"
              className="
                mb-[-1.5rem]
                p-0
                text-6xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]
                text-white

                md:text-8xl

                lg:text-[7rem]
              "
            />

            <KineticText
              text="Kumar"
              className="
                text-6xl
                font-black
                uppercase
                leading-none
                tracking-[-0.05em]
                text-lime-400
                drop-shadow-[0_0_18px_rgba(132,255,0,0.25)]

                md:text-8xl

                lg:text-[7rem]
              "
            />

          </motion.div>


          {/* =================================================
              ROLE
          ================================================= */}

          <motion.div
            variants={cinematicItem}

            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
              font-bold

              md:text-4xl
            "
          >

            <span className="text-gray-400">
              I AM A
            </span>

            <TypingAnimation
              words={roles}
              cursorStyle="line"
              loop

              className="
                text-2xl
                font-black
                uppercase
                text-lime-400
                drop-shadow-[0_0_10px_rgba(132,255,0,0.3)]

                md:text-4xl
              "
            />

          </motion.div>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={cinematicItem}

            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-gray-500

              md:text-lg
            "
          >
            Full-Stack MERN + Next.js developer building{" "}

            <span className="font-bold text-lime-400">
              AI-powered SaaS applications
            </span>{" "}

            using OpenAI, Claude, and Gemini.
          </motion.p>


          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            variants={cinematicSlow}

            className="
              mt-9
              flex
              flex-wrap
              gap-4
            "
          >

            {/* VIEW WORK */}

            <button
              className="
                group
                relative
                overflow-hidden
                border
                border-lime-400
                bg-lime-400
                px-7
                py-3.5
                text-xs
                font-black
                uppercase
                tracking-[0.15em]
                text-black
                shadow-[0_0_20px_rgba(132,255,0,0.2)]
                transition-all

                hover:scale-[1.03]
                hover:shadow-[0_0_30px_rgba(132,255,0,0.4)]
              "
            >

              <span className="relative z-10">
                View My Work
              </span>

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-white/30
                  transition-transform
                  duration-300
                  group-hover:translate-x-0
                "
              />

            </button>


            {/* CONTACT */}

            <Button
              className="
                border
                border-white/15
                bg-white/[0.03]
                px-7
                py-3.5
                text-xs
                font-black
                uppercase
                tracking-[0.15em]
                text-gray-300
                transition-all

                hover:border-lime-400/50
                hover:bg-lime-400/5
                hover:text-lime-400
              "
            >
              Contact Me
            </Button>

          </motion.div>

        </div>


        {/* ===================================================
            HERO CARD
        =================================================== */}

        <motion.div
          variants={cinematicRight}

          className="
            relative
            z-10
            flex
            justify-center
          "
        >

          <HeroCard />

        </motion.div>

      </motion.div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.9,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        transition={{
          delay: 2.1,
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}

        className="
          relative
          z-10
          flex
          w-full
          justify-center
          pb-10
        "
      >

        <div
          className="
            relative
            flex
            h-28
            w-28
            items-center
            justify-center
          "
        >

          {/* Glow */}

          <motion.div
            animate={{
              scale: [
                0.9,
                1.08,
                0.9,
              ],

              opacity: [
                0.25,
                0.5,
                0.25,
              ],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              inset-0
              rounded-full
              bg-lime-400/10
              blur-xl
            "
          />


          {/* Spinning text */}

          <SpinningText
            className="
              font-mono
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-lime-400
            "
          >
            scroll down • explore more •
          </SpinningText>


          {/* Center button */}

          <motion.div
            animate={{
              y: [
                0,
                4,
                0,
              ],
            }}

            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-lime-400/30
              bg-[#080d08]
              shadow-[0_0_15px_rgba(132,255,0,0.15)]
            "
          >

            <span
              className="
                text-lg
                text-lime-400
              "
            >
              ↓
            </span>

          </motion.div>

        </div>

      </motion.div>


      {/* =====================================================
          BOTTOM SCANLINE
      ===================================================== */}

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
          via-lime-400/20
          to-transparent
        "
      />

    </section>
  );
};

export default Hero;