"use client";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <header className="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-800 dark:text-white">SalesScope</h1>
            <p className="text-xs text-slate-400">Superstore Sales Dashboard - 2022 to 2024</p>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </div>
    </div>
  );
}
