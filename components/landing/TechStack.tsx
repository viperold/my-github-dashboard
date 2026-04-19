import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFlutter,
  SiDjango,
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";

export default function TechStack() {
  const techStack = [
    {
      name: "React",
      icon: <SiReact className="text-cyan-400 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(0,255,255,0.4)] border-cyan-400"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(0,123,255,0.4)] border-blue-500"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(255,255,255,0.3)] border-white"
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="text-cyan-400 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(0,200,255,0.4)] border-sky-400"
    },
    {
      name: "Django",
      icon: <SiDjango className="text-green-400 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(0,255,120,0.4)] border-green-400"
    },
    {
      name: "Python",
      icon: <SiPython className="text-yellow-400 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(255,255,0,0.4)] border-yellow-400"
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="text-orange-500 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(255,100,0,0.4)] border-orange-500"
    },
    {
      name: "CSS",
      icon: <SiCss className="text-blue-600 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(0,100,255,0.4)] border-blue-600"
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 text-5xl" />,
      glow: "shadow-[0_0_25px_rgba(255,255,0,0.4)] border-yellow-500"
    }
  ];

  return (
    <section id="stack" className="py-24 px-10 bg-[#0a0f14]">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-16 text-white">
          Tecnologías que utilizamos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={`relative p-10 rounded-2xl border bg-[#141a20]/80 backdrop-blur-md
                transition-all duration-300 hover:scale-105 hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(105,218,255,0.3)]
                ${tech.glow}`}
            >

              <div className="absolute inset-0 rounded-2xl opacity-10 blur-xl bg-gradient-to-br from-white/10 to-transparent"></div>

              <div className="relative z-10 flex flex-col items-center gap-4 group">

                <div className="transition-transform duration-300 group-hover:scale-125">
                  {tech.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {tech.name}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}