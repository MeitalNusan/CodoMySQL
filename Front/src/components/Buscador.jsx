import { FaSearch } from "react-icons/fa";
import "./buscador.css"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useQuery} from "react-query"
import { Spinner } from "./Spinner";
 
 //use useQuery para definir error, loading y data

export const Buscador = () =>{

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8000/post/');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      };

      // caputrar url
    const useQuerys = () =>{
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuerys()
    const search = query.get("search")
    console.log(search)
    //

    const [txtBuscador, setTxtBuscador] = useState("")
    const { isLoading, error, data } = useQuery('users', fetchUsers);
    const navigate = useNavigate()
    const location = useLocation()


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/?search=${txtBuscador}`)
    }
    
    
  if (isLoading) return <div><Spinner/></div>;
  if (error) return <div>Error: {error.message}</div>;
    
   
    return(
    (data) &&(
        <form className="containerBuscador" onSubmit={handleSubmit}>
            <div className="cajaBuscador">
                <input 
                value={txtBuscador}
                onChange={(e)=>setTxtBuscador(e.target.value)}
                type="text"
                className="inputBuscador"
                />
                <button type="submit" className="botonBuscador"><FaSearch /></button>
            </div>
        </form>
    )
    )
    
}