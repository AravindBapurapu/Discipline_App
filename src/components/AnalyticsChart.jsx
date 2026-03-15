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

// import { useContext } from "react";
// import { HabitContext } from "../context/HabitContext";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   Area,
//   AreaChart,
//   BarChart,
//   Bar,
//   CartesianGrid
// } from "recharts";
// import { motion } from "framer-motion";
// import { calculateHabitStats } from "../utils/trackerUtils";

// const COLORS = ["#69b578", "#7c83fd", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

// export default function AnalyticsChart() {
//   const {
//     chartType,
//     setChartType,
//     overallStats,
//     monthlyLineData,
//     habits,
//     monthMeta,
//     reportView,
//     weeklyReport
//   } = useContext(HabitContext);

//   const pieData = [
//     { name: "Done", value: overallStats.totalDone },
//     { name: "Not Done", value: overallStats.totalNotDone }
//   ];

//   const habitDistribution = habits.map(h => ({
//     name: h.name.length > 15 ? h.name.substring(0, 15) + "..." : h.name,
//     value: calculateHabitStats(h, monthMeta.days).percent,
//     fullName: h.name
//   })).sort((a, b) => b.value - a.value);

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-200">
//           <p className="text-sm font-medium text-slate-900">{label}</p>
//           <p className="text-sm text-emerald-600">
//             {payload[0].name}: {payload[0].value}%
//           </p>
//         </div>
//       );
//     }
//     return null;
//   };

//   const renderChart = () => {
//     if (reportView === "weekly") {
//       return (
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={weeklyReport}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
//             <XAxis dataKey="name" stroke="#64748b" />
//             <YAxis stroke="#64748b" />
//             <Tooltip content={<CustomTooltip />} />
//             <Bar dataKey="percent" fill="#7c83fd" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       );
//     }

//     switch (chartType) {
//       case "pie":
//       case "donut":
//         return (
//           <PieChart>
//             <Pie
//               data={pieData}
//               dataKey="value"
//               nameKey="name"
//               label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//               outerRadius={90}
//               innerRadius={chartType === "donut" ? 55 : 0}
//               labelLine={false}
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         );

//       case "line":
//       default:
//         return (
//           <AreaChart data={monthlyLineData}>
//             <defs>
//               <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
//                 <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <XAxis 
//               dataKey="day" 
//               stroke="#64748b"
//               tick={{ fill: '#64748b', fontSize: 12 }}
//             />
//             <YAxis 
//               stroke="#64748b"
//               tick={{ fill: '#64748b', fontSize: 12 }}
//             />
//             <Tooltip content={<CustomTooltip />} />
//             <Area
//               type="monotone"
//               dataKey="percent"
//               stroke="#22c55e"
//               strokeWidth={2}
//               fill="url(#colorProgress)"
//             />
//           </AreaChart>
//         );
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//       className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-5"
//     >
//       {/* Header */}
//       <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
//             {reportView === "weekly" ? "Weekly Progress" : "Monthly Analytics"}
//           </h3>
//           <p className="text-sm text-slate-500 dark:text-slate-400">
//             {reportView === "weekly" 
//               ? "Your progress this week" 
//               : "Dynamic report based on your habit selection"}
//           </p>
//         </div>

//         {reportView === "monthly" && (
//           <div className="flex gap-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-2xl">
//             {["line", "pie", "donut"].map((type) => (
//               <button
//                 key={type}
//                 onClick={() => setChartType(type)}
//                 className={`rounded-xl px-4 py-2 text-sm font-medium capitalize transition-all ${
//                   chartType === type
//                     ? "bg-violet-500 text-white shadow-md"
//                     : "text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-600"
//                 }`}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
//         {/* Progress Overview */}
//         <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/50 p-4">
//           <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
//             Overall Progress
//           </h4>
//           <div className="h-[220px]">
//             <ResponsiveContainer width="100%" height="100%">
//               {renderChart()}
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Habit Distribution */}
//         <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/50 p-4">
//           <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
//             Habit Completion Distribution
//           </h4>
//           <div className="h-[220px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={habitDistribution}
//                   dataKey="value"
//                   nameKey="name"
//                   label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//                   outerRadius={80}
//                   labelLine={{ stroke: '#94a3b8', strokeWidth: 1 }}
//                 >
//                   {habitDistribution.map((entry, index) => (
//                     <Cell 
//                       key={entry.name} 
//                       fill={COLORS[index % COLORS.length]}
//                       className="hover:opacity-80 transition-opacity cursor-pointer"
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip 
//                   content={({ active, payload }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-white p-2 rounded-lg shadow-lg border">
//                           <p className="font-medium">{payload[0].payload.fullName}</p>
//                           <p className="text-sm">{payload[0].value}% complete</p>
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Statistics Summary */}
//       <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
//         <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3">
//           <p className="text-xs text-emerald-600 dark:text-emerald-400">Total Days</p>
//           <p className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
//             {monthMeta.days.length}
//           </p>
//         </div>
//         <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-3">
//           <p className="text-xs text-violet-600 dark:text-violet-400">Total Habits</p>
//           <p className="text-xl font-bold text-violet-700 dark:text-violet-300">
//             {habits.length}
//           </p>
//         </div>
//         <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
//           <p className="text-xs text-amber-600 dark:text-amber-400">Best Day</p>
//           <p className="text-xl font-bold text-amber-700 dark:text-amber-300">
//             {monthlyLineData.reduce((max, day) => day.percent > max.percent ? day : max).day}
//           </p>
//         </div>
//         <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-3">
//           <p className="text-xs text-rose-600 dark:text-rose-400">Average</p>
//           <p className="text-xl font-bold text-rose-700 dark:text-rose-300">
//             {overallStats.percent}%
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// import { useContext, useState, useMemo } from "react";
// import { HabitContext } from "../context/HabitContext";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   Area,
//   AreaChart,
//   CartesianGrid,
//   ReferenceLine
// } from "recharts";
// import { motion } from "framer-motion";
// import { calculateHabitStats } from "../utils/trackerUtils";
// import { TrendingUp, Calendar, BarChart3, PieChart as PieChartIcon } from "lucide-react";

// const COLORS = ["#69b578", "#7c83fd", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
//         <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">{label}</p>
//         {payload.map((entry, index) => (
//           <div key={index} className="flex items-center gap-2 text-sm">
//             <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
//             <span className="text-slate-600 dark:text-slate-400">{entry.name}:</span>
//             <span className="font-medium text-slate-900 dark:text-white">{entry.value}%</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// export default function AnalyticsChart() {
//   const {
//     chartType,
//     setChartType,
//     overallStats,
//     monthlyLineData,
//     habits,
//     monthMeta,
//     reportView,
//     weeklyReport
//   } = useContext(HabitContext);

//   const [hoveredHabit, setHoveredHabit] = useState(null);

//   // Data for pie/donut charts
//   const pieData = [
//     { name: "Completed", value: overallStats.totalDone, color: "#69b578" },
//     { name: "Missed", value: overallStats.totalNotDone, color: "#ef4444" }
//   ];

//   // Sort habits by completion rate for better visualization
//   const habitDistribution = useMemo(() => {
//     return habits
//       .map(h => ({
//         name: h.name.length > 15 ? h.name.substring(0, 12) + '...' : h.name,
//         fullName: h.name,
//         completion: calculateHabitStats(h, monthMeta.days).percent,
//         color: h.color || COLORS[Math.floor(Math.random() * COLORS.length)],
//         id: h.id
//       }))
//       .sort((a, b) => b.completion - a.completion);
//   }, [habits, monthMeta.days]);

//   // Calculate average completion
//   const averageCompletion = useMemo(() => {
//     if (habitDistribution.length === 0) return 0;
//     const sum = habitDistribution.reduce((acc, h) => acc + h.completion, 0);
//     return Math.round(sum / habitDistribution.length);
//   }, [habitDistribution]);

//   // Format data for line chart with ranking
//   const lineChartData = useMemo(() => {
//     return habitDistribution.map((habit, index) => ({
//       rank: index + 1,
//       name: habit.name,
//       fullName: habit.fullName,
//       completion: habit.completion,
//       color: habit.color,
//       id: habit.id
//     }));
//   }, [habitDistribution]);

//   // Calculate weekly average
//   const averagePercent = useMemo(() => {
//     if (reportView === "weekly") {
//       return weeklyReport.length > 0
//         ? Math.round(weeklyReport.reduce((sum, w) => sum + w.percent, 0) / weeklyReport.length)
//         : 0;
//     }
//     return overallStats.percent;
//   }, [reportView, weeklyReport, overallStats]);

//   const renderMainChart = () => {
//     if (reportView === "weekly") {
//       return (
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={weeklyReport}
//             margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
//           >
//             <defs>
//               <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#7c83fd" stopOpacity={0.2} />
//                 <stop offset="95%" stopColor="#7c83fd" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.2} />
//             <XAxis 
//               dataKey="name" 
//               stroke="#64748b"
//               tick={{ fill: '#64748b', fontSize: 11 }}
//             />
//             <YAxis 
//               stroke="#64748b"
//               tick={{ fill: '#64748b', fontSize: 11 }}
//               domain={[0, 100]}
//             />
//             <Tooltip content={<CustomTooltip />} />
//             <ReferenceLine 
//               y={averagePercent} 
//               stroke="#94a3b8" 
//               strokeDasharray="3 3"
//               label={{ 
//                 value: 'Avg', 
//                 position: 'right',
//                 fill: '#94a3b8',
//                 fontSize: 10
//               }}
//             />
//             <Area
//               type="monotone"
//               dataKey="percent"
//               stroke="none"
//               fill="url(#weeklyGradient)"
//             />
//             <Line
//               type="monotone"
//               dataKey="percent"
//               stroke="#7c83fd"
//               strokeWidth={2}
//               dot={{ fill: '#7c83fd', r: 4, strokeWidth: 2, stroke: '#fff' }}
//               activeDot={{ r: 6, fill: '#7c83fd', stroke: '#fff', strokeWidth: 2 }}
//               animationDuration={1000}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       );
//     }

//     // Monthly chart based on selected type
//     switch (chartType) {
//       case "pie":
//       case "donut":
//         return (
//           <PieChart>
//             <Pie
//               data={pieData}
//               dataKey="value"
//               nameKey="name"
//               label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//               outerRadius={80}
//               innerRadius={chartType === "donut" ? 45 : 0}
//               labelLine={false}
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={entry.name} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend 
//               verticalAlign="bottom" 
//               height={36}
//               formatter={(value) => <span className="text-xs text-slate-600 dark:text-slate-400">{value}</span>}
//             />
//           </PieChart>
//         );

//       case "line":
//       default:
//         return (
//           <AreaChart
//             data={monthlyLineData}
//             margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
//           >
//             <defs>
//               <linearGradient id="monthlyGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
//                 <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.2} />
//             <XAxis 
//               dataKey="day" 
//               stroke="#64748b"
//               tick={{ fill: '#64748b', fontSize: 11 }}
//             />
//             <YAxis 
//               stroke="#64748b"
//               tick={{ fill: '#64748b', fontSize: 11 }}
//               domain={[0, 100]}
//             />
//             <Tooltip content={<CustomTooltip />} />
//             <ReferenceLine 
//               y={averagePercent} 
//               stroke="#94a3b8" 
//               strokeDasharray="3 3"
//               label={{ 
//                 value: 'Avg', 
//                 position: 'right',
//                 fill: '#94a3b8',
//                 fontSize: 10
//               }}
//             />
//             <Area
//               type="monotone"
//               dataKey="percent"
//               stroke="#22c55e"
//               strokeWidth={2}
//               fill="url(#monthlyGradient)"
//               animationDuration={1000}
//             />
//           </AreaChart>
//         );
//     }
//   };

//   return (
//     <div className="grid lg:grid-cols-3 gap-4">
//       {/* Left side - Overall Progress Chart */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-4"
//       >
//         <div className="flex items-center justify-between mb-3">
//           <div>
//             <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400">
//               Overall Progress
//             </h4>
//             <p className="text-2xl font-bold text-slate-800 dark:text-white">
//               {overallStats.percent}%
//             </p>
//           </div>
//           <div className="flex gap-1 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
//             <button
//               onClick={() => setChartType("line")}
//               className={`p-1.5 rounded-md transition-colors ${
//                 chartType === "line" ? 'bg-white dark:bg-slate-600 shadow-sm' : ''
//               }`}
//             >
//               <BarChart3 size={16} className={chartType === "line" ? 'text-violet-500' : 'text-slate-400'} />
//             </button>
//             <button
//               onClick={() => setChartType("pie")}
//               className={`p-1.5 rounded-md transition-colors ${
//                 chartType === "pie" ? 'bg-white dark:bg-slate-600 shadow-sm' : ''
//               }`}
//             >
//               <PieChartIcon size={16} className={chartType === "pie" ? 'text-violet-500' : 'text-slate-400'} />
//             </button>
//             <button
//               onClick={() => setChartType("donut")}
//               className={`p-1.5 rounded-md transition-colors ${
//                 chartType === "donut" ? 'bg-white dark:bg-slate-600 shadow-sm' : ''
//               }`}
//             >
//               <PieChartIcon size={16} className={chartType === "donut" ? 'text-violet-500' : 'text-slate-400'} />
//             </button>
//           </div>
//         </div>

//         <div className="h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             {renderMainChart()}
//           </ResponsiveContainer>
//         </div>

//         <div className="mt-3 grid grid-cols-2 gap-2">
//           <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2">
//             <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Completed</p>
//             <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
//               {overallStats.totalDone}
//             </p>
//           </div>
//           <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-2">
//             <p className="text-[10px] text-rose-600 dark:text-rose-400">Missed</p>
//             <p className="text-sm font-bold text-rose-700 dark:text-rose-300">
//               {overallStats.totalNotDone}
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Right side - Professional Habit Distribution Line Graph */}
//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-4"
//       >
//         <div className="flex items-center justify-between mb-3">
//           <div>
//             <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400">
//               Habit Performance Ranking
//             </h4>
//             <p className="text-xs text-slate-500 dark:text-slate-500">
//               Completion rates from highest to lowest
//             </p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="text-xs text-slate-600 dark:text-slate-400">
//               Avg: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{averageCompletion}%</span>
//             </div>
//             {hoveredHabit && (
//               <div className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
//                 <span className="font-medium text-slate-700 dark:text-slate-300">{hoveredHabit.name}:</span>
//                 <span className="ml-1 text-emerald-600 dark:text-emerald-400">{hoveredHabit.completion}%</span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="h-[250px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//               data={lineChartData}
//               margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//               onMouseMove={(e) => {
//                 if (e.activePayload) {
//                   setHoveredHabit(e.activePayload[0].payload);
//                 }
//               }}
//               onMouseLeave={() => setHoveredHabit(null)}
//             >
//               <defs>
//                 {/* Gradient for the area under the line */}
//                 <linearGradient id="habitGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
//                   <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
//                 </linearGradient>
                
//                 {/* Gradient for each data point */}
//                 {lineChartData.map((item, index) => (
//                   <linearGradient key={item.id} id={`dotGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor={item.color} stopOpacity={1} />
//                     <stop offset="100%" stopColor={item.color} stopOpacity={0.8} />
//                   </linearGradient>
//                 ))}
//               </defs>

//               <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.2} vertical={false} />
              
//               <XAxis 
//                 dataKey="rank" 
//                 stroke="#64748b"
//                 tick={{ fill: '#64748b', fontSize: 11 }}
//                 label={{ 
//                   value: 'Habit Rank', 
//                   position: 'insideBottom', 
//                   offset: -10,
//                   fill: '#64748b',
//                   fontSize: 10
//                 }}
//               />
              
//               <YAxis 
//                 stroke="#64748b"
//                 tick={{ fill: '#64748b', fontSize: 11 }}
//                 domain={[0, 100]}
//                 label={{ 
//                   value: 'Completion %', 
//                   angle: -90, 
//                   position: 'insideLeft',
//                   fill: '#64748b',
//                   fontSize: 10,
//                   offset: 0
//                 }}
//               />
              
//               <Tooltip 
//                 content={({ active, payload }) => {
//                   if (active && payload && payload.length) {
//                     const data = payload[0].payload;
//                     return (
//                       <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 min-w-[180px]">
//                         <div className="flex items-center gap-2 mb-2">
//                           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
//                           <p className="text-sm font-medium text-slate-900 dark:text-white">
//                             {data.fullName}
//                           </p>
//                         </div>
//                         <div className="space-y-1">
//                           <div className="flex justify-between text-xs">
//                             <span className="text-slate-500 dark:text-slate-400">Rank:</span>
//                             <span className="font-medium text-slate-700 dark:text-slate-300">#{data.rank}</span>
//                           </div>
//                           <div className="flex justify-between text-xs">
//                             <span className="text-slate-500 dark:text-slate-400">Completion:</span>
//                             <span className="font-medium text-emerald-600 dark:text-emerald-400">{data.completion}%</span>
//                           </div>
//                           <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-1">
//                             <div 
//                               className="h-1.5 rounded-full transition-all duration-300"
//                               style={{ 
//                                 width: `${data.completion}%`,
//                                 backgroundColor: data.color
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />
              
//               {/* Reference line for average */}
//               <ReferenceLine 
//                 y={averageCompletion} 
//                 stroke="#94a3b8" 
//                 strokeDasharray="3 3"
//                 strokeWidth={1.5}
//                 label={{ 
//                   value: 'Average', 
//                   position: 'right',
//                   fill: '#94a3b8',
//                   fontSize: 10,
//                   offset: 10
//                 }}
//               />
              
//               {/* Area under the line */}
//               <Area
//                 type="monotone"
//                 dataKey="completion"
//                 stroke="none"
//                 fill="url(#habitGradient)"
//               />
              
//               {/* Main line */}
//               <Line
//                 type="monotone"
//                 dataKey="completion"
//                 stroke="#8b5cf6"
//                 strokeWidth={3}
//                 dot={({ cx, cy, payload, index }) => (
//                   <circle
//                     key={payload.id}
//                     cx={cx}
//                     cy={cy}
//                     r={hoveredHabit?.id === payload.id ? 8 : 6}
//                     fill={payload.color}
//                     stroke="white"
//                     strokeWidth={hoveredHabit?.id === payload.id ? 3 : 2}
//                     style={{
//                       transition: 'r 0.2s ease, stroke-width 0.2s ease',
//                       filter: hoveredHabit?.id === payload.id ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' : 'none'
//                     }}
//                   />
//                 )}
//                 activeDot={({ cx, cy, payload }) => (
//                   <circle
//                     cx={cx}
//                     cy={cy}
//                     r={10}
//                     fill={payload.color}
//                     stroke="white"
//                     strokeWidth={3}
//                   />
//                 )}
//                 animationDuration={1500}
//                 animationEasing="ease-in-out"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Legend and summary */}
//         <div className="mt-4 grid grid-cols-4 gap-2">
//           <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2">
//             <p className="text-[10px] text-slate-500 dark:text-slate-400">Average</p>
//             <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{averageCompletion}%</p>
//           </div>
//           <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2">
//             <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Best</p>
//             <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
//               {habitDistribution[0]?.completion || 0}%
//             </p>
//           </div>
//           <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-2">
//             <p className="text-[10px] text-amber-600 dark:text-amber-400">Median</p>
//             <p className="text-sm font-bold text-amber-700 dark:text-amber-300">
//               {habitDistribution[Math.floor(habitDistribution.length / 2)]?.completion || 0}%
//             </p>
//           </div>
//           <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-2">
//             <p className="text-[10px] text-rose-600 dark:text-rose-400">Lowest</p>
//             <p className="text-sm font-bold text-rose-700 dark:text-rose-300">
//               {habitDistribution[habitDistribution.length - 1]?.completion || 0}%
//             </p>
//           </div>
//         </div>

//         {/* Mini habit list */}
//         <div className="mt-3 flex flex-wrap gap-2">
//           {habitDistribution.slice(0, 5).map((habit, index) => (
//             <div
//               key={habit.id}
//               className="flex items-center gap-1.5 text-xs bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded-lg"
//               onMouseEnter={() => setHoveredHabit(habit)}
//               onMouseLeave={() => setHoveredHabit(null)}
//             >
//               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: habit.color }} />
//               <span className="text-slate-600 dark:text-slate-400">{habit.name}</span>
//               <span className="font-medium text-slate-700 dark:text-slate-300">{habit.completion}%</span>
//             </div>
//           ))}
//           {habitDistribution.length > 5 && (
//             <div className="text-xs text-slate-400 dark:text-slate-500 px-2 py-1">
//               +{habitDistribution.length - 5} more
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }




import { useContext, useState, useMemo } from "react";
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
  CartesianGrid,
  ReferenceLine,
  BarChart,
  Bar
} from "recharts";
import { motion } from "framer-motion";
import { calculateHabitStats } from "../utils/trackerUtils";
import { TrendingUp, Calendar, BarChart3, PieChart as PieChartIcon } from "lucide-react";

const COLORS = ["#69b578", "#7c83fd", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
        <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.stroke || "#69b578" }} />
            <span className="text-slate-600 dark:text-slate-400">{entry.name}:</span>
            <span className="font-medium text-slate-900 dark:text-white">
              {typeof entry.value === 'number' ? entry.value.toFixed(0) : entry.value}%
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

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

  const [hoveredHabit, setHoveredHabit] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Data for pie/donut charts
  const pieData = [
    { name: "Completed", value: overallStats.totalDone, color: "#69b578" },
    { name: "Missed", value: overallStats.totalNotDone, color: "#ef4444" }
  ];

  // Sort habits by completion rate for better visualization
  const habitDistribution = useMemo(() => {
    return habits
      .map(h => ({
        name: h.name.length > 15 ? h.name.substring(0, 12) + '...' : h.name,
        fullName: h.name,
        completion: calculateHabitStats(h, monthMeta.days).percent,
        color: h.color || COLORS[Math.floor(Math.random() * COLORS.length)],
        id: h.id,
        done: calculateHabitStats(h, monthMeta.days).done,
        total: calculateHabitStats(h, monthMeta.days).total
      }))
      .sort((a, b) => b.completion - a.completion);
  }, [habits, monthMeta.days]);

  // Calculate average completion
  const averageCompletion = useMemo(() => {
    if (habitDistribution.length === 0) return 0;
    const sum = habitDistribution.reduce((acc, h) => acc + h.completion, 0);
    return Math.round(sum / habitDistribution.length);
  }, [habitDistribution]);

  // Format data for line chart with ranking
  const lineChartData = useMemo(() => {
    return habitDistribution.map((habit, index) => ({
      rank: index + 1,
      name: habit.name,
      fullName: habit.fullName,
      completion: habit.completion,
      color: habit.color,
      id: habit.id,
      done: habit.done,
      total: habit.total
    }));
  }, [habitDistribution]);

  // Calculate weekly average
  const averagePercent = useMemo(() => {
    if (reportView === "weekly") {
      return weeklyReport.length > 0
        ? Math.round(weeklyReport.reduce((sum, w) => sum + w.percent, 0) / weeklyReport.length)
        : 0;
    }
    return overallStats.percent;
  }, [reportView, weeklyReport, overallStats]);

  const renderMainChart = () => {
    if (reportView === "weekly") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={weeklyReport}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c83fd" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#7c83fd" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.2} />
            <XAxis 
              dataKey="name" 
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 11 }}
            />
            <YAxis 
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 11 }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine 
              y={averagePercent} 
              stroke="#94a3b8" 
              strokeDasharray="3 3"
              label={{ 
                value: 'Avg', 
                position: 'right',
                fill: '#94a3b8',
                fontSize: 10
              }}
            />
            <Area
              type="monotone"
              dataKey="percent"
              stroke="none"
              fill="url(#weeklyGradient)"
            />
            <Line
              type="monotone"
              dataKey="percent"
              stroke="#7c83fd"
              strokeWidth={2}
              dot={{ fill: '#7c83fd', r: 4, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, fill: '#7c83fd', stroke: '#fff', strokeWidth: 2 }}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    // Monthly chart based on selected type - FIXED: All chart types now work
    switch (chartType) {
      case "pie":
        return (
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              animationDuration={1000}
              animationBegin={0}
              animationEasing="ease-out"
            >
              {pieData.map((entry, index) => (
                <Cell 
                  key={entry.name} 
                  fill={entry.color}
                  stroke="#fff"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-xs text-slate-600 dark:text-slate-400">{value}</span>}
            />
          </PieChart>
        );

      case "donut":
        return (
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={80}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              animationDuration={1000}
              animationBegin={0}
              animationEasing="ease-out"
            >
              {pieData.map((entry, index) => (
                <Cell 
                  key={entry.name} 
                  fill={entry.color}
                  stroke="#fff"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-xs text-slate-600 dark:text-slate-400">{value}</span>}
            />
          </PieChart>
        );

      case "line":
        return (
          <AreaChart
            data={monthlyLineData}
            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="monthlyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.2} />
            <XAxis 
              dataKey="day" 
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 11 }}
            />
            <YAxis 
              stroke="#64748b"
              tick={{ fill: '#64748b', fontSize: 11 }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine 
              y={averagePercent} 
              stroke="#94a3b8" 
              strokeDasharray="3 3"
              label={{ 
                value: 'Avg', 
                position: 'right',
                fill: '#94a3b8',
                fontSize: 10
              }}
            />
            <Area
              type="monotone"
              dataKey="percent"
              stroke="#22c55e"
              strokeWidth={2}
              fill="url(#monthlyGradient)"
              animationDuration={1000}
            />
          </AreaChart>
        );

      default:
        return null;
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {/* Left side - Overall Progress Chart - FIXED: All chart types now work */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Overall Progress
            </h4>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              {overallStats.percent}%
            </p>
          </div>
          <div className="flex gap-1 bg-slate-100 dark:bg-slate-700 p-1 rounded-lg">
            <button
              onClick={() => setChartType("line")}
              className={`p-1.5 rounded-md transition-colors ${
                chartType === "line" ? 'bg-white dark:bg-slate-600 shadow-sm' : ''
              }`}
              title="Line Chart"
            >
              <BarChart3 size={16} className={chartType === "line" ? 'text-violet-500' : 'text-slate-400'} />
            </button>
            <button
              onClick={() => setChartType("pie")}
              className={`p-1.5 rounded-md transition-colors ${
                chartType === "pie" ? 'bg-white dark:bg-slate-600 shadow-sm' : ''
              }`}
              title="Pie Chart"
            >
              <PieChartIcon size={16} className={chartType === "pie" ? 'text-violet-500' : 'text-slate-400'} />
            </button>
            <button
              onClick={() => setChartType("donut")}
              className={`p-1.5 rounded-md transition-colors ${
                chartType === "donut" ? 'bg-white dark:bg-slate-600 shadow-sm' : ''
              }`}
              title="Donut Chart"
            >
              <PieChartIcon size={16} className={chartType === "donut" ? 'text-violet-500' : 'text-slate-400'} />
            </button>
          </div>
        </div>

        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            {renderMainChart()}
          </ResponsiveContainer>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2">
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Completed</p>
            <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
              {overallStats.totalDone}
            </p>
          </div>
          <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-2">
            <p className="text-[10px] text-rose-600 dark:text-rose-400">Missed</p>
            <p className="text-sm font-bold text-rose-700 dark:text-rose-300">
              {overallStats.totalNotDone}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right side - Professional Habit Distribution Line Graph - FIXED: Perfect filling and animation */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Habit Performance Ranking
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Completion rates from highest to lowest
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Avg: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{averageCompletion}%</span>
            </div>
            {hoveredHabit && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg"
              >
                <span className="font-medium text-slate-700 dark:text-slate-300">{hoveredHabit.name}:</span>
                <span className="ml-1 text-emerald-600 dark:text-emerald-400">{hoveredHabit.completion}%</span>
              </motion.div>
            )}
          </div>
        </div>

        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              onMouseMove={(e) => {
                if (e.activePayload) {
                  setHoveredHabit(e.activePayload[0].payload);
                }
              }}
              onMouseLeave={() => setHoveredHabit(null)}
            >
              <defs>
                {/* Gradient for the area under the line - FIXED: Proper filling */}
                <linearGradient id="habitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="80%" stopColor="#8b5cf6" stopOpacity={0.1} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.2} vertical={false} />
              
              <XAxis 
                dataKey="rank" 
                stroke="#64748b"
                tick={{ fill: '#64748b', fontSize: 11 }}
                label={{ 
                  value: 'Habit Rank', 
                  position: 'insideBottom', 
                  offset: -10,
                  fill: '#64748b',
                  fontSize: 10
                }}
              />
              
              <YAxis 
                stroke="#64748b"
                tick={{ fill: '#64748b', fontSize: 11 }}
                domain={[0, 100]}
                label={{ 
                  value: 'Completion %', 
                  angle: -90, 
                  position: 'insideLeft',
                  fill: '#64748b',
                  fontSize: 10,
                  offset: 0
                }}
              />
              
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 min-w-[200px]"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
                          <p className="text-sm font-medium text-slate-900 dark:text-white">
                            {data.fullName}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-500 dark:text-slate-400">Rank:</span>
                            <span className="font-medium text-slate-700 dark:text-slate-300">#{data.rank}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-500 dark:text-slate-400">Completion:</span>
                            <span className="font-medium text-emerald-600 dark:text-emerald-400">{data.completion}%</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-500 dark:text-slate-400">Progress:</span>
                            <span className="font-medium text-slate-700 dark:text-slate-300">{data.done}/{data.total} days</span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-1 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${data.completion}%` }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="h-2 rounded-full"
                              style={{ backgroundColor: data.color }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                  return null;
                }}
              />
              
              {/* Reference line for average */}
              <ReferenceLine 
                y={averageCompletion} 
                stroke="#94a3b8" 
                strokeDasharray="3 3"
                strokeWidth={1.5}
                label={{ 
                  value: 'Average', 
                  position: 'right',
                  fill: '#94a3b8',
                  fontSize: 10,
                  offset: 10
                }}
              />
              
              {/* Area under the line - FIXED: Proper filling from 0 to line */}
              <Area
                type="monotone"
                dataKey="completion"
                stroke="none"
                fill="url(#habitGradient)"
                animationDuration={1500}
                animationBegin={0}
                animationEasing="ease-in-out"
              />
              
              {/* Main line */}
              <Line
                type="monotone"
                dataKey="completion"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={({ cx, cy, payload, index }) => (
                  <motion.circle
                    key={payload.id}
                    cx={cx}
                    cy={cy}
                    r={hoveredHabit?.id === payload.id ? 8 : 6}
                    fill={payload.color}
                    stroke="white"
                    strokeWidth={hoveredHabit?.id === payload.id ? 3 : 2}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    style={{
                      filter: hoveredHabit?.id === payload.id ? 'drop-shadow(0 4px 6px rgba(139, 92, 246, 0.3))' : 'none',
                      transition: 'r 0.2s ease, stroke-width 0.2s ease, filter 0.2s ease'
                    }}
                  />
                )}
                activeDot={({ cx, cy, payload }) => (
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={10}
                    fill={payload.color}
                    stroke="white"
                    strokeWidth={3}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
                animationDuration={1500}
                animationBegin={0}
                animationEasing="ease-in-out"
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend and summary - FIXED: Better visual representation */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2"
          >
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Average</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{averageCompletion}%</p>
            <div className="w-full bg-slate-200 dark:bg-slate-600 h-1 rounded-full mt-1">
              <div className="h-1 rounded-full bg-slate-500" style={{ width: `${averageCompletion}%` }} />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2"
          >
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Best</p>
            <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
              {habitDistribution[0]?.completion || 0}%
            </p>
            <div className="w-full bg-emerald-200 dark:bg-emerald-800/30 h-1 rounded-full mt-1">
              <div className="h-1 rounded-full bg-emerald-500" style={{ width: `${habitDistribution[0]?.completion || 0}%` }} />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-2"
          >
            <p className="text-[10px] text-amber-600 dark:text-amber-400">Median</p>
            <p className="text-sm font-bold text-amber-700 dark:text-amber-300">
              {habitDistribution[Math.floor(habitDistribution.length / 2)]?.completion || 0}%
            </p>
            <div className="w-full bg-amber-200 dark:bg-amber-800/30 h-1 rounded-full mt-1">
              <div className="h-1 rounded-full bg-amber-500" style={{ width: `${habitDistribution[Math.floor(habitDistribution.length / 2)]?.completion || 0}%` }} />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-2"
          >
            <p className="text-[10px] text-rose-600 dark:text-rose-400">Lowest</p>
            <p className="text-sm font-bold text-rose-700 dark:text-rose-300">
              {habitDistribution[habitDistribution.length - 1]?.completion || 0}%
            </p>
            <div className="w-full bg-rose-200 dark:bg-rose-800/30 h-1 rounded-full mt-1">
              <div className="h-1 rounded-full bg-rose-500" style={{ width: `${habitDistribution[habitDistribution.length - 1]?.completion || 0}%` }} />
            </div>
          </motion.div>
        </div>

        {/* Mini habit list - FIXED: Better interaction */}
        <div className="mt-3 flex flex-wrap gap-2">
          {habitDistribution.slice(0, 5).map((habit, index) => (
            <motion.div
              key={habit.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-1.5 text-xs bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              onMouseEnter={() => setHoveredHabit(habit)}
              onMouseLeave={() => setHoveredHabit(null)}
              onClick={() => setActiveIndex(habit.id)}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: habit.color }} />
              <span className="text-slate-600 dark:text-slate-400">{habit.name}</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{habit.completion}%</span>
            </motion.div>
          ))}
          {habitDistribution.length > 5 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-xs text-slate-400 dark:text-slate-500 px-2 py-1"
            >
              +{habitDistribution.length - 5} more
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}