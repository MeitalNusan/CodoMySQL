import { FaSearch } from "react-icons/fa";
import "./buscador.css"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useQuery} from "react-query"
import { Spinner } from "./Spinner";
import axios from "axios";
  
 
export const Buscador = () =>{

    const fetchUsers = async () => {
            try {
              const response = await axios.get("https://rickandmortyapi.com/api/character/")//'http://localhost:8000/post/'//;;
              return response.data.results;
            } catch (error) {
              throw new Error('Failed to fetch users');
            }
          };

    const [txtBuscador, setTxtBuscador] = useState("")
    const { isLoading, error, data } = useQuery('users', fetchUsers);
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/?search=${txtBuscador}`)
    }
    
    
  if (isLoading) return <div><Spinner/></div>;
  if (error) return <div>Error: {error.message}</div>;
    
   
    return(
  data && data.length > 0 && (
        <form className="containerBuscador" onSubmit={handleSubmit}>
            <div className="cajaBuscador">
                <input 
                placeholder="Search for name"
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