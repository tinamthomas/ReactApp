import { useState } from "react"
import ToDoItem from "./todoItem"
const ToDoButton=()=>{
    const[inputText,setInputText]=useState('')
    const[toDoList,setToDoList]=useState([])
    const onButtonClick=()=>{
        setToDoList([...toDoList,inputText])
        setInputText('')
    }
    const listenToText=(event)=>{
       setInputText(event.target.value)
    }
    const updateItemAtElementAt = (index) => (newItem) => {
        const newState = [... toDoList.slice(0, index), newItem, ... toDoList.slice(index+1)];
        setToDoList(newState);
    }
    return(
        <div>
            <input type="text" onChange={listenToText} value={inputText}></input>
            <button onClick={onButtonClick}>Click</button>
            <div><ul>{toDoList.map((todo, index)=>{
                    return <ToDoItem todo={todo} updateItem={updateItemAtElementAt(index)}></ToDoItem>
            })}</ul></div>
        </div>
    )
}
export default ToDoButton