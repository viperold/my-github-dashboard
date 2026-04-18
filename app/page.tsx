export default function Home() {
  return (
    <main className="bg-[#0a0f14] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f14]/80 backdrop-blur-lg px-6 py-4 flex justify-between">
        <h1 className="text-[#69daff] font-bold text-xl">SYNTHCORE</h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="/dashboard" className="text-[#69daff]">
            Dashboard
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold leading-tight">
              Fernando Gómez <br />
              <span className="text-[#69daff]">Command Your Code</span>
            </h1>

            <p className="text-gray-400 max-w-md">
              GitHub analytics dashboard that visualizes repositories,
              activity, technologies and performance in real time.
            </p>

            <div className="flex gap-4">
              <a
                href="/dashboard"
                className="bg-[#69daff] text-black px-6 py-3 rounded font-semibold"
              >
                View Dashboard
              </a>

              <a
                href="https://github.com/viperold"
                target="_blank"
                className="border border-white/10 px-6 py-3 rounded"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* PREVIEW */}
          <div className="bg-[#141a20] rounded-xl border border-white/5 p-6">
            <p className="text-sm text-gray-400 mb-4">
              Dashboard Preview
            </p>

            <div className="h-48 bg-[#1f262e] rounded flex items-end gap-1 p-4">
              <div className="flex-1 bg-[#69daff]/40 h-1/3"></div>
              <div className="flex-1 bg-[#69daff] h-2/3"></div>
              <div className="flex-1 bg-[#69daff]/60 h-full"></div>
              <div className="flex-1 bg-[#69daff]/30 h-1/2"></div>
            </div>
          </div>

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
              <li>• Fullstack Development</li>
              <li>• AI & Data</li>
              <li>• Cybersecurity</li>
              <li>• Cloud Systems</li>
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
                  className="p-6 bg-[#141a20] border border-white/5 rounded"
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