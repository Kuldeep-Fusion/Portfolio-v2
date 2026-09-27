import { useEffect, useState } from "react";
import {
  ClockIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@animateicons/react/lucide";

const Header = () => {
  const [time, setTime] = useState(new Date());

  // Temporary value
  // Later API se MongoDB ka live visitor count aayega
  const [liveVisitors, setLiveVisitors] = useState(128);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header
      className="
        sticky
        top-0
        z-30
        border-b
        border-white/[0.08]
        bg-[#080b08]/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          min-h-[72px]
          items-center
          justify-between
          gap-4
          px-4

          sm:px-6

          lg:px-8
        "
      >
        {/* ================= LEFT ================= */}

        <div className="min-w-0">
          <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Admin Control
          </p>

          <h1 className="mt-1 truncate text-sm font-black uppercase tracking-[-0.02em] text-white sm:text-base">
            Overview
          </h1>
        </div>

        {/* ================= STATS ================= */}

        <div className="flex items-center gap-2 sm:gap-3">

          {/* TIME */}

          <div
            className="
              hidden
              items-center
              gap-2
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-3
              py-2

              sm:flex
            "
          >
            <ClockIcon
              size={15}
              duration={0.5}
              className="text-[#9CFF00]"
            />

            <div>
              <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-600">
                Time
              </p>

              <p className="mt-0.5 whitespace-nowrap text-[9px] font-bold tracking-wide text-gray-300">
                {formattedTime}
              </p>
            </div>
          </div>

          {/* DATE */}

          <div
            className="
              hidden
              items-center
              gap-2
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-3
              py-2

              md:flex
            "
          >
            <CalendarDaysIcon
              size={15}
              duration={0.5}
              className="text-[#9CFF00]"
            />

            <div>
              <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-gray-600">
                Date
              </p>

              <p className="mt-0.5 whitespace-nowrap text-[9px] font-bold uppercase tracking-wide text-gray-300">
                {formattedDate}
              </p>
            </div>
          </div>

          {/* LIVE VISITORS */}

          <div
            className="
              flex
              items-center
              gap-2
              border
              border-[#9CFF00]/15
              bg-[#9CFF00]/[0.04]
              px-3
              py-2
            "
          >
            <div className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#9CFF00] opacity-30" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
            </div>

            <UsersIcon
              size={14}
              duration={0.5}
              className="hidden text-[#9CFF00] sm:block"
            />

            <div>
              <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-[#9CFF00]/60">
                Live Visitors
              </p>

              <p className="mt-0.5 text-[10px] font-black tracking-wide text-[#9CFF00]">
                {liveVisitors}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DATE / TIME */}

      <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-2 sm:hidden">
        <div className="flex items-center gap-2">
          <ClockIcon
            size={12}
            duration={0.5}
            className="text-gray-600"
          />

          <span className="text-[8px] font-bold tracking-wider text-gray-400">
            {formattedTime}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDaysIcon
            size={12}
            duration={0.5}
            className="text-gray-600"
          />

          <span className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
            {formattedDate}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;