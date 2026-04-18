type KpiCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  variant?: "primary" | "secondary" | "tertiary";
};

export default function KpiCard({
  title,
  value,
  subtitle,
  variant = "primary",
}: KpiCardProps) {
  const colorMap = {
    primary: "text-[#69daff]",
    secondary: "text-[#c180ff]",
    tertiary: "text-[#89a5ff]",
  };

  return (
    <div className="bg-[#141a20] p-8 rounded-xl border border-white/5 relative overflow-hidden group hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(105,218,255,0.1)] transition">
      
      {/* Icon background */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined text-6xl">
          database
        </span>
      </div>

      {/* Title */}
      <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">
        {title}
      </h3>

      {/* Value */}
      <div className="flex items-baseline gap-4">
        <span className={`text-5xl font-bold ${colorMap[variant]}`}>
          {value}
        </span>

        {subtitle && (
          <span className="text-sm px-2 py-1 bg-white/5 rounded-full text-gray-300">
            {subtitle}
          </span>
        )}
      </div>

      {/* Progress bar decorativa */}
      <div className="mt-6 w-full h-1.5 bg-[#1f262e] rounded-full overflow-hidden">
        <div className="h-full bg-[#69daff] w-2/3"></div>
      </div>
    </div>
  );
}