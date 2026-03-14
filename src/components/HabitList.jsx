import { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import DayCheckbox from "./DayCheckbox";

export default function HabitList(){

    const { habits } = useContext(HabitContext);

    const days = Array.from({length:30},(_,i)=>i+1)

    return(

        <div>

            {habits.map(habit => (

                <div key={habit.id}>

                    <h3>{habit.name}</h3>

                    <div style={{display:"flex"}}>

                        {days.map(day => (

                            <DayCheckbox
                              key={day}
                              habitId={habit.id}
                              day={day}
                            />

                        ))}

                    </div>

                </div>

            ))}

        </div>

    )

}
