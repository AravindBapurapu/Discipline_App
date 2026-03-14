// // import { createContext, useState, useEffect } from "react";

// // export const HabitContext = createContext();

// // export const HabitProvider = ({ children }) => {

// //   const [habits, setHabits] = useState([
// //     { id: 1, name: "Wake Up Early", days: {} },
// //     { id: 2, name: "Reading", days: {} },
// //     { id: 3, name: "Exercise", days: {} }
// //   ]);

// //   // Load habits from localStorage when app starts
// //   useEffect(() => {

// //     const saved = localStorage.getItem("habits");

// //     if (saved) {
// //       setHabits(JSON.parse(saved));
// //     }

// //   }, []);

// //   // Save habits whenever they change
// //   useEffect(() => {

// //     localStorage.setItem("habits", JSON.stringify(habits));

// //   }, [habits]);


// //   const toggleDay = (habitId, day) => {

// //     const updatedHabits = habits.map(habit => {

// //       if (habit.id === habitId) {

// //         return {
// //           ...habit,
// //           days: {
// //             ...habit.days,
// //             [day]: !habit.days[day]
// //           }
// //         };

// //       }

// //       return habit;

// //     });

// //     setHabits(updatedHabits);

// //   };


// //   return (
// //     <HabitContext.Provider value={{ habits, toggleDay }}>
// //       {children}
// //     </HabitContext.Provider>
// //   );

// // };


// // import { createContext,useState,useEffect } from "react"

// // export const HabitContext = createContext()

// // export const HabitProvider = ({children}) => {

// // const [habits,setHabits] = useState([])
// // const [month,setMonth] = useState("January")

// // useEffect(()=>{

// // const saved = localStorage.getItem("habits")

// // if(saved){
// // setHabits(JSON.parse(saved))
// // }

// // },[])

// // useEffect(()=>{

// // localStorage.setItem("habits",JSON.stringify(habits))

// // },[habits])

// // const addHabit = (name) => {

// // const newHabit = {
// // id: Date.now(),
// // name,
// // progress:{}
// // }

// // setHabits([...habits,newHabit])

// // }

// // const deleteHabit = (id) => {

// // setHabits(habits.filter(h=>h.id!==id))

// // }

// // const toggleHabit = (habitId,day)=>{

// // const updated = habits.map(h=>{

// // if(h.id===habitId){

// // return{
// // ...h,
// // progress:{
// // ...h.progress,
// // [day]:!h.progress[day]
// // }
// // }

// // }

// // return h

// // })

// // setHabits(updated)

// // }

// // return(

// // <HabitContext.Provider value={{
// // habits,
// // toggleHabit,
// // addHabit,
// // deleteHabit,
// // month,
// // setMonth
// // }}>

// // {children}

// // </HabitContext.Provider>

// // )

// // }


// import { createContext, useEffect, useMemo, useState } from "react";
// import {
//   calculateOverallStats,
//   getMonthMeta,
//   getMonthlyLineData,
//   getWeeklyReport,
//   monthNames,
// } from "../utils/trackerUtils";
// import dayjs from "dayjs";

// export const HabitContext = createContext();

// const STORAGE_KEY = "discipline_tracker_data_v2";
// const currentMonth = monthNames[dayjs().month()];
// const currentYear = dayjs().year();

// const defaultData = {
//   selectedMonth: currentMonth,
//   selectedYear: currentYear,
//   chartType: "donut",
//   reportView: "monthly",
//   monthsData: {
//     [`${currentYear}-${currentMonth}`]: [
//       { id: 1, name: "Wake up at 05:00", progress: {} },
//       { id: 2, name: "Reading", progress: {} },
//       { id: 3, name: "Workout", progress: {} },
//       { id: 4, name: "Cold Shower", progress: {} },
//     ],
//   },
// };

// export const HabitProvider = ({ children }) => {
//   const [trackerData, setTrackerData] = useState(defaultData);
//   const [weekIndex, setWeekIndex] = useState(0);

//   const [deleteModal, setDeleteModal] = useState({
//     open: false,
//     habitId: null,
//     habitName: "",
//   });

//   useEffect(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) {
//       setTrackerData(JSON.parse(saved));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(trackerData));
//   }, [trackerData]);

//   const { selectedMonth, selectedYear, chartType, reportView, monthsData } = trackerData;

//   const monthKey = `${selectedYear}-${selectedMonth}`;

//   const habits = monthsData[monthKey] || [];

//   const monthMeta = useMemo(
//     () => getMonthMeta(selectedMonth, selectedYear),
//     [selectedMonth, selectedYear]
//   );

//   const overallStats = useMemo(
//     () => calculateOverallStats(habits, monthMeta.days),
//     [habits, monthMeta.days]
//   );

//   const weeklyReport = useMemo(
//     () => getWeeklyReport(habits, monthMeta.weeks),
//     [habits, monthMeta.weeks]
//   );

//   const monthlyLineData = useMemo(
//     () => getMonthlyLineData(habits, monthMeta.days),
//     [habits, monthMeta.days]
//   );

//   const setMonth = (month) => {
//     const newKey = `${selectedYear}-${month}`;

//     setTrackerData((prev) => ({
//       ...prev,
//       selectedMonth: month,
//       monthsData: {
//         ...prev.monthsData,
//         [newKey]: prev.monthsData[newKey] || [],
//       },
//     }));
//   };

//   const setYear = (year) => {
//     const newKey = `${year}-${selectedMonth}`;

//     setTrackerData((prev) => ({
//       ...prev,
//       selectedYear: year,
//       monthsData: {
//         ...prev.monthsData,
//         [newKey]: prev.monthsData[newKey] || [],
//       },
//     }));
//   };

//   const setChartType = (type) => {
//     setTrackerData((prev) => ({
//       ...prev,
//       chartType: type,
//     }));
//   };

//   const setReportView = (view) => {
//     setTrackerData((prev) => ({
//       ...prev,
//       reportView: view,
//     }));
//   };

//   const addHabit = (name) => {
//     const trimmed = name.trim();
//     if (!trimmed) return;

//     const newHabit = {
//       id: Date.now(),
//       name: trimmed,
//       progress: {},
//     };

//     setTrackerData((prev) => ({
//       ...prev,
//       monthsData: {
//         ...prev.monthsData,
//         [monthKey]: [...(prev.monthsData[monthKey] || []), newHabit],
//       },
//     }));
//   };

//   const askDeleteHabit = (habitId, habitName) => {
//     setDeleteModal({
//       open: true,
//       habitId,
//       habitName,
//     });
//   };

//   const cancelDeleteHabit = () => {
//     setDeleteModal({
//       open: false,
//       habitId: null,
//       habitName: "",
//     });
//   };

//   const confirmDeleteHabit = () => {
//     if (!deleteModal.habitId) return;

//     setTrackerData((prev) => ({
//       ...prev,
//       monthsData: {
//         ...prev.monthsData,
//         [monthKey]: (prev.monthsData[monthKey] || []).filter(
//           (h) => h.id !== deleteModal.habitId
//         ),
//       },
//     }));

//     cancelDeleteHabit();
//   };

//   const toggleHabit = (habitId, fullDate) => {
//     setTrackerData((prev) => ({
//       ...prev,
//       monthsData: {
//         ...prev.monthsData,
//         [monthKey]: (prev.monthsData[monthKey] || []).map((habit) => {
//           if (habit.id !== habitId) return habit;

//           return {
//             ...habit,
//             progress: {
//               ...habit.progress,
//               [fullDate]: !habit.progress?.[fullDate],
//             },
//           };
//         }),
//       },
//     }));
//   };

//   const createFreshMonth = () => {
//     const nextMonthDate = dayjs(
//       `${selectedYear}-${monthNames.indexOf(selectedMonth) + 1}-01`
//     ).add(1, "month");

//     const nextMonth = monthNames[nextMonthDate.month()];
//     const nextYear = nextMonthDate.year();
//     const nextKey = `${nextYear}-${nextMonth}`;

//     setTrackerData((prev) => ({
//       ...prev,
//       selectedMonth: nextMonth,
//       selectedYear: nextYear,
//       monthsData: {
//         ...prev.monthsData,
//         [nextKey]: prev.monthsData[nextKey] || [],
//       },
//     }));
//   };

//   return (
//     <HabitContext.Provider
//       value={{
//         habits,
//         monthMeta,
//         selectedMonth,
//         selectedYear,
//         monthNames,
//         chartType,
//         reportView,
//         overallStats,
//         weeklyReport,
//         monthlyLineData,
//         deleteModal,
//         weekIndex,
//         setMonth,
//         setYear,
//         setChartType,
//         setReportView,
//         addHabit,
//         toggleHabit,
//         askDeleteHabit,
//         cancelDeleteHabit,
//         confirmDeleteHabit,
//         createFreshMonth,
//         setWeekIndex,
//       }}
//     >
//       {children}
//     </HabitContext.Provider>
//   );
// };

import { createContext, useEffect, useMemo, useState, useContext } from "react";
import {
  calculateOverallStats,
  getMonthMeta,
  getMonthlyLineData,
  getWeeklyReport,
  monthNames,
} from "../utils/trackerUtils";
import dayjs from "dayjs";
import firebaseService from "../services/firebaseService";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

export const HabitContext = createContext();

export const useHabits = () => useContext(HabitContext);

const currentMonth = monthNames[dayjs().month()];
const currentYear = dayjs().year();

const defaultData = {
  selectedMonth: currentMonth,
  selectedYear: currentYear,
  chartType: "donut",
  reportView: "monthly",
  monthsData: {},
  isLoading: false
};

export const HabitProvider = ({ children }) => {
  const [trackerData, setTrackerData] = useState(defaultData);
  const [weekIndex, setWeekIndex] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const { currentUser } = useAuth();

  const [deleteModal, setDeleteModal] = useState({
    open: false,
    habitId: null,
    habitName: "",
  });

  // Load data from Firebase when user changes or month changes
  useEffect(() => {
    if (currentUser) {
      loadMonthData();
    } else {
      // Load from localStorage for guest mode
      const saved = localStorage.getItem("discipline_tracker_guest");
      if (saved) {
        setTrackerData(JSON.parse(saved));
      }
    }
  }, [currentUser, trackerData.selectedMonth, trackerData.selectedYear]);

  // Save data to Firebase or localStorage when habits change
  useEffect(() => {
    const saveData = async () => {
      if (isSyncing) return;
      
      setIsSyncing(true);
      
      if (currentUser) {
        const monthKey = `${trackerData.selectedYear}-${trackerData.selectedMonth}`;
        const habits = trackerData.monthsData[monthKey] || [];
        
        const result = await firebaseService.saveHabits(
          currentUser.uid,
          monthKey,
          habits
        );
        
        if (!result.success) {
          toast.error("Failed to sync data");
        }
      } else {
        // Save to localStorage for guest mode
        localStorage.setItem("discipline_tracker_guest", JSON.stringify(trackerData));
      }
      
      setIsSyncing(false);
    };

    const timeoutId = setTimeout(saveData, 1000); // Debounce saving
    return () => clearTimeout(timeoutId);
  }, [trackerData.monthsData, currentUser]);

  const loadMonthData = async () => {
    if (!currentUser) return;

    const monthKey = `${trackerData.selectedYear}-${trackerData.selectedMonth}`;
    
    // Try to load from Firebase
    const result = await firebaseService.loadHabits(currentUser.uid, monthKey);
    
    if (result.success && result.data) {
      setTrackerData(prev => ({
        ...prev,
        monthsData: {
          ...prev.monthsData,
          [monthKey]: result.data
        }
      }));
    } else if (!trackerData.monthsData[monthKey]) {
      // Initialize empty month if not exists
      setTrackerData(prev => ({
        ...prev,
        monthsData: {
          ...prev.monthsData,
          [monthKey]: []
        }
      }));
    }
  };

  const { selectedMonth, selectedYear, chartType, reportView, monthsData } = trackerData;

  const monthKey = `${selectedYear}-${selectedMonth}`;
  const habits = monthsData[monthKey] || [];

  const monthMeta = useMemo(
    () => getMonthMeta(selectedMonth, selectedYear),
    [selectedMonth, selectedYear]
  );

  const overallStats = useMemo(
    () => calculateOverallStats(habits, monthMeta.days),
    [habits, monthMeta.days]
  );

  const weeklyReport = useMemo(
    () => getWeeklyReport(habits, monthMeta.weeks),
    [habits, monthMeta.weeks]
  );

  const monthlyLineData = useMemo(
    () => getMonthlyLineData(habits, monthMeta.days),
    [habits, monthMeta.days]
  );

  const setMonth = (month) => {
    setTrackerData((prev) => ({
      ...prev,
      selectedMonth: month,
    }));
  };

  const setYear = (year) => {
    setTrackerData((prev) => ({
      ...prev,
      selectedYear: year,
    }));
  };

  const setChartType = (type) => {
    setTrackerData((prev) => ({
      ...prev,
      chartType: type,
    }));
  };

  const setReportView = (view) => {
    setTrackerData((prev) => ({
      ...prev,
      reportView: view,
    }));
  };

  const addHabit = (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    const newHabit = {
      id: Date.now(),
      name: trimmed,
      progress: {},
      createdAt: new Date().toISOString(),
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    };

    setTrackerData((prev) => ({
      ...prev,
      monthsData: {
        ...prev.monthsData,
        [monthKey]: [...(prev.monthsData[monthKey] || []), newHabit],
      },
    }));

    toast.success("Habit added!");
  };

  const askDeleteHabit = (habitId, habitName) => {
    setDeleteModal({
      open: true,
      habitId,
      habitName,
    });
  };

  const cancelDeleteHabit = () => {
    setDeleteModal({
      open: false,
      habitId: null,
      habitName: "",
    });
  };

  const confirmDeleteHabit = () => {
    if (!deleteModal.habitId) return;

    setTrackerData((prev) => ({
      ...prev,
      monthsData: {
        ...prev.monthsData,
        [monthKey]: (prev.monthsData[monthKey] || []).filter(
          (h) => h.id !== deleteModal.habitId
        ),
      },
    }));

    toast.success("Habit deleted");
    cancelDeleteHabit();
  };

  const toggleHabit = (habitId, fullDate) => {
    setTrackerData((prev) => ({
      ...prev,
      monthsData: {
        ...prev.monthsData,
        [monthKey]: (prev.monthsData[monthKey] || []).map((habit) => {
          if (habit.id !== habitId) return habit;

          const newProgress = !habit.progress?.[fullDate];
          
          // Optional: Show achievement message
          if (newProgress) {
            // You could track streaks here
          }

          return {
            ...habit,
            progress: {
              ...habit.progress,
              [fullDate]: newProgress,
            },
          };
        }),
      },
    }));
  };

  const createFreshMonth = () => {
    const nextMonthDate = dayjs(
      `${selectedYear}-${monthNames.indexOf(selectedMonth) + 1}-01`
    ).add(1, "month");

    const nextMonth = monthNames[nextMonthDate.month()];
    const nextYear = nextMonthDate.year();

    setTrackerData((prev) => ({
      ...prev,
      selectedMonth: nextMonth,
      selectedYear: nextYear,
    }));

    toast.success(`Started ${nextMonth} ${nextYear}`);
  };

  const importPreviousMonth = async () => {
    const prevMonthDate = dayjs(
      `${selectedYear}-${monthNames.indexOf(selectedMonth) + 1}-01`
    ).subtract(1, "month");

    const prevMonth = monthNames[prevMonthDate.month()];
    const prevYear = prevMonthDate.year();
    const prevKey = `${prevYear}-${prevMonth}`;

    const prevHabits = monthsData[prevKey];
    
    if (!prevHabits || prevHabits.length === 0) {
      toast.error("No habits found in previous month");
      return;
    }

    // Create new habits with reset progress
    const newHabits = prevHabits.map(habit => ({
      ...habit,
      id: Date.now() + Math.random(),
      progress: {},
    }));

    setTrackerData((prev) => ({
      ...prev,
      monthsData: {
        ...prev.monthsData,
        [monthKey]: newHabits,
      },
    }));

    toast.success("Habits imported from previous month!");
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        monthMeta,
        selectedMonth,
        selectedYear,
        monthNames,
        chartType,
        reportView,
        overallStats,
        weeklyReport,
        monthlyLineData,
        deleteModal,
        weekIndex,
        isSyncing,
        setMonth,
        setYear,
        setChartType,
        setReportView,
        addHabit,
        toggleHabit,
        askDeleteHabit,
        cancelDeleteHabit,
        confirmDeleteHabit,
        createFreshMonth,
        setWeekIndex,
        importPreviousMonth,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};