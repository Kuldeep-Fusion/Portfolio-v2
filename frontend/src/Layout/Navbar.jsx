// import { AnimatedThemeToggler } from "../components/ui/animated-theme-toggler";
// // import { Button } from "@base-ui/react";
// // import { Moon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className="relative mx-auto mt-5 w-[calc(100%-2rem)] max-w-7xl overflow-hidden rounded-lg border border-lime-400/30 bg-[#080c08]/95 px-5 py-4 text-white shadow-[0_0_30px_rgba(132,255,0,0.08),inset_0_0_30px_rgba(132,255,0,0.025)] backdrop-blur-xl md:px-6">

      {/* Gaming HUD glow */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-lime-400 to-transparent shadow-[0_0_12px_#84ff00]" />

      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="group relative font-black uppercase tracking-wider text-white transition-all hover:text-lime-300"
        >
          <span className="text-2xl">KULDEEP</span>
          <span className="ml-1 text-lime-400 drop-shadow-[0_0_8px_rgba(132,255,0,0.8)]">
            .
          </span>

          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime-400 shadow-[0_0_8px_#84ff00] transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="group relative flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-400 transition-all hover:text-lime-300"
              >
                <span className="text-[9px] text-lime-500/60">
                  0{index + 1}
                </span>

                {item}

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-lime-400 shadow-[0_0_8px_#84ff00] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">

          {/* Player Status */}
          <div className="hidden items-center gap-2 rounded border border-lime-400/20 bg-lime-400/5 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-lime-400 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]" />
            ONLINE
          </div>

          {/* Theme Button */}
          {/* <Button
            aria-label="Toggle theme"
            className="rounded border border-lime-400/20 bg-lime-400/5 p-2 text-lime-400 transition-all hover:border-lime-400 hover:bg-lime-400/10 hover:shadow-[0_0_15px_rgba(132,255,0,0.25)]"
          >           
      <AnimatedThemeToggler />

          </Button> */}

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded border border-lime-400/20 bg-lime-400/5 p-2 text-lime-400 transition-all hover:border-lime-400 hover:bg-lime-400/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="mt-5 space-y-1 border-t border-lime-400/10 pt-4 md:hidden">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="group flex items-center rounded border border-transparent px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-gray-400 transition-all hover:border-lime-400/20 hover:bg-lime-400/5 hover:text-lime-300"
              >
                <span className="mr-3 text-lime-500/60">
                  0{index + 1}
                </span>

                {item}

                <span className="ml-auto text-lime-400 opacity-0 transition-opacity group-hover:opacity-100">
                  ▶
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* HUD Footer */}
      {/* <div className="mt-4 flex items-center gap-2 opacity-50">
        <span className="font-mono text-[8px] tracking-[0.25em] text-lime-400">
          PLAYER_01
        </span>

        <div className="h-px flex-1 bg-lime-400/30" />

        <span className="font-mono text-[8px] tracking-[0.2em] text-gray-500">
          READY
        </span>
      </div> */}
    </nav>
  );
};

export default Navbar;