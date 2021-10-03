import { useState } from "react";

const ToDoItem=(props)=>{
    const [checked,setChecked]=useState(false);
    const[isEditing,setIsEditing]=useState(false)
    const [currentItem,setCurrentItem]=useState(props.todo)
    function updateCheck(){
        setChecked(!checked);
    }
    function editList(){
        if(!checked)
        setIsEditing(!isEditing);
    }
    function changeItem(event){
        setCurrentItem(event.target.value);
    }
    return(
        <div>
       <input type="checkbox" onChange={updateCheck}></input>
       {checked?
       <del><label>{props.todo}</label></del>:
       !isEditing?
                <label>{currentItem}</label>:
                <input type="text" value={currentItem} onChange={changeItem}></input>}
       
        <input type="button" value={isEditing?"Save":"Edit"} onClick={editList}></input>
        </div>
    )
}
export default ToDoItem;