// import { useContext,useState } from "react"
// import { HabitContext } from "../context/HabitContext"
// import { months } from "../utils/dateUtils"

// export default function HabitControls(){

// const {addHabit,month,setMonth} = useContext(HabitContext)

// const [habitName,setHabitName] = useState("")

// const handleAdd = ()=>{

// if(!habitName) return

// addHabit(habitName)

// setHabitName("")

// }

// return(

// <div className="flex gap-4 mb-6">

// <select
// value={month}
// onChange={(e)=>setMonth(e.target.value)}
// className="bg-gray-800 text-white p-2 rounded"
// >

// {months.map(m=>(

// <option key={m}>{m}</option>

// ))}

// </select>

// <input
// type="text"
// placeholder="New Habit..."
// value={habitName}
// onChange={(e)=>setHabitName(e.target.value)}
// className="p-2 rounded bg-gray-800 text-white"
// />

// <button
// onClick={handleAdd}
// className="bg-green-500 px-4 rounded"
// >

// Add Habit

// </button>

// </div>

// )

// }


import { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import { Plus, CalendarDays } from "lucide-react";

export default function HabitControls() {
  const {
    addHabit,
    selectedMonth,
    selectedYear,
    monthNames,
    setMonth,
    setYear,
    createFreshMonth,
  } = useContext(HabitContext);

  const [habitName, setHabitName] = useState("");

  const handleAdd = () => {
    addHabit(habitName);
    setHabitName("");
  };

  const years = [selectedYear - 1, selectedYear, selectedYear + 1];

  return (
    <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-violet-500">Discipline Dashboard</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-800">
            {selectedMonth} {selectedYear}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={selectedMonth}
            onChange={(e) => setMonth(e.target.value)}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2 text-slate-700 outline-none"
          >
            {monthNames.map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setYear(Number(e.target.value))}
            className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2 text-slate-700 outline-none"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <button
            onClick={createFreshMonth}
            className="inline-flex items-center gap-2 rounded-2xl bg-violet-500 px-4 py-2 text-white hover:bg-violet-600"
          >
            <CalendarDays size={18} />
            New Month
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Add a new habit..."
          className="flex-1 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-violet-400"
        />
        <button
          onClick={handleAdd}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-white hover:bg-emerald-600"
        >
          <Plus size={18} />
          Add Habit
        </button>
      </div>
    </div>
  );
}