"use client";

import { useEffect, useState } from "react";
import KpiCard from "@/components/dashboard/KpiCard";
import ActivityChart from "@/components/charts/ActivityChart";
import LanguagesChart from "@/components/charts/LanguagesChart";

type Repo = {
  id: number;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

type Metrics = {
  totalRepos: number;
  totalStars: number;
  topLanguage: string;
};

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("/api/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data));

    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  if (!metrics) {
    return <p className="text-gray-400">Cargando...</p>;
  }

  return (
    <div className="space-y-8">

      {/* KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard
          title="Total Repositories"
          value={metrics.totalRepos}
          subtitle="repos públicos"
        />

        <KpiCard
          title="Total Stars"
          value={metrics.totalStars}
          subtitle="acumuladas"
          variant="secondary"
        />

        <KpiCard
          title="Top Language"
          value={metrics.topLanguage}
          subtitle="más usado"
          variant="tertiary"
        />
      </section>

      {/* Chart */}
      <ActivityChart repos={repos} />
      <LanguagesChart repos={repos} />

    </div>
  );
}