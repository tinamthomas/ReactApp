import { useState } from "react";

const ToDoItem=(props)=>{
    const [checked,setChecked]=useState(false);
    function updateCheck(){
        setChecked(!checked);
    }
    return(
        <div>
       <input type="checkbox" onChange={updateCheck}></input>
        {checked&&<del><label>{props.todo}</label></del>}
        {!checked&&<label>{props.todo}</label>}
        </div>
    )
}
export default ToDoItem;