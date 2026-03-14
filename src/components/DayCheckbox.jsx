import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";

export default function DayCheckbox({habitId,day}){

    const {habits,toggleDay} = useContext(HabitContext)

    const habit = habits.find(h => h.id === habitId)

    const checked = habit.days[day] || false

    return(

        <input
          type="checkbox"
          checked={checked}
          onChange={()=>toggleDay(habitId,day)}
        />

    )

}
