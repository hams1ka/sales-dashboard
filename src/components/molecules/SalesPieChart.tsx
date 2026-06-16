"use client";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { MonthlySale } from "@/types/sales";

const COLORS = ["#7c3aed","#a78bfa","#c4b5fd","#ddd6fe","#ede9fe","#f5f3ff",
  "#6d28d9","#8b5cf6","#5b21b6","#4c1d95","#3730a3","#312e81"];

export default function SalesPieChart({ data }: { data: MonthlySale[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={100} label>
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        <Tooltip formatter={(v) => `$${Number(v).toLocaleString()}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
