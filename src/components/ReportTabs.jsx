// import { useContext } from "react";
// import { HabitContext } from "../context/HabitContext";

// export default function ReportTabs() {
//   const { reportView, setReportView } = useContext(HabitContext);

//   return (
//     <div className="flex flex-wrap gap-2">
//       <button
//         onClick={() => setReportView("weekly")}
//         className={`rounded-2xl px-4 py-2 text-sm font-medium ${
//           reportView === "weekly"
//             ? "bg-violet-500 text-white"
//             : "bg-white text-slate-600 border border-slate-200"
//         }`}
//       >
//         Weekly Report
//       </button>
//       <button
//         onClick={() => setReportView("monthly")}
//         className={`rounded-2xl px-4 py-2 text-sm font-medium ${
//           reportView === "monthly"
//             ? "bg-violet-500 text-white"
//             : "bg-white text-slate-600 border border-slate-200"
//         }`}
//       >
//         Monthly Report
//       </button>
//     </div>
//   );
// }

import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function ReportTabs() {
  const { reportView, setReportView, weekIndex, setWeekIndex, monthMeta } =
    useContext(HabitContext);

  return (
    <div className="flex flex-wrap items-center gap-3">

      <button
        onClick={() => setReportView("weekly")}
        className={`rounded-xl px-4 py-2 text-sm font-medium ${
          reportView === "weekly"
            ? "bg-violet-500 text-white"
            : "bg-white border border-slate-200"
        }`}
      >
        Weekly Report
      </button>

      <button
        onClick={() => setReportView("monthly")}
        className={`rounded-xl px-4 py-2 text-sm font-medium ${
          reportView === "monthly"
            ? "bg-violet-500 text-white"
            : "bg-white border border-slate-200"
        }`}
      >
        Monthly Report
      </button>

      {reportView === "weekly" && (
        <select
          value={weekIndex}
          onChange={(e) => setWeekIndex(Number(e.target.value))}
          className="rounded-xl border border-slate-300 px-3 py-2"
        >
          {monthMeta.weeks.map((w, i) => (
            <option key={i} value={i}>
              {w.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}