// import { useContext } from "react";
// import { HabitContext } from "../context/HabitContext";
// import {
// LineChart,
// Line,
// XAxis,
// YAxis,
// Tooltip,
// ResponsiveContainer,
// PieChart,
// Pie,
// Cell,
// Legend,
// Area,
// AreaChart
// } from "recharts";

// import { calculateHabitStats } from "../utils/trackerUtils";

// export default function AnalyticsChart(){

// const {
// chartType,
// setChartType,
// overallStats,
// monthlyLineData,
// habits,
// monthMeta
// } = useContext(HabitContext);

// const pieData = [
// { name:"Done", value: overallStats.totalDone },
// { name:"Not Done", value: overallStats.totalNotDone }
// ];

// const habitDistribution = habits.map(h => ({
// name: h.name,
// value: calculateHabitStats(h, monthMeta.days).percent
// }));

// const COLORS = ["#69b578","#d9dee8","#7c83fd","#f59e0b","#ef4444"];

// return(

// <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5">

// {/* Header */}

// <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

// <div>
// <h3 className="text-xl font-semibold text-slate-800">Analytics</h3>
// <p className="text-sm text-slate-500">
// Dynamic report based on your habit selection
// </p>
// </div>

// <div className="flex gap-2">

// <button
// onClick={()=>setChartType("line")}
// className={`rounded-2xl px-4 py-2 text-sm ${
// chartType==="line"
// ? "bg-violet-500 text-white"
// : "bg-slate-100 text-slate-700"
// }`}
// >
// Line
// </button>

// <button
// onClick={()=>setChartType("pie")}
// className={`rounded-2xl px-4 py-2 text-sm ${
// chartType==="pie"
// ? "bg-violet-500 text-white"
// : "bg-slate-100 text-slate-700"
// }`}
// >
// Pie
// </button>

// <button
// onClick={()=>setChartType("donut")}
// className={`rounded-2xl px-4 py-2 text-sm ${
// chartType==="donut"
// ? "bg-violet-500 text-white"
// : "bg-slate-100 text-slate-700"
// }`}
// >
// Donut
// </button>

// </div>

// </div>


// <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

// {/* Progress Pie */}

// <div className="rounded-3xl bg-slate-50 p-4">

// <div className="h-[260px]">

// <ResponsiveContainer width="100%" height="100%">

// <PieChart>

// <Pie
// data={pieData}
// dataKey="value"
// nameKey="name"
// label
// outerRadius={90}
// innerRadius={chartType==="donut"?55:0}
// >

// {pieData.map((entry,index)=>(
// <Cell key={entry.name} fill={COLORS[index % COLORS.length]}/>
// ))}

// </Pie>

// <Tooltip/>
// <Legend/>

// </PieChart>

// </ResponsiveContainer>

// </div>

// </div>


// {/* Line Graph */}

// <div className="rounded-3xl bg-slate-50 p-4">

// <div className="h-[260px]">

// <ResponsiveContainer width="100%" height="100%">

// <AreaChart data={monthlyLineData}>

// <defs>

// <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">

// <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>

// <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>

// </linearGradient>

// </defs>

// <XAxis dataKey="day"/>
// <YAxis/>
// <Tooltip/>

// <Area
// type="monotone"
// dataKey="percent"
// stroke="#22c55e"
// strokeWidth={1.5}
// fill="url(#colorProgress)"
// />

// </AreaChart>

// </ResponsiveContainer>

// </div>

// </div>

// </div>


// {/* Habit Distribution */}

// <div className="mt-6 rounded-3xl bg-slate-50 p-4">

// <h4 className="text-sm font-semibold text-slate-600 mb-3">
// Habit Completion Distribution
// </h4>

// <div className="h-[260px]">

// <ResponsiveContainer width="100%" height="100%">

// <PieChart>

// <Pie
// data={habitDistribution}
// dataKey="value"
// nameKey="name"
// label
// outerRadius={90}
// >

// {habitDistribution.map((entry,index)=>(
// <Cell key={entry.name} fill={COLORS[index % COLORS.length]}/>
// ))}

// </Pie>

// <Tooltip/>
// <Legend/>

// </PieChart>

// </ResponsiveContainer>

// </div>

// </div>


// </div>

// )

// }

import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
  BarChart,
  Bar,
  CartesianGrid
} from "recharts";
import { motion } from "framer-motion";
import { calculateHabitStats } from "../utils/trackerUtils";

const COLORS = ["#69b578", "#7c83fd", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

export default function AnalyticsChart() {
  const {
    chartType,
    setChartType,
    overallStats,
    monthlyLineData,
    habits,
    monthMeta,
    reportView,
    weeklyReport
  } = useContext(HabitContext);

  const pieData = [
    { name: "Done", value: overallStats.totalDone },
    { name: "Not Done", value: overallStats.totalNotDone }
  ];

  const habitDistribution = habits.map(h => ({
    name: h.name.length > 15 ? h.name.substring(0, 15) + "..." : h.name,
    value: calculateHabitStats(h, monthMeta.days).percent,
    fullName: h.name
  })).sort((a, b) => b.value - a.value);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-200">
          <p className="text-sm font-medium text-slate-900">{label}</p>
          <p className="text-sm text-emerald-600">
            {payload[0].name}: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    if (reportView === "weekly") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyReport}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="percent" fill="#7c83fd" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    switch (chartType) {
      case "pie":
      case "donut":
        return (
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={90}
              innerRadius={chartType === "donut" ? 55 : 0}
              labelLine={false}
            >
              {pieData.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        );

      case "line":
      default:
        return (
          <AreaChart data={monthlyLineData}>
            <defs>
              <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <YAxis 
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="percent"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#colorProgress)"
            />
          </AreaChart>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-5"
    >
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
            {reportView === "weekly" ? "Weekly Progress" : "Monthly Analytics"}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {reportView === "weekly" 
              ? "Your progress this week" 
              : "Dynamic report based on your habit selection"}
          </p>
        </div>

        {reportView === "monthly" && (
          <div className="flex gap-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-2xl">
            {["line", "pie", "donut"].map((type) => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`rounded-xl px-4 py-2 text-sm font-medium capitalize transition-all ${
                  chartType === type
                    ? "bg-violet-500 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Progress Overview */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/50 p-4">
          <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
            Overall Progress
          </h4>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart()}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Habit Distribution */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/50 p-4">
          <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
            Habit Completion Distribution
          </h4>
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={habitDistribution}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  labelLine={{ stroke: '#94a3b8', strokeWidth: 1 }}
                >
                  {habitDistribution.map((entry, index) => (
                    <Cell 
                      key={entry.name} 
                      fill={COLORS[index % COLORS.length]}
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </Pie>
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 rounded-lg shadow-lg border">
                          <p className="font-medium">{payload[0].payload.fullName}</p>
                          <p className="text-sm">{payload[0].value}% complete</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3">
          <p className="text-xs text-emerald-600 dark:text-emerald-400">Total Days</p>
          <p className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
            {monthMeta.days.length}
          </p>
        </div>
        <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-3">
          <p className="text-xs text-violet-600 dark:text-violet-400">Total Habits</p>
          <p className="text-xl font-bold text-violet-700 dark:text-violet-300">
            {habits.length}
          </p>
        </div>
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
          <p className="text-xs text-amber-600 dark:text-amber-400">Best Day</p>
          <p className="text-xl font-bold text-amber-700 dark:text-amber-300">
            {monthlyLineData.reduce((max, day) => day.percent > max.percent ? day : max).day}
          </p>
        </div>
        <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-3">
          <p className="text-xs text-rose-600 dark:text-rose-400">Average</p>
          <p className="text-xl font-bold text-rose-700 dark:text-rose-300">
            {overallStats.percent}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}