import { useState } from "react"
const MovieTable=()=>{
    const [isEdit,setIsEdit]=useState(false)
    const [tableDetails,setTableDetails]=useState([{movieName:"Harry Potter",rating:"10"},{movieName:"Back to the future",rating:"10"}])
    return(
       
        <table border="1">
            <tbody>
            {tableDetails.map((movie,index)=>

            !isEdit?
                <tr key={"movie-"+index}>
                    <td>{movie.movieName}</td>
                    <td>{movie.rating}</td>
                    <td><button onClick={()=>{setIsEdit(true)}}>Edit</button></td>
                </tr>:
                 <tr>
                 <td><input defaultValue={movie.movieName}></input></td>
                 <td><input defaultValue={movie.rating}></input></td>
                 <td>
                     <button onClick={()=>{setIsEdit(false)}}>Save</button>
                     <button onClick={()=>{setIsEdit(false)}}>Cancel</button>
                 </td>
                </tr>      
            )
            }
            </tbody>
            </table>
           
    )
}
export default MovieTable