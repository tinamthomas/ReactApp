import { useState } from "react";

const ToDoItem=(props)=>{
    const [checked,setChecked]=useState(false);
    const[isEditing,setIsEditing]=useState(false)
    function updateCheck(){
        setChecked(!checked);
    }
    function editList(){
        if(!checked)
        setIsEditing(!isEditing);
    }
    function changeItem(event){
        props.updateItem(event.target.value);
    }
    return(
        <div>
       <input type="checkbox" onChange={updateCheck}></input>
       {checked?
       <del><label>{props.todo}</label></del>:
       !isEditing?
                <label>{props.todo}</label>:
                <input type="text" value={props.todo} onChange={changeItem}></input>}
       
        <input type="button" value={isEditing?"Save":"Edit"} onClick={editList}></input>
        </div>
    )
}
export default ToDoItem;