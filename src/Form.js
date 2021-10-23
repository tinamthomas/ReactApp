import { useState } from "react/cjs/react.development"

const Form=(props)=>{
    const [currentName,setCurrentName]=useState(null)
    const changedName=(event)=>{
        setCurrentName(event.target.value)
    }
    const submitName=()=>{
        props.parentCallback(currentName)
    }
    return(
        <div>
            <input type="text" onChange={changedName} data-testid="textInput"></input>
            <button type="submit" onClick={submitName} data-testid="saveButton">Save</button>
        </div>
    )
}
export default Form;