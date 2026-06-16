interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}

export default function KPICard({ title, value, subtitle, icon }: KPICardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500 font-medium">{title}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
      <p className="text-xs text-slate-400">{subtitle}</p>
    </div>
  );
}