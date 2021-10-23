import { useState, useEffect } from "react"
import * as axios from "axios";

const MovieTable=()=>{
    const [isEdit,setIsEdit]=useState(false)
    const [movies, setMovies] = useState([]);
    useEffect(async () => {
        const result = await axios.get('http://localhost:3004/movies')
        setMovies(result.data);
      }, []);
    return(
        
        <table border="1">
            <tbody>
            {movies.map((movie,index)=>
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