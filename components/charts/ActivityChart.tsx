"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Repo = {
  updated_at: string;
};

function groupByDate(repos: Repo[]) {
  const map: Record<string, number> = {};

  repos.forEach((repo) => {
    const date = new Date(repo.updated_at).toLocaleDateString();

    map[date] = (map[date] || 0) + 1;
  });

  return Object.entries(map).map(([date, count]) => ({
    date,
    count,
  }));
}

export default function ActivityChart({ repos }: { repos: Repo[] }) {
  const data = groupByDate(repos);

  return (
    <div className="bg-[#141a20] p-6 rounded-xl border border-white/5">
      <h3 className="mb-4 font-bold">Activity</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="count"
            stroke="#69daff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}