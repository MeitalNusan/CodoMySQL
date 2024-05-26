import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Spinner } from "./Spinner"

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
        <div className="mb-3">
           <h1>{post.name}</h1>
           <p><img src={post.image}/></p>
           <p>Status: {post.status}</p>
           <Link  className="btn btn-primary" to="/">Inicio</Link> 
        </div>     
             
    )
    
}

