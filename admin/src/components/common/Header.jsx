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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9CFF00]">
            Admin Control
          </p>

          <h1 className="mt-1 truncate text-xl font-black uppercase tracking-[-0.02em] text-white sm:text-2xl">
            Overview
          </h1>
        </div>

        {/* ================= STATS ================= */}

        <div className="flex items-center gap-2 sm:gap-4">

          {/* TIME */}

          <div
            className="
              hidden
              items-center
              gap-3
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-4
              py-2.5

              sm:flex
            "
          >
            <ClockIcon
              size={18}
              duration={0.5}
              className="text-[#9CFF00]"
            />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Time
              </p>

              <p className="mt-0.5 whitespace-nowrap text-sm font-bold tracking-wide text-gray-200">
                {formattedTime}
              </p>
            </div>
          </div>

          {/* DATE */}

          <div
            className="
              hidden
              items-center
              gap-3
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.02]
              px-4
              py-2.5

              md:flex
            "
          >
            <CalendarDaysIcon
              size={18}
              duration={0.5}
              className="text-[#9CFF00]"
            />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Date
              </p>

              <p className="mt-0.5 whitespace-nowrap text-sm font-bold uppercase tracking-wide text-gray-200">
                {formattedDate}
              </p>
            </div>
          </div>

          {/* LIVE VISITORS */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-[#9CFF00]/20
              bg-[#9CFF00]/10
              px-4
              py-2.5
            "
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#9CFF00] opacity-40" />

              <span className="relative h-2 w-2 rounded-full bg-[#9CFF00] shadow-[0_0_8px_#9CFF00]" />
            </div>

            <UsersIcon
              size={18}
              duration={0.5}
              className="hidden text-[#9CFF00] sm:block"
            />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9CFF00]/80">
                Live Visitors
              </p>

              <p className="mt-0.5 text-base font-black tracking-wide text-[#9CFF00]">
                {liveVisitors}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DATE / TIME */}

      <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-3 sm:hidden">
        <div className="flex items-center gap-2">
          <ClockIcon
            size={14}
            duration={0.5}
            className="text-gray-500"
          />

          <span className="text-xs font-bold tracking-wider text-gray-300">
            {formattedTime}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDaysIcon
            size={14}
            duration={0.5}
            className="text-gray-500"
          />

          <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
            {formattedDate}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;