import KPICard from "@/components/atoms/KPICard";
import { YearlySales } from "@/types/sales";

export default function SummarySection({ yearData }: { yearData: YearlySales }) {
  const avg = Math.round(yearData.totalRevenue / 12);
  const best = [...yearData.data].sort((a, b) => b.revenue - a.revenue)[0];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <KPICard title="Total Revenue" value={`$${(yearData.totalRevenue/1000).toFixed(0)}k`} subtitle={`Full year ${yearData.year}`} icon="💰" />
      <KPICard title="Units Sold" value={yearData.totalUnits.toLocaleString()} subtitle="Across all months" icon="📦" />
      <KPICard title="Monthly Avg" value={`$${(avg/1000).toFixed(0)}k`} subtitle="Average per month" icon="📊" />
      <KPICard title="Best Month" value={best.month} subtitle={`$${best.revenue.toLocaleString()}`} icon="🏆" />
    </div>
  );
}