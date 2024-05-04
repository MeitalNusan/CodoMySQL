import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:8000/post"

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
                    
                </table>
            </div>
        </div>
       </div>
    ) 
    
}

export default Show;