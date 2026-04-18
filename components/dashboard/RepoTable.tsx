"use client";

import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
};

export default function RepoTable() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
  fetch("/api/github")
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((data) => {
      setRepos(data);
      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
  }, []);



    if (loading) {
    return <p className="text-gray-400">Cargando repos...</p>;
  }

  if (error) {
    return <p className="text-red-400">Error cargando repos</p>;
  }

  return (
    <div className="bg-[#141a20] rounded-xl border border-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/5">
        <h3 className="font-bold text-lg">Repositories</h3>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr className="text-left">
            <th className="p-4">Name</th>
            <th className="p-4">Language</th>
            <th className="p-4">Stars</th>
            <th className="p-4">Updated</th>
          </tr>
        </thead>

        <tbody>
          {repos.map((repo) => (
            <tr
              key={repo.id}
              className="border-t border-white/5 hover:bg-[#1f262e] transition"
            >
              <td className="p-4 font-medium text-white">
                {repo.name}
              </td>

              <td className="p-4 text-gray-400">
                {repo.language || "N/A"}
              </td>

              <td className="p-4 text-yellow-400">
                ⭐ {repo.stargazers_count}
              </td>

              <td className="p-4 text-gray-500">
                {new Date(repo.updated_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}