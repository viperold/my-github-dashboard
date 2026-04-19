"use client";

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

import DashboardPreview from "@/components/dashboard/DashboardPreview";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0a0f14] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f14]/80 backdrop-blur-lg px-6 py-4 flex justify-between">
        <h1 className="text-[#69daff] font-bold text-xl">
          CeroUno: Soluciones Digitales
        </h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="/dashboard" className="text-[#69daff] font-semibold">
            Dashboard
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="space-y-6">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl font-bold leading-tight"
            >
              Fernando Gómez <br />
              <span className="text-[#69daff]">Command Your Code</span>
            </motion.h1>

            <p className="text-gray-400 max-w-md">
              GitHub analytics dashboard that visualizes repositories,
              activity, technologies and performance in real time.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              <a
                href="/dashboard"
                className="bg-[#69daff] text-black px-6 py-3 rounded font-semibold hover:brightness-110 transition"
              >
                View Dashboard
              </a>

              <a
                href="https://github.com/viperold"
                target="_blank"
                className="border border-white/10 px-6 py-3 rounded hover:bg-white/5 transition"
              >
                GitHub
              </a>
            </motion.div>

          </div>

          {/* PREVIEW */}
          <DashboardPreview />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Fullstack developer focused on scalable systems, data visualization
              and modern architectures. This dashboard showcases real-time GitHub
              analytics using Next.js.
            </p>
          </div>

          <div className="bg-[#141a20] p-6 rounded-xl border border-white/5">
            <h3 className="mb-4 font-bold text-[#69daff]">
              Expertise
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>• Mobile app developer</li>
              <li>• Fullstack Developer</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="py-24 px-10 bg-[#0a0f14]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16 text-white">
            Lenguajes y herramientas más utilizadas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {[
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
            ].map((tech) => (
              <div
                key={tech.name}
                className={`relative p-10 rounded-2xl border bg-[#141a20]/80 backdrop-blur-md
                  transition-all duration-300 hover:scale-105 hover:-translate-y-2
                  hover:shadow-[0_0_40px_rgba(105,218,255,0.3)]
                  ${tech.glow}`}
              >

                {/* Glow overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-10 blur-xl bg-gradient-to-br from-white/10 to-transparent"></div>

                {/* Content */}
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

    </main>
  );
}