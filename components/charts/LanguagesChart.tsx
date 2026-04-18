"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Repo = {
  language: string | null;
};

const COLORS = [
  "#69daff",
  "#c180ff",
  "#89a5ff",
  "#00c0ea",
  "#dbb4ff",
];

function groupLanguages(repos: Repo[]) {
  const map: Record<string, number> = {};

  repos.forEach((repo) => {
    const lang = repo.language || "Other";

    map[lang] = (map[lang] || 0) + 1;
  });

  return Object.entries(map).map(([name, value]) => ({
    name,
    value,
  }));
}

export default function LanguagesChart({ repos }: { repos: Repo[] }) {
  const data = groupLanguages(repos);

  return (
    <div className="bg-[#141a20] p-6 rounded-xl border border-white/5">
      <h3 className="mb-4 font-bold">Languages</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}