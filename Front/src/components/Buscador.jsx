import { FaSearch } from "react-icons/fa";
import "./buscador.css"
import { useState } from "react";


export const Buscador = () =>{
    const [txtBuscador, setTxtBuscador] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

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