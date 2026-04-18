"use client";

import DashboardPreview from "@/components/dashboard/DashboardPreview";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#0a0f14] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f14]/80 backdrop-blur-lg px-6 py-4 flex justify-between">
        <h1 className="text-[#69daff] font-bold text-xl">CeroUno: Soluciones Digitales</h1>

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

          {/* PREVIEW REAL */}
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

      {/* STACK */}
      <section id="stack" className="py-24 px-10 bg-[#0e1419]">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">

            {["React", "TypeScript", "Next.js", "Go", "Django", "Docker"].map(
              (tech) => (
                <div
                  key={tech}
                  className="p-6 bg-[#141a20] border border-white/5 rounded hover:border-[#69daff]/40 transition"
                >
                  {tech}
                </div>
              )
            )}

          </div>

        </div>
      </section>

    </main>
  );
}