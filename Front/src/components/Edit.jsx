import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Spinner } from "./Spinner"



const Edit = ()=>{
    const [post, setPost] = useState({ name: "", image: "" })
    const [cargando, setCargando] = useState(true)


    const navigate = useNavigate()
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
     

    const update = (e)=>{
        e.preventDefault()
        const updatedPost = { ...post };
        navigate("/")
    }

    return(
        <div>
        <h1>Editar Post</h1>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Editar Post</label>
                    <input 
                    type="text"
                    value={post.name} 
                    onChange={(e)=>setPost({ ...post, name: e.target.value })} 
                    className="form-control" />
                </div>
                
                <button type="submit" className="btn btn-primary">EDITAR</button>
            </form>
       </div>
    )
    
}

export default Edit

// const Edit = ()=>{
//     const [titulo, setTitulo] = useState("")
//     const [contenido, setContenido] = useState("")
//     const [cargando, setCargando] = useState(true)


//     const navigate = useNavigate()
//     const API = "http://localhost:8000/post/"

//     const {id} = useParams()


//     const getPostById = async() =>{
//         const respuesta = await axios.get(API+id)
//         setTitulo(respuesta.data.title)
//         setContenido(respuesta.data.content)

//     }


//     useEffect(()=>{
//          setCargando(true)
//          getPostById()
//          setCargando(false)
//      },[])


//     if(cargando){
//         return <Spinner/>
//     }
     

//     const update = async (e)=>{
//         e.preventDefault()
//         await axios.put(API+id, {
//             title:titulo,
//             content:contenido,
//         })
//         navigate("/")
//     }

//     return(
//         <div>
//         <h1>Editar Post</h1>
//             <form onSubmit={update}>
//                 <div className="mb-3">
//                     <label className="form-label">Titulo</label>
//                     <input 
//                     type="text"
//                     value={titulo} 
//                     onChange={(e)=>setTitulo(e.target.value)} 
//                     className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Contenido</label>
//                     <input 
//                     type="text"
//                     value={contenido} 
//                     onChange={(e)=>setContenido(e.target.value)} 
//                     className="form-control" />
//                 </div>
//                 <button type="submit" className="btn btn-primary">EDITAR</button>
//             </form>
//        </div>
//     )
    
// }

// export default Edit