export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center gap-3">
        <div>
          <h1 className="text-lg font-bold text-slate-800">SalesScope</h1>
          <p className="text-xs text-slate-400">Superstore Sales Dashboard - 2022 to 2024</p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
