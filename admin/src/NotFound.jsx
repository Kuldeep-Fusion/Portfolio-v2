
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020502] px-4 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9CFF00]/5 blur-[120px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(156,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(156,255,0,1) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl text-center">

        {/* Status */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9CFF00] shadow-[0_0_10px_#9CFF00]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#9CFF00]">
            ERROR 404
          </span>
        </div>

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            select-none
            text-[110px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.08]

            sm:text-[160px]
            md:text-[190px]
          "
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="-mt-4 sm:-mt-7"
        >
          <h2 className="text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl md:text-4xl">
            Page Not Found<span className="text-[#9CFF00]">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-gray-500 sm:text-sm">
            The page you're looking for doesn't exist or may have been moved
            to another location.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mx-auto my-7 flex max-w-xs items-center gap-3">
          <span className="h-px flex-1 bg-[#9CFF00]/10" />
          <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-700">
            SYSTEM
          </span>
          <span className="h-px flex-1 bg-[#9CFF00]/10" />
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/"
            className="
              inline-flex
              min-h-[42px]
              w-full
              items-center
              justify-center
              gap-2
              bg-[#9CFF00]
              px-6
              py-3
              text-[8px]
              font-black
              uppercase
              tracking-[0.2em]
              text-black
              transition-all
              duration-300
              hover:shadow-[0_0_30px_rgba(156,255,0,0.3)]

              sm:w-auto
            "
          >
            Back Home
            <span>↗</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
              inline-flex
              min-h-[42px]
              w-full
              items-center
              justify-center
              gap-2
              border
              border-white/10
              px-6
              py-3
              text-[8px]
              font-black
              uppercase
              tracking-[0.2em]
              text-gray-400
              transition-all
              duration-300
              hover:border-[#9CFF00]/40
              hover:text-[#9CFF00]

              sm:w-auto
            "
          >
            Go Back
            <span>←</span>
          </button>
        </motion.div>

        {/* Bottom Label */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-px w-5 bg-gray-800" />

          <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-gray-700">
            SYSTEM STATUS: ONLINE
          </span>

          <span className="h-px w-5 bg-gray-800" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
