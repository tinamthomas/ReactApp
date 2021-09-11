import { useState } from "react"

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
                    return <li>{todo}</li>
            })}</ul></div>
        </div>
    )
}
export default ToDoButton