import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import ContactForm from "./ContactForm";

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

const SocialCard = ({ social, index }) => {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.href}
      target={social.href !== "#" ? "_blank" : undefined}
      rel={social.href !== "#" ? "noreferrer" : undefined}
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
        amount: 0.3,
      }}
      transition={{
        delay: 0.35 + index * 0.06,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
        group
        relative
        flex
        items-center
        justify-between
        overflow-hidden
        border
        border-white/[0.07]
        bg-[#030603]
        px-3
        py-3
        transition-colors
        duration-300
        hover:border-white/[0.15]
      "
    >
      {/* Hover Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `linear-gradient(90deg, ${social.color}08, transparent)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-3">
        {/* Icon */}
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            border
            border-white/[0.08]
            bg-white/[0.02]
            transition-all
            duration-300
            group-hover:border-white/[0.15]
          "
        >
          <Icon
            size={15}
            style={{
              color: social.color,
            }}
          />
        </div>

        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.16em] text-gray-300">
            {social.name}
          </p>

          <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-gray-700">
            Find me
          </p>
        </div>
      </div>

      <span className="relative z-10 text-xs text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
        ↗
      </span>
    </motion.a>
  );
};

const Contact = () => {
  // ============================================
  // FORM 3D MOTION
  // ============================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 25,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 25,
    mass: 0.4,
  });

  const rotateX = useTransform(
    springY,
    [-100, 100],
    [0.8, -0.8]
  );

  const rotateY = useTransform(
    springX,
    [-100, 100],
    [-0.8, 0.8]
  );

  const handleFormMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX -
      (rect.left + rect.width / 2);

    const y =
      event.clientY -
      (rect.top + rect.height / 2);

    mouseX.set(x * 0.04);
    mouseY.set(y * 0.04);
  };

  const resetFormMotion = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section
        id="contact"
        className="
          relative
          overflow-hidden
          border-t
          border-[#9CFF00]/10
          bg-[#020502]
          py-20
          text-white
          md:py-24
        "
      >
        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#9CFF00]/5
            blur-[130px]
          "
          animate={{
            opacity: [0.35, 0.55, 0.35],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 7,
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
            opacity-[0.02]
          "
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 4px)",
          }}
        />

        <div className="container relative mx-auto px-5 sm:px-6">

          {/* =================================================
              HEADER
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Section Number */}
            <div className="mb-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em]">
              <span className="text-[#9CFF00]">
                04
              </span>

              <span className="text-gray-700">
                /
              </span>

              <span className="text-gray-500">
                CONTACT
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-4xl
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              LET'S BUILD{" "}

              <span className="text-[#9CFF00]">
                SOMETHING.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500 md:text-base md:leading-7">
              Have a project in mind, an idea you'd like
              to explore, or just want to talk tech?
              I'm always open to interesting conversations
              and new opportunities.
            </p>
          </motion.div>

          {/* =================================================
              MAIN GRID
          ================================================= */}

          <div
            className="
              mt-12
              grid
              gap-5
              lg:grid-cols-[0.72fr_1.28fr]
            "
          >

            {/* =================================================
                LEFT SIDE — CONTACT INFO
            ================================================= */}

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
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                border
                border-[#9CFF00]/15
                bg-[#050805]
                p-5
                sm:p-6
                md:p-7
              "
            >

              {/* Availability */}
              <div className="mb-8 flex items-center gap-3 border-b border-white/[0.06] pb-5">
                <motion.span
                  animate={{
                    opacity: [1, 0.3, 1],
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
                    shadow-[0_0_10px_#9CFF00]
                  "
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9CFF00]">
                  Available for opportunities
                </span>
              </div>

              {/* Email */}
              <div className="mb-7">
                <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
                  Email
                </p>

                <a
                  href="mailto:kk761734@gmail.com"
                  className="
                    break-all
                    text-base
                    font-bold
                    text-gray-300
                    transition-colors
                    hover:text-[#9CFF00]
                    md:text-lg
                  "
                >
                  kk761734@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="mb-7">
                <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
                  Location
                </p>

                <p className="text-base font-bold text-gray-300">
                  India
                </p>
              </div>

              {/* Socials */}
              <div>
                <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-600">
                  Find Me On
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {socials.map((social, index) => (
                    <SocialCard
                      key={social.name}
                      social={social}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT SIDE — CONTACT FORM
            ================================================= */}

            <ContactForm
              rotateX={rotateX}
              rotateY={rotateY}
              handleFormMove={handleFormMove}
              resetFormMotion={resetFormMotion}
            />

          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <motion.div
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
              duration: 0.5,
              delay: 0.2,
            }}
            className="
              mt-9
              flex
              flex-col
              items-start
              justify-between
              gap-4
              border-t
              border-white/[0.06]
              pt-5
              md:flex-row
              md:items-center
            "
          >
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-700">
                Response time
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Usually within 24 hours.
              </p>
            </div>

            <a
              href="mailto:kk761734@gmail.com"
              className="
                text-xs
                font-bold
                text-gray-500
                transition-colors
                hover:text-[#9CFF00]
              "
            >
              Prefer email? Let's talk ↗
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;