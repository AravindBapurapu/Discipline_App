import { useState } from "react";

export default function TaskNoteModal({ open, habitName, onSave, onCancel }) {

const [note,setNote] = useState("");

if(!open) return null;

return(

<div className="fixed inset-0 flex items-center justify-center bg-black/40">

<div className="bg-white p-6 rounded-xl w-[400px]">

<h3 className="text-lg font-semibold mb-2">
{habitName}
</h3>

<textarea
placeholder="What did you do today?"
value={note}
onChange={(e)=>setNote(e.target.value)}
className="w-full border rounded p-2"
/>

<div className="flex justify-end gap-3 mt-4">

<button onClick={onCancel}>
Cancel
</button>

<button
onClick={()=>onSave(note)}
className="bg-violet-500 text-white px-4 py-2 rounded"
>
Save
</button>

</div>

</div>

</div>

)

}