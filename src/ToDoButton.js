import { useState } from "react"

const ToDoButton=()=>{
    const[inputText,setInputText]=useState('')
    const[displayText,setDisplayText]=useState('')
    const onButtonClick=()=>{
        setDisplayText(inputText)
        setInputText('')
    }
    const listenToText=(event)=>{
       setInputText(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={listenToText} value={inputText}></input>
            <button onClick={onButtonClick}>Click</button>
            {displayText.length!==0&&<div>{displayText}</div>}
        </div>
    )
}
export default ToDoButton