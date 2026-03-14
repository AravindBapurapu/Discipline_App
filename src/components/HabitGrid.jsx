// import { useContext } from "react"
// import { HabitContext } from "../context/HabitContext"
// import { getDaysInMonth } from "../utils/dateUtils"

// export default function HabitGrid(){

// const {habits,toggleHabit,deleteHabit} = useContext(HabitContext)

// const days = getDaysInMonth()

// return(

// <div className="overflow-x-auto">

// <table className="text-white border-collapse">

// <thead>

// <tr>

// <th className="p-3 text-left">Habit</th>

// {days.map(d=>(
// <th key={d} className="p-2 text-gray-400">{d}</th>
// ))}

// <th>Delete</th>

// </tr>

// </thead>

// <tbody>

// {habits.map(habit=>(

// <tr key={habit.id}>

// <td className="p-3 font-semibold">

// {habit.name}

// </td>

// {days.map(day=>{

// const checked = habit.progress[day] || false

// return(

// <td key={day}>

// <input
// type="checkbox"
// checked={checked}
// onChange={()=>toggleHabit(habit.id,day)}
// className="w-5 h-5 accent-green-500"
// />

// </td>

// )

// })}

// <td>

// <button
// onClick={()=>deleteHabit(habit.id)}
// className="text-red-400"
// >

// X

// </button>

// </td>

// </tr>

// ))}

// </tbody>

// </table>

// </div>

// )

// }



// import { useContext } from "react";
// import { HabitContext } from "../context/HabitContext";
// import { Trash2 } from "lucide-react";
// import { calculateHabitStats } from "../utils/trackerUtils";
// import HabitRowProgress from "./HabitRowProgress";

// export default function HabitGrid() {
//   const { habits, toggleHabit, askDeleteHabit, monthMeta } = useContext(HabitContext);

//   return (
//     <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5">
//       <div className="custom-scrollbar overflow-x-auto">
//         {/* <table className="min-w-[1200px] border-separate border-spacing-y-2"> */}
//         {/* <table className="w-full border border-slate-200 text-sm"> */}
//         <table className="w-full border border-slate-200 text-xs leading-none">
//           {/* <thead> */}
//           <thead className="bg-slate-100">
//             {/* <tr> */}
//             <tr className="border-b border-slate-200 hover:bg-slate-50">
//               <th className="sticky left-0 z-10 rounded-l-2xl bg-slate-50 p-3 text-left text-slate-700">
//                 My Habits
//               </th>

//               {monthMeta.weeks.map((week) => (
//                 <th
//                   key={week.label}
//                   colSpan={week.days.length}
//                   className="rounded-2xl bg-slate-50 p-3 text-center text-slate-700"
//                 >
//                   <div className="font-semibold">{week.label}</div>
//                   <div className="mt-1 flex justify-center gap-3 text-xs text-slate-400">
//                     {week.days.map((d) => (
//                       <span key={d.fullDate}>
//                         {d.shortDay} {d.dayNumber}
//                       </span>
//                     ))}
//                   </div>
//                 </th>
//               ))}

//               <th className="bg-slate-50 p-3 text-slate-700">Stats</th>
//               <th className="rounded-r-2xl bg-slate-50 p-3 text-slate-700">Ring</th>
//               <th className="p-2">Delete</th>
//             </tr>
//           </thead>

//           <tbody>
//             {habits.length === 0 ? (
//               <tr>
//                 <td colSpan={monthMeta.days.length + 3} className="border border-slate-200 text-center p-2">
//                   No habits yet. Add your first habit above.
//                 </td>
//               </tr>
//             ) : (
//               habits.map((habit) => {
//                 const stats = calculateHabitStats(habit, monthMeta.days);

//                 return (
//                   <tr key={habit.id} className="">
//                     <td className="habit-name sticky left-0 z-10 bg-[#f9fafc] px-3 py-0 text-sm font-medium text-slate-700">
//                       {/* <div className="flex items-center justify-between gap-3"> */}
//                         <span>{habit.name}</span>
//                         {/* <button
//                           onClick={() => askDeleteHabit(habit.id, habit.name)}
//                           className="rounded-xl p-2 text-rose-500 hover:bg-rose-50"
//                         >
//                           <Trash2 size={16} />
//                         </button> */}
//                       {/* </div> */}
//                     </td>

//                     {monthMeta.days.map((d) => {
//                       const checked = habit.progress?.[d.fullDate] || false;

//                       return (
//                         <td
//                           key={d.fullDate}
//                           className={`text-center p-2 border ${
//                           d.weekIndex === 1 ? "bg-blue-50" :
//                           d.weekIndex === 2 ? "bg-green-50" :
//                           d.weekIndex === 3 ? "bg-yellow-50" :
//                           d.weekIndex === 4 ? "bg-purple-50" :
//                           "bg-pink-50"
//                           }`}
//                         >
//                           <input
//                             type="checkbox"
//                             checked={checked}
//                             onChange={() => toggleHabit(habit.id, d.fullDate)}
//                             className="h-3 w-3 cursor-pointer accent-emerald-500"
//                           />
//                         </td>
//                       );
//                     })}

//                     <td className="bg-[#f9fafc] p-3 text-sm text-slate-600">
//                       <div>{stats.percent}% progress</div>
//                       <div>Done {stats.done}</div>
//                       <div>Not done {stats.notDone}</div>
//                     </td>

//                     <td className="rounded-r-2xl bg-[#f9fafc] p-3">
//                       <HabitRowProgress percent={stats.percent} />
//                     </td>
//                     <td className="text-center px-1 border">
//                       <button
//                         onClick={() => askDeleteHabit(habit.id, habit.name)}
//                         className="text-rose-500 hover:text-rose-700"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </td>
//                   </tr>

//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import { useContext, useMemo } from "react";
import { HabitContext } from "../context/HabitContext";
import { Trash2, Calendar, Award } from "lucide-react";
import { calculateHabitStats } from "../utils/trackerUtils";
import HabitRowProgress from "./HabitRowProgress";
import { motion } from "framer-motion";

export default function HabitGrid() {
  const { habits, toggleHabit, askDeleteHabit, monthMeta } = useContext(HabitContext);

  // Calculate streaks for each habit
  const habitStreaks = useMemo(() => {
    return habits.map(habit => {
      let currentStreak = 0;
      let longestStreak = 0;
      
      // Sort days in chronological order
      const sortedDays = [...monthMeta.days].sort((a, b) => 
        new Date(a.fullDate) - new Date(b.fullDate)
      );
      
      for (const day of sortedDays) {
        if (habit.progress?.[day.fullDate]) {
          currentStreak++;
          longestStreak = Math.max(longestStreak, currentStreak);
        } else {
          currentStreak = 0;
        }
      }
      
      return { current: currentStreak, longest: longestStreak };
    });
  }, [habits, monthMeta.days]);

  if (habits.length === 0) {
    return (
      <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-12 text-center">
        <div className="inline-flex p-4 bg-slate-100 dark:bg-slate-700 rounded-2xl mb-4">
          <Calendar size={32} className="text-slate-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
          No habits yet
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          Add your first habit above to start tracking
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-5">
      <div className="custom-scrollbar overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="sticky left-0 z-10 bg-white dark:bg-slate-800 p-4 text-left text-slate-700 dark:text-slate-300 font-semibold">
                My Habits
              </th>

              {monthMeta.weeks.map((week, weekIdx) => (
                <th
                  key={week.label}
                  colSpan={week.days.length}
                  className="p-2 text-center"
                >
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {week.label}
                  </div>
                  <div className="mt-1 flex justify-center gap-2">
                    {week.days.map((d) => (
                      <div
                        key={d.fullDate}
                        className="flex flex-col items-center"
                      >
                        <span className="text-xs font-medium text-slate-400">
                          {d.shortDay}
                        </span>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {d.dayNumber}
                        </span>
                      </div>
                    ))}
                  </div>
                </th>
              ))}

              <th className="p-4 text-left text-slate-700 dark:text-slate-300 font-semibold">
                Stats
              </th>
              <th className="p-4 text-left text-slate-700 dark:text-slate-300 font-semibold">
                Progress
              </th>
              <th className="p-2"></th>
            </tr>
          </thead>

          <tbody>
            {habits.map((habit, index) => {
              const stats = calculateHabitStats(habit, monthMeta.days);
              const streak = habitStreaks[index];

              return (
                <motion.tr
                  key={habit.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/20 transition-colors"
                >
                  <td className="sticky left-0 z-10 bg-white dark:bg-slate-800 p-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-8 rounded-full"
                        style={{ backgroundColor: habit.color || "#69b578" }}
                      />
                      <span className="font-medium text-slate-800 dark:text-white">
                        {habit.name}
                      </span>
                    </div>
                  </td>

                  {monthMeta.days.map((d) => {
                    const checked = habit.progress?.[d.fullDate] || false;

                    return (
                      <td
                        key={d.fullDate}
                        className="p-2 text-center"
                      >
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleHabit(habit.id, d.fullDate)}
                            className="sr-only peer"
                          />
                          <div className={`w-6 h-6 rounded-lg border-2 transition-all ${
                            checked
                              ? 'bg-emerald-500 border-emerald-500 peer-hover:bg-emerald-600'
                              : 'border-slate-300 dark:border-slate-600 peer-hover:border-emerald-400'
                          }`}>
                            {checked && (
                              <svg className="w-5 h-5 text-white mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </label>
                      </td>
                    );
                  })}

                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {stats.done}/{stats.total}
                        </span>
                        <span className="text-xs text-slate-500">
                          ({stats.percent}%)
                        </span>
                      </div>
                      {streak.current > 0 && (
                        <div className="flex items-center gap-1 text-xs text-amber-600">
                          <Award size={12} />
                          <span>🔥 {streak.current} day streak</span>
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="p-4">
                    <HabitRowProgress percent={stats.percent} />
                  </td>

                  <td className="p-2">
                    <button
                      onClick={() => askDeleteHabit(habit.id, habit.name)}
                      className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-colors"
                      title="Delete habit"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}