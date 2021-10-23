import { useState } from "react"
const MovieTable=(props)=>{
    const [isEdit,setIsEdit]=useState(false)
    return(
        
        <table border="1">
            <tbody>
            {props.tableDetails.map((movie,index)=>

            !isEdit?
                <tr key={"movie-"+index}>
                    <td>{movie.movieName}</td>
                    <td>{movie.rating}</td>
                    <td><button onClick={()=>{setIsEdit(true)}}>Edit</button></td>
                </tr>:
                 <tr key={"movie-Edit"+index}>
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