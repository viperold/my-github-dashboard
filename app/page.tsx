"use client";

import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import TechStack from "@/components/landing/TechStack";

export default function Home() {
  return (
    <main className="bg-[#0a0f14] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f14]/80 backdrop-blur-lg px-6 py-4 flex justify-between">
        <h1 className="text-[#69daff] font-bold text-xl">
          CeroUno
        </h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="/dashboard" className="text-[#69daff] font-semibold">
            Dashboard
          </a>
        </div>
      </nav>

      <Hero />
      <About />
      <TechStack />

    </main>
  );
}