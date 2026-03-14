import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function SummaryCards() {
  const { overallStats, reportView, weeklyReport } = useContext(HabitContext);

  const currentWeeklyAverage =
    weeklyReport.length === 0
      ? 0
      : Math.round(
          weeklyReport.reduce((sum, item) => sum + item.percent, 0) / weeklyReport.length
        );

  const percent = reportView === "monthly" ? overallStats.percent : currentWeeklyAverage;

  const done = reportView === "monthly"
    ? overallStats.totalDone
    : weeklyReport.reduce((sum, item) => sum + item.done, 0);

  const notDone = reportView === "monthly"
    ? overallStats.totalNotDone
    : weeklyReport.reduce((sum, item) => sum + item.notDone, 0);

    

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-3xl bg-[#e9f7ef] p-5 border border-[#d4eddc]">
        <p className="text-sm text-slate-500">Progress</p>
        <h3 className="mt-2 text-3xl font-bold text-emerald-700">{percent}%</h3>
      </div>

      <div className="rounded-3xl bg-[#eef2ff] p-5 border border-[#dfe5ff]">
        <p className="text-sm text-slate-500">Done</p>
        <h3 className="mt-2 text-3xl font-bold text-violet-700">{done}</h3>
      </div>

      <div className="rounded-3xl bg-[#fff4e8] p-5 border border-[#ffe7c7]">
        <p className="text-sm text-slate-500">Not Done</p>
        <h3 className="mt-2 text-3xl font-bold text-amber-700">{notDone}</h3>
      </div>
    </div>
  );
}