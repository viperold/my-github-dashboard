"use client";

import { motion } from "framer-motion";
import Services from "@/components/landing/Services";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXTO STARTUP */}
        <div className="space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold leading-tight"
          >
            CeroUno <br />
            <span className="text-[#69daff]">
              Soluciones Digitales
            </span>
          </motion.h1>

          <p className="text-gray-400 max-w-md">
            Creamos software a medida, aplicaciones móviles y plataformas web
            escalables para empresas y emprendedores que buscan transformar sus ideas en realidad,
            y avanzar en el uso de tecnología para mejorar sus procesos y resultados.
            Confía en CeroUno para llevar tu proyecto al siguiente nivel con innovación, calidad y compromiso.
            <br />
            Además de que puedes contar con servicio de mantenimiento preventivo y correctivo para computadoras, 
            revisamos los equipos.
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
              Ver Plataforma
            </a>

            <a
              href="#about"
              className="border border-white/10 px-6 py-3 rounded hover:bg-white/5 transition"
            >
              Conócenos
            </a>
          </motion.div>

        </div>

        {/* PREVIEW */}
        <div className="bg-[#141a20]/60 p-6 rounded-xl border border-white/5 backdrop-blur-md">
          <p className="text-sm text-gray-400 mb-4">
            Qué podemos construir para ti
          </p>

          <Services />
        </div>

      </div>
    </section>
  );
}