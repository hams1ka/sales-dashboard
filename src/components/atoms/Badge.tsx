interface BadgeProps {
  label: string;
  color?: "green" | "blue" | "purple";
}

export default function Badge({ label, color = "blue" }: BadgeProps) {
  const colors = {
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-violet-100 text-violet-700",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colors[color]}`}>
      {label}
    </span>
  );
}