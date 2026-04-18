"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-2 py-2 rounded transition ${
      pathname === path
        ? "text-[#69daff] font-semibold bg-[#69daff]/10"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <aside className="w-64 bg-[#0e1419] hidden md:flex flex-col p-6">
      <h1 className="text-[#69daff] font-bold text-xl mb-8">
        Neon Command
      </h1>

      <nav className="space-y-2 text-sm">
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>

        <Link href="/dashboard/repos" className={linkClass("/dashboard/repos")}>
          Repositories
        </Link>

        <Link href="#" className="block text-gray-400">
          Pull Requests
        </Link>

        <Link href="#" className="block text-gray-400">
          Issues
        </Link>
      </nav>
    </aside>
  );
}