"use client";
import { useState } from "react";
import DashboardLayout from "@/components/templates/DashboardLayout";
import SummarySection from "@/components/organisms/SummarySection";
import ChartSection from "@/components/organisms/ChartSection";
import Badge from "@/components/atoms/Badge";
import { salesData } from "@/data/salesData";

export default function DashboardPage() {
  const years = salesData.map((d) => d.year);
  const [selectedYear, setSelectedYear] = useState(2024);
  const yearData = salesData.find((d) => d.year === selectedYear)!;

  return (
    <DashboardLayout>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <h2 className="text-xl font-bold text-slate-700">Sales Overview</h2>
        <Badge label="Superstore Dataset" color="purple" />
      </div>

      <div className="flex gap-2 mb-6">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setSelectedYear(y)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
              selectedYear === y
                ? "bg-violet-600 text-white shadow"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <SummarySection yearData={yearData} />
        <ChartSection data={yearData.data} year={selectedYear} />
      </div>
    </DashboardLayout>
  );
}
