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

  const handleReset = () => {
    setChartType("bar");
    setMinRevenue(0);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">{year} Monthly Revenue</h2>
          <p className="text-sm text-slate-400">Superstore Sales Dataset</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["bar", "line", "pie"] as ChartType[]).map((t) => (
            <ChartToggleButton key={t} type={t} active={chartType === t} onClick={() => setChartType(t)} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <FilterInput value={minRevenue} onChange={setMinRevenue} />
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-xl text-sm font-medium bg-red-100 text-red-600 hover:bg-red-200 transition-all"
        >
          Reset
        </button>
      </div>

      {chartType === "bar" && <SalesBarChart data={filtered} />}
      {chartType === "line" && <SalesLineChart data={filtered} />}
      {chartType === "pie" && <SalesPieChart data={filtered} />}
    </div>
  );
}
