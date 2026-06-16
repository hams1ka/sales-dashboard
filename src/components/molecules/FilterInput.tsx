interface Props {
  value: number;
  onChange: (val: number) => void;
}

export default function FilterInput({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm">
      <label className="text-sm text-slate-500 font-medium whitespace-nowrap">
        Min Revenue ($)
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-32 text-sm font-semibold text-slate-800 border-none outline-none"
        step={5000}
        min={0}
      />
    </div>
  );
}