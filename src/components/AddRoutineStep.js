import React from "react";
import { useState } from "react";
const AddRoutineStep = ({onAddStep}) => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [reminder,setReminder] = useState(false)
    const onSubmit = (e) =>{
     e.preventDefault();
     if(!title){
        alert('Please add routine step title')
        return
     }else if (!body){
        alert('Please add routine step details')
        return
     }
     onAddStep({title,body,reminder})
     setTitle('')
     setBody('')
     setReminder(false)
    }
  return (
    <form className="add-form" onSubmit = {onSubmit}>
      <div className="form-control">
        <label>Routine Step Title</label>
        <input type="text" placeholder="Add Skin Care Routine Step Title" value={title} onChange = {(e)=> setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Routine Step Details</label>
        <input type="text" placeholder="Add Skin Care Routine Step Details" value={body} onChange = {(e)=> setBody(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange = {(e)=> setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value = "Save Routine  Step" className = 'btn btn-block' />
    </form>
  );
};

export default AddRoutineStep;
