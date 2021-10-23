import { useState } from "react/cjs/react.development"
import MovieTable from "./MovieTable"

const Form=(props)=>{
    const [currentName,setCurrentName]=useState(null)
    const [currentAge,setCurrentAge]=useState(null)
    const changedName=(event)=>{
        setCurrentName(event.target.value)
    }
    const changedAge=(event)=>{
        setCurrentAge(event.target.value)
    }
    const submitName=()=>{
        props.parentCallback({name:currentName,age:currentAge})
    }
    return(
        <div>
            <input type="text" onChange={changedName} data-testid="textInput"></input>
            <input type="text" onChange={changedAge} data-testid="ageInput"></input>
            <button type="submit" onClick={submitName} data-testid="saveButton">Save</button>
            <MovieTable/>
        </div>
    )
}
export default Form;