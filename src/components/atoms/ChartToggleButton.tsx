import { ChartType } from "@/types/sales";

interface Props {
  type: ChartType;
  active: boolean;
  onClick: () => void;
}

export default function ChartToggleButton({ type, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-violet-600 text-white shadow"
          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
      }`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );
}