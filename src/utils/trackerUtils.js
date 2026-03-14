import dayjs from "dayjs";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonthMeta(selectedMonth, selectedYear) {
  const monthIndex = monthNames.indexOf(selectedMonth);
  const firstDay = dayjs(`${selectedYear}-${monthIndex + 1}-01`);
  const daysInMonth = firstDay.daysInMonth();

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = firstDay.date(i + 1);
    return {
      dayNumber: i + 1,
      shortDay: date.format("dd"),   // Su, Mo, Tu
      fullDate: date.format("YYYY-MM-DD"),
      weekIndex: Math.floor(i / 7) + 1,
    };
  });

  const weeks = [];
  const totalWeeks = Math.ceil(daysInMonth / 7);

  for (let i = 1; i <= totalWeeks; i++) {
    weeks.push({
      label: `Week ${i}`,
      days: days.filter((d) => d.weekIndex === i),
    });
  }

  return {
    days,
    weeks,
    daysInMonth,
    monthIndex,
  };
}

export function calculateHabitStats(habit, days) {
  const done = days.filter((d) => habit.progress?.[d.fullDate]).length;
  const total = days.length;
  const notDone = total - done;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return { done, notDone, total, percent };
}

export function calculateOverallStats(habits, days) {
  const totalPossible = habits.length * days.length;
  let totalDone = 0;

  habits.forEach((habit) => {
    days.forEach((d) => {
      if (habit.progress?.[d.fullDate]) totalDone += 1;
    });
  });

  const totalNotDone = totalPossible - totalDone;
  const percent =
    totalPossible === 0 ? 0 : Math.round((totalDone / totalPossible) * 100);

  return {
    totalDone,
    totalNotDone,
    totalPossible,
    percent,
  };
}

export function getWeeklyReport(habits, weeks) {
  return weeks.map((week) => {
    const weekTotalPossible = habits.length * week.days.length;
    let weekDone = 0;

    habits.forEach((habit) => {
      week.days.forEach((d) => {
        if (habit.progress?.[d.fullDate]) weekDone += 1;
      });
    });

    const weekNotDone = weekTotalPossible - weekDone;
    const weekPercent =
      weekTotalPossible === 0 ? 0 : Math.round((weekDone / weekTotalPossible) * 100);

    return {
      name: week.label,
      done: weekDone,
      notDone: weekNotDone,
      percent: weekPercent,
    };
  });
}

export function getMonthlyLineData(habits, days) {
  return days.map((d) => {
    let doneCount = 0;

    habits.forEach((habit) => {
      if (habit.progress?.[d.fullDate]) doneCount += 1;
    });

    const totalHabits = habits.length;
    const percent = totalHabits === 0 ? 0 : Math.round((doneCount / totalHabits) * 100);

    return {
      day: d.dayNumber,
      label: `${d.shortDay} ${d.dayNumber}`,
      done: doneCount,
      percent,
    };
  });
}