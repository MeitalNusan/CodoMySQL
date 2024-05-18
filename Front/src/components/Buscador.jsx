import { FaSearch } from "react-icons/fa";
import "./buscador.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Buscador = () =>{
    const [txtBuscador, setTxtBuscador] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/?search=${txtBuscador}`)
    }
    
    return(
        <form className="containerBuscador" onSubmit={handleSubmit}>
            <div className="cajaBuscador">
                <input 
                value={txtBuscador}
                onChange={(e)=>setTxtBuscador(e.target.value.toUpperCase())}
                type="text"
                className="inputBuscador"
                />
                <button type="submit" className="botonBuscador"><FaSearch /></button>
            </div>
        </form>
         
    )
    
}