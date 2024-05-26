import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Spinner } from "./Spinner"
import "./buscador.css"

export const Card =() =>{
    const [post, setPost] = useState({ name: "", image: "" })
    const [cargando, setCargando] = useState(true)

    const API = "https://rickandmortyapi.com/api/character/"

    const {id} = useParams()


    const getPostById = async() =>{
        const respuesta = await axios.get(API+id)
        setPost(respuesta.data);

    }


    useEffect(()=>{
         setCargando(true)
         getPostById()
         setCargando(false)
     },[id])


    if(cargando){
        return <Spinner/>
    }
     


    return(
        <div className="car">
           <h3>{post.name}</h3>
           <p><img height={360} src={post.image}/></p>
           <p>Status: {post.status}</p>
        </div>     
             
    )
    
}

