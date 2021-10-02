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
    return(
        <div>
            <input type="text" onChange={listenToText} value={inputText}></input>
            <button onClick={onButtonClick}>Click</button>
            <div><ul>{toDoList.map(todo=>{
                    return <ToDoItem todo={todo}></ToDoItem>
            })}</ul></div>
        </div>
    )
}
export default ToDoButton