"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Desarrollo Web",
    desc: "Plataformas web modernas, rápidas y escalables adaptadas a tu negocio.",
    icon: "🌐",
  },
  {
    title: "Apps Móviles",
    desc: "Aplicaciones Android & iOS con experiencia de usuario optimizada.",
    icon: "📱",
  },
  {
    title: "Software a Medida",
    desc: "Sistemas personalizados que automatizan y optimizan procesos.",
    icon: "⚙️",
  },
  {
    title: "Dashboards & Data",
    desc: "Visualización de datos en tiempo real para la toma de decisiones.",
    icon: "📊",
  },
  {
    title: "Automatización",
    desc: "Integraciones y flujos automáticos que ahorran tiempo y costos.",
    icon: "🔄",
  },
  {
    title: "Cloud & Escalabilidad",
    desc: "Infraestructura preparada para crecer con tu empresa.",
    icon: "☁️",
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-2 gap-4">

      {services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-5 bg-[#141a20]/80 border border-white/5 rounded-xl
                     backdrop-blur-md hover:scale-105 transition-all duration-300
                     hover:shadow-[0_0_25px_rgba(105,218,255,0.2)]"
        >
          <div className="text-2xl mb-2">
            {service.icon}
          </div>

          <h3 className="font-semibold text-white text-sm mb-1">
            {service.title}
          </h3>

          <p className="text-xs text-gray-400 leading-snug">
            {service.desc}
          </p>
        </motion.div>
      ))}

    </div>
  );
}