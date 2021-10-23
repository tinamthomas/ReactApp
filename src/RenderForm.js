import { useState } from "react/cjs/react.development";
import Form from "./Form";

const RenderForm=()=>{
    const [name,setName]=useState("Hello")
    const [age,setAge]=useState("12")
    const handlerCallBack=(object)=>{
        setName(object.name)
        setAge(object.age)
        setIsForm(false)
    }
    const [isForm,setIsForm]=useState(false)
    const renderForm=()=>{
        setIsForm(!isForm)
    }
    return (
        <div>
            <div>{name}</div>
            <input type="button" onClick={renderForm} value="Show Form"></input>
            {isForm&&<Form parentCallback={handlerCallBack}></Form>}
        </div>
    )
}
export default RenderForm;