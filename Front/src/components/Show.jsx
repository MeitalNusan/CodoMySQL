import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2"
import { Spinner } from "./Spinner"
import { Buscador } from "./Buscador";
import "./Show.css"

  

const Show = () => {
    const [posts, setPosts] = useState([])
    const [cargando, setCargando] = useState(true)

      // caputrar url
    const useQuery = () =>{
        const location = useLocation()
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery()
    const search = query.get("search")
    
    
    const getAllPost = async () => {
        const searchURL = search? `https://rickandmortyapi.com/api/character/?name=` + search:'https://rickandmortyapi.com/api/character/';

        try {
            const res = await axios.get(searchURL);
            setPosts(res.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setCargando(false);
        }
    }


    const deletePost = (id)=>{
        setPosts(posts.filter(post => post.id !== id));   
    }

    const confirmarDelete = (id) =>{
        Swal.fire({
            title: "Estas seguro?",
            text: "No se podrá revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deletePost(id)
              Swal.fire({
                title: "Eliminado!",
                text: "Tu documento ha sido eliminado",
                icon: "success",
              });
            }
          });
        } 
    

    useEffect(()=>{
        setCargando(true);
         getAllPost()
     },[search])

    if(cargando){
        return <Spinner/>
    }
    return(
       <div className="conteiner">  
              <h1 className="title">Rick And Morty</h1> 
                    <section className="table">
                        {posts.map((post=>(           
                            <div key={post.id}>
                                <Link to={`card/${post.id}`} className="name">
                                     <p>{post.name}</p>
                                </Link>
                                <ul>
                                    <Link to={`card/${post.id}`}>
                                         <img className="img" src={post.image}  />
                                    </Link>
                                </ul>
                               
                                    <div> 
                                     <Link to={`edit/${post.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => confirmarDelete(post.id)}>
                                         <i className="fa-solid fa-trash"></i>
                                    </button>

                                    </div>
                                  
                                 
                            </div>       
                        )))}
                    </section>
            </div>
       
    ) 
    
}

export default Show;

//no use useQuery para los errores


// const API = "http://localhost:8000/post/"

// const Show = () => {
//     const [posts, setPosts] = useState([])
//     const [cargando, setCargando] = useState(true)

 
//     const getAllPost= async() =>{
//         const res= await axios.get(API)
//         setPosts(res.data)
//     }

//     const deletePost = async(id)=>{
//         await axios.delete(`${API}${id}`)
//         getAllPost()
//     }

//     const confirmarDelete = (id) =>{
//         Swal.fire({
//             title: "Estas seguro?",
//             text: "No se podrá revertir",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 deletePost(id)
//               Swal.fire({
//                 title: "Eliminado!",
//                 text: "Tu documento ha sido eliminado",
//                 icon: "success",
//               });
//             }
//           });
//         } 
    

//     useEffect(()=>{
//         setCargando(true)
//         getAllPost()
//         setCargando(false)
//     },[])

//     if(cargando){
//         return <Spinner/>
//     }
//     return(
//        <div className="container">
//         <div className="row">
//         <Buscador/>
//         <small>Create Post </small>
//             <div className="col">     
//                 <Link to="/create" className="btn btn-primary mt-2">
//                   <i className="fa-regular fa-plus"></i>     
//                 </Link>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Title</th> 
//                             <th>Content</th> 
//                             <th>Actions</th> 
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {posts.map((post=>(
//                             <tr key={post.id}>
//                                 <td>{post.title}</td>
//                                 <td>{post.content}</td>
//                                 <td>
//                                     <Link to={`edit/${post.id}`} className="btn btn-primary">
//                                         <i className="fa fa-edit"></i>
//                                     </Link>
//                                     <button className="btn btn-danger" onClick={() => confirmarDelete(post.id)}>
//                                          <i className="fa-solid fa-trash"></i>
//                                     </button>
//                                 </td>
//                             </tr>
//                         )))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//        </div>
//     ) 
    
// }

// export default Show;

