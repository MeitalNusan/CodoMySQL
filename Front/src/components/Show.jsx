import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"




const API = "http://localhost:8000/post/"

const Show = () => {

    const [posts, setPosts] = useState([])

    const getAllPost= async() =>{
        const res= await axios.get(API)
        setPosts(res.data)
    }

    const deletePost = async(id)=>{
        await axios.delete(`${API}${id}`)
        getAllPost()
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
        getAllPost()
    },[])

    return(
       <div className="container">
        <div className="row">
        <small>Create Post </small>
            <div className="col">     
                <Link to="/create" className="btn btn-primary mt-2">
                  <i className="fa-regular fa-plus"></i>     
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th> 
                            <th>Content</th> 
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post=>(
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>
                                    <Link to={`edit/${post.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => confirmarDelete(post.id)}>
                                         <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </div>
       </div>
    ) 
    
}

export default Show;