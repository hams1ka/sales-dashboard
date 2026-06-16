export type ChartType = "bar" | "line" | "pie";

export interface MonthlySale {
  month: string;
  revenue: number;
  units: number;
}

export interface YearlySales {
  year: number;
  data: MonthlySale[];
  totalRevenue: number;
  totalUnits: number;
}