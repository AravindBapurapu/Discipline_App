export default function HabitRowProgress({ percent }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-10 w-10">
        <svg viewBox="0 0 36 36" className="h-10 w-10 -rotate-90">
          <path
            d="M18 2.5
               a 15.5 15.5 0 0 1 0 31
               a 15.5 15.5 0 0 1 0 -31"
            fill="none"
            stroke="#dbe7d8"
            strokeWidth="3"
          />
          <path
            d="M18 2.5
               a 15.5 15.5 0 0 1 0 31
               a 15.5 15.5 0 0 1 0 -31"
            fill="none"
            stroke="#69b578"
            strokeWidth="3"
            strokeDasharray={`${percent}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-emerald-700">
          {percent}%
        </div>
      </div>
    </div>
  );
}