"use client";
import { useState } from "react";
import { MonthlySale, ChartType } from "@/types/sales";
import SalesBarChart from "@/components/molecules/SalesBarChart";
import SalesLineChart from "@/components/molecules/SalesLineChart";
import SalesPieChart from "@/components/molecules/SalesPieChart";
import ChartToggleButton from "@/components/atoms/ChartToggleButton";
import FilterInput from "@/components/molecules/FilterInput";

interface Props {
  data: MonthlySale[];
  year: number;
}

export default function ChartSection({ data, year }: Props) {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [minRevenue, setMinRevenue] = useState(0);

  const filtered = data.filter((d) => d.revenue >= minRevenue);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800">{year} Monthly Revenue</h2>
          <p className="text-sm text-slate-400">Superstore Sales Dataset</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["bar", "line", "pie"] as ChartType[]).map((t) => (
            <ChartToggleButton key={t} type={t} active={chartType === t} onClick={() => setChartType(t)} />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <FilterInput value={minRevenue} onChange={setMinRevenue} />
      </div>

      {chartType === "bar" && <SalesBarChart data={filtered} />}
      {chartType === "line" && <SalesLineChart data={filtered} />}
      {chartType === "pie" && <SalesPieChart data={filtered} />}
    </div>
  );
}