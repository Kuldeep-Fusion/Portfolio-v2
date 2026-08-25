import React from "react";

import { motion } from "framer-motion";
import resume from "../assets/Kuldeep(Full-stack)AI.pdf"

import {
  FaDownload,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import {
  FaXTwitter,
} from "react-icons/fa6";

import {
  SiLeetcode,
} from "react-icons/si";


/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];


/* =========================================================
   SOCIAL LINKS
========================================================= */

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kuldeepfusion-developer/",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },

  {
    name: "GitHub",
    href: "https://github.com/Kuldeep-Fusion",
    icon: FaGithub,
    color: "#FFFFFF",
  },

  {
    name: "LeetCode",
    href: "https://leetcode.com/u/kuldeep-fusion/",
    icon: SiLeetcode,
    color: "#FFA116",
  },

  {
    name: "X",
    href: "https://x.com/kuldeep70218569?s=11",
    icon: FaXTwitter,
    color: "#FFFFFF",
  },
];


/* =========================================================
   FOOTER LINK
========================================================= */

const FooterLink = ({ label, href, index }) => {
  return (
    <motion.a
      href={href}
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.06,
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        x: 4,
      }}
      className="
        group
        flex
        items-center
        gap-2
        font-mono
        text-[9px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-gray-600
        transition-colors
        duration-300
        hover:text-lime-400
      "
    >
      <span
        className="
          h-px
          w-0
          bg-lime-400
          transition-all
          duration-300
          group-hover:w-3
        "
      />

      {label}
    </motion.a>
  );
};


/* =========================================================
   SOCIAL LINK
========================================================= */

const SocialLink = ({ social, index }) => {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noreferrer"
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
        delay: 0.1 + index * 0.07,
        duration: 0.5,
      }}
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        group
        flex
        items-center
        gap-2
        rounded-md
        border
        border-white/[0.06]
        bg-white/[0.015]
        px-3
        py-2.5
        transition-all
        duration-300
        hover:border-white/[0.14]
        hover:bg-white/[0.035]
      "
    >
      <Icon
        className="
          h-3.5
          w-3.5
          transition-transform
          duration-300
          group-hover:scale-110
        "
        style={{
          color: social.color,
        }}
      />

      <span
        className="
          font-mono
          text-[7px]
          font-bold
          uppercase
          tracking-wider
          text-gray-600
          transition-colors
          group-hover:text-gray-300
        "
      >
        {social.name}
      </span>
    </motion.a>
  );
};


/* =========================================================
   INFINITE NAME MARQUEE
========================================================= */

const NameMarquee = () => {
  return (
    <div
      className="
        relative
        mt-14
        overflow-hidden
        border-y
     
        border-white/[0.05]
        py-5
      "
    >
      {/* Fade edges */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-10
          h-full
          w-20
          bg-gradient-to-r
          from-[#020502]
          to-transparent
          sm:w-32
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-10
          h-full
          w-20
          bg-gradient-to-l
          from-[#020502]
          to-transparent
          sm:w-32
        "
      />

      {/* Marquee */}

      <motion.div
        className="
          flex
          w-max
          items-center
          whitespace-nowrap
        "
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* First set */}

        <div className="flex items-center">
          <MarqueeText />
          <MarqueeText />
        </div>

        {/* Duplicate set for seamless loop */}

        <div className="flex items-center">
          <MarqueeText />
          <MarqueeText />
        </div>
      </motion.div>
    </div>
  );
};


/* =========================================================
   MARQUEE TEXT
========================================================= */

const MarqueeText = () => {
  return (
    <div className="flex items-center">
      <span
        className="
          px-5
          text-[70px]
          font-black
          uppercase
          leading-none
          tracking-[-0.06em]
          text-white

          sm:text-[100px]

          md:text-[130px]

          lg:text-[150px]
        "
      >
        KULDEEP KUMAR
      </span>

      <span
        className="
          px-5
          text-2xl
          font-black
          text-lime-400/30

          md:text-4xl
        "
      >
        ✦
      </span>
    </div>
  );
};


/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-lime-400/10
        bg-[#020502]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[400px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-lime-400/[0.025]
          blur-[130px]
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
          opacity-[0.02]

          [background-image:linear-gradient(rgba(132,255,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(132,255,0,0.5)_1px,transparent_1px)]

          [background-size:60px_60px]
        "
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">


        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div className="h-px bg-gradient-to-r from-lime-400/20 via-white/[0.05] to-transparent" />


        {/* ===================================================
            LINKS AREA
        =================================================== */}

        <div
          className="
            grid
            gap-10
            py-10

            sm:grid-cols-2

            lg:grid-cols-[1fr_1fr_1.3fr]
          "
        >

          {/* BRAND */}

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
              duration: 0.5,
            }}
          >
            <a
              href="#"
              className="
                text-2xl
                font-black
                uppercase
                tracking-tight
              "
            >
              KULDEEP
              <span className="text-lime-400">
                .
              </span>
            </a>

            <p
              className="
                mt-3
                max-w-xs
                text-[9px]
                leading-5
                text-gray-700
              "
            >
              Full-Stack Developer building modern
              web applications, AI-powered products
              and scalable digital experiences.
            </p>

            {/* Resume */}

            <motion.a
              href={resume}
              download="resume.pdf"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-md
                border
                border-lime-400/30
                bg-lime-400/5
                px-4
                py-2.5
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-lime-400
                transition-all
                duration-300
                hover:border-lime-400
                hover:bg-lime-400
                hover:text-black
                hover:shadow-[0_0_20px_rgba(132,255,0,0.2)]
              "
            >
              <FaDownload className="h-3 w-3" />

              Download CV
            </motion.a>
          </motion.div>


          {/* NAVIGATION */}

          <div>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="
                mb-5
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-gray-700
              "
            >
              Navigation
            </motion.p>

            <div className="grid grid-cols-2 gap-y-4">
              {navigation.map((item, index) => (
                <FooterLink
                  key={item.label}
                  {...item}
                  index={index}
                />
              ))}
            </div>
          </div>


          {/* SOCIAL */}

          <div>
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="
                mb-5
                font-mono
                text-[8px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-gray-700
              "
            >
              Find me online
            </motion.p>

            <div className="grid grid-cols-2 gap-2">
              {socials.map((social, index) => (
                <SocialLink
                  key={social.name}
                  social={social}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>


        {/* ===================================================
            MARQUEE
        =================================================== */}

        <NameMarquee />


        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-4
            py-5

            sm:flex-row
            sm:items-center
          "
        >

          <p
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-gray-700
            "
          >
            © {new Date().getFullYear()} Kuldeep Kumar.
            All rights reserved.
          </p>


          <div
            className="
              flex
              items-center
              gap-4
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-gray-700
            "
          >
            <span>
              Built with React
            </span>

            <span className="text-lime-400">
              ●
            </span>

            <a
              href="#"
              className="transition-colors hover:text-lime-400"
            >
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;