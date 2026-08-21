import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCode,
  FaDatabase,
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
} from "react-icons/si";

const skillGroups = [
  {
    title: "Core Languages",
    icon: FaCode,
    skills: [
      { name: "JavaScript", icon: SiJavascript, desc: "ES6+ & Async" },
      { name: "TypeScript", icon: SiTypescript, desc: "Type Safety" },
      { name: "Python", icon: FaPython, desc: "Scripting & AI" },
      { name: "SQL", icon: FaDatabase, desc: "Database Queries" },
    ],
  },

  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React.js", icon: FaReact, desc: "Component UI" },
      { name: "Next.js", icon: SiNextdotjs, desc: "Full-Stack React" },
      { name: "Tailwind CSS", icon: SiTailwindcss, desc: "Utility-First UI" },
      { name: "JavaScript", icon: SiJavascript, desc: "Web Development" },
    ],
  },

  {
    title: "Backend",
    icon: FaNodeJs,
    skills: [
      { name: "Node.js", icon: FaNodeJs, desc: "JavaScript Runtime" },
      { name: "Express.js", icon: SiExpress, desc: "REST APIs" },
      { name: "MongoDB", icon: SiMongodb, desc: "NoSQL Database" },
      { name: "PostgreSQL", icon: SiPostgresql, desc: "Relational DB" },
    ],
  },

  {
    title: "Tools & DevOps",
    icon: FaGitAlt,
    skills: [
      { name: "Git", icon: FaGitAlt, desc: "Version Control" },
      { name: "GitHub", icon: FaGithub, desc: "Code & Projects" },
      { name: "Docker", icon: FaDocker, desc: "Containers" },
      { name: "Postman", icon: SiPostman, desc: "API Testing" },
    ],
  },

  {
    title: "AI / GenAI",
    icon: SiOpenaigym,
    skills: [
      { name: "OpenAI", icon: SiOpenaigym, desc: "AI Integration" },
      { name: "AI APIs", icon: SiOpenaigym, desc: "LLM Applications" },
      { name: "Automation", icon: FaCode, desc: "AI Workflows" },
      { name: "Prompt Engineering", icon: FaCode, desc: "AI Systems" },
    ],
  },

  {
    title: "APIs & Database",
    icon: FaDatabase,
    skills: [
      { name: "REST APIs", icon: FaCode, desc: "API Architecture" },
      { name: "MongoDB", icon: SiMongodb, desc: "NoSQL Data" },
      { name: "PostgreSQL", icon: SiPostgresql, desc: "SQL Database" },
      { name: "Express.js", icon: SiExpress, desc: "Backend APIs" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden px-6 py-12 md:px-8 lg:px-10 container m-auto"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-lime-400/[0.025] blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-green-500/[0.02] blur-[120px]" />

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.025] [background-image:linear-gradient(rgba(132,255,0,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(132,255,0,0.6)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="mx-auto max-w-[1500px]">

        {/* ================================================= */}
        {/* TOP SECTION HEADING                               */}
        {/* ================================================= */}

        <div className="flex items-end justify-between border-b border-white/5 pb-7">

          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-lime-400">
                02.
              </span>

              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Skills
              </span>
            </div>

            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
              My Tech{" "}
              <span className="text-lime-400 drop-shadow-[0_0_18px_rgba(132,255,0,0.15)]">
                Arsenal.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
              Technologies I use to build modern, scalable and
              production-ready digital products.
            </p>
          </div>

          {/* Top right status */}
          <div className="hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.25em] text-gray-600 lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400 shadow-[0_0_8px_#84ff00]" />
            Stack Online
          </div>

        </div>

        {/* ================================================= */}
        {/* 6 COLUMNS                                         */}
        {/* ================================================= */}

        <div className="mt-8 grid gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div key={group.title} className="min-w-0">

                {/* COLUMN HEADING */}
                <div className="mb-4 min-h-[58px] border-b border-lime-400/10 pb-3">

                  <div className="flex items-start gap-2.5">

                    <GroupIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime-400 drop-shadow-[0_0_5px_rgba(132,255,0,0.3)]" />

                    <h3 className="font-mono text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-gray-200">
                      {group.title}
                    </h3>

                  </div>

                </div>

                {/* ================================================= */}
                {/* SKILLS - LINE BY LINE UNDER THEIR HEADING         */}
                {/* ================================================= */}

                <div className="space-y-2.5">

                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group relative flex min-h-[72px] cursor-default items-center gap-3 overflow-hidden rounded-xl border border-white/5 bg-[#080d08]/90 px-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/35 hover:bg-lime-400/[0.045] hover:shadow-[0_0_22px_rgba(132,255,0,0.07)]"
                      >

                        {/* Left hover indicator */}
                        <div className="absolute bottom-0 left-0 top-0 w-0 bg-lime-400/0 transition-all duration-300 group-hover:w-[2px] group-hover:bg-lime-400 group-hover:shadow-[0_0_8px_#84ff00]" />

                        {/* Icon box */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.025] transition-all duration-300 group-hover:border-lime-400/20 group-hover:bg-lime-400/10">
                          <Icon className="h-4 w-4 text-gray-500 transition-colors duration-300 group-hover:text-lime-400" />
                        </div>

                        {/* Content */}
                        <div className="min-w-0">
                          <p className="truncate text-xs font-bold text-gray-200 transition-colors group-hover:text-lime-300">
                            {skill.name}
                          </p>

                          <p className="mt-1 truncate font-mono text-[7px] uppercase tracking-wider text-gray-600">
                            {skill.desc}
                          </p>
                        </div>

                        {/* Arrow */}
                        <span className="ml-auto text-[9px] text-lime-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>

                        {/* Bottom glow line */}
                        <div className="absolute bottom-0 left-0 h-px w-0 bg-lime-400 shadow-[0_0_8px_#84ff00] transition-all duration-500 group-hover:w-full" />

                      </div>
                    );
                  })}

                </div>
              </div>
            );
          })}

        </div>

        {/* ================================================= */}
        {/* BOTTOM STATUS                                     */}
        {/* ================================================= */}

        <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-5">

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-gray-700">
            06 Categories
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-lime-400/20 to-transparent" />

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-lime-500/50">
            Learn · Build · Ship
          </span>

        </div>

      </div>
    </section>
  );
};

export default Skills;