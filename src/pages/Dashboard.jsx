// import HabitList from "../components/HabitList";

// export default function Dashboard(){

//     return(
//         <div>

//             <h1>Discipline Tracker</h1>

//             <HabitList />

//         </div>
//     )

// }


// import HabitGrid from "../components/HabitGrid"
// import HabitControls from "../components/HabitControls"
// import ProgressChart from "../components/ProgressChart"

// export default function Dashboard(){

// return(

// <div className="bg-black min-h-screen p-6">

// <h1 className="text-white text-3xl mb-6">

// Discipline Tracker

// </h1>

// <HabitControls/>

// <HabitGrid/>

// <div className="mt-10">

// <ProgressChart/>

// </div>

// </div>

// )

// }


// import { useContext } from "react";
// import { HabitContext } from "../context/HabitContext";
// import HabitControls from "../components/HabitControls";
// import ReportTabs from "../components/ReportTabs";
// import SummaryCards from "../components/SummaryCards";
// import HabitGrid from "../components/HabitGrid";
// import AnalyticsChart from "../components/AnalyticsChart";
// import ConfirmModal from "../components/ConfirmModal";

// export default function Dashboard() {
//   const { deleteModal, cancelDeleteHabit, confirmDeleteHabit } =
//     useContext(HabitContext);

//   return (
//     <div className="min-h-screen bg-[#f6f7fb] p-4 md:p-6">
//       <div className="mx-auto max-w-[1600px] space-y-6">
//         <HabitControls />
//         <ReportTabs />
//         <SummaryCards />
//         <HabitGrid />
//         <AnalyticsChart />
//         <ConfirmModal
//           open={deleteModal.open}
//           title="Delete habit?"
//           message={`Are you sure you want to remove "${deleteModal.habitName}"?`}
//           onCancel={cancelDeleteHabit}
//           onConfirm={confirmDeleteHabit}
//         />
//       </div>
//     </div>
//   );
// }

import { useState, useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import { useAuth } from "../context/AuthContext";
import HabitControls from "../components/HabitControls";
import ReportTabs from "../components/ReportTabs";
import SummaryCards from "../components/SummaryCards";
import HabitGrid from "../components/HabitGrid";
import AnalyticsChart from "../components/AnalyticsChart";
import ConfirmModal from "../components/ConfirmModal";
import Settings from "./Settings";
import { Settings as SettingsIcon, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const { deleteModal, cancelDeleteHabit, confirmDeleteHabit, isSyncing } =
    useContext(HabitContext);
  const { currentUser } = useAuth();
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] dark:bg-slate-900 p-4 md:p-6">
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* Header with sync indicator */}
        <div className="flex justify-end items-center gap-3">
          {isSyncing && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Loader2 size={16} className="animate-spin" />
              Syncing...
            </div>
          )}
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
          >
            <SettingsIcon size={20} className="text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <HabitControls />
            <ReportTabs />
            <SummaryCards />
            <HabitGrid />
            <AnalyticsChart />
          </motion.div>
        </AnimatePresence>

        <ConfirmModal
          open={deleteModal.open}
          title="Delete habit?"
          message={`Are you sure you want to remove "${deleteModal.habitName}"? This action cannot be undone.`}
          onCancel={cancelDeleteHabit}
          onConfirm={confirmDeleteHabit}
        />
      </div>
    </div>
  );
}