"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Metrics = {
  totalRepos: number;
  totalStars: number;
  topLanguage: string;
};

export default function DashboardPreview() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/metrics")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setMetrics(data))
      .catch(() => setError(true));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#141a20] rounded-xl border border-white/5 p-6 hover:shadow-[0_0_30px_rgba(105,218,255,0.1)] transition"
    >
      <p className="text-sm text-gray-400 mb-4">
        Live Dashboard Preview
      </p>

      {/* ERROR */}
      {error && (
        <p className="text-red-400 text-sm">
          Error loading data
        </p>
      )}

      {/* LOADING */}
      {!metrics && !error && (
        <div className="space-y-4 animate-pulse">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-12 bg-[#1f262e] rounded"></div>
            <div className="h-12 bg-[#1f262e] rounded"></div>
            <div className="h-12 bg-[#1f262e] rounded"></div>
          </div>
          <div className="h-20 bg-[#1f262e] rounded"></div>
        </div>
      )}

      {/* DATA */}
      {metrics && (
        <div className="space-y-4">

          <div className="grid grid-cols-3 gap-4 text-center">

            <div className="p-3 bg-[#1f262e] rounded hover:scale-105 transition">
              <p className="text-xs text-gray-400">Repos</p>
              <p className="font-bold text-[#69daff]">
                {metrics.totalRepos}
              </p>
            </div>

            <div className="p-3 bg-[#1f262e] rounded hover:scale-105 transition">
              <p className="text-xs text-gray-400">Stars</p>
              <p className="font-bold text-[#c180ff]">
                {metrics.totalStars}
              </p>
            </div>

            <div className="p-3 bg-[#1f262e] rounded hover:scale-105 transition">
              <p className="text-xs text-gray-400">Top</p>
              <p className="font-bold text-[#89a5ff]">
                {metrics.topLanguage}
              </p>
            </div>

          </div>

          {/* gráfico animado */}
          <div className="flex gap-1 h-20 items-end mt-4">
            {[20, 40, 60, 30, 80, 50, 70].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-[#69daff] rounded-t"
              />
            ))}
          </div>

        </div>
      )}
    </motion.div>
  );
}