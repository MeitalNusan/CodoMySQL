import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {collection,getDocs, deleteDoc,doc} from "firebase/firestore"
import { db } from "../../../firebase/firebase.js"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "./cssAthix.css"


const mySwal = withReactContent(Swal)

export const Athix = () =>{
const [deportes, setDeportes] =useState([])



const deportesCollection = collection(db, "Athix")

const getDeportes = async () =>{
    const data = await getDocs(deportesCollection)
 setDeportes(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)}


const deleteDeportes = async (id) =>{
    const deportesDoc = doc(db, "Athix", id)
    await deleteDoc(deportesDoc)    
    getDeportes()
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
            deleteDeportes(id)
          Swal.fire({
            title: "Eliminado!",
            text: "Tu documento ha sido eliminado",
            icon: "success"
          });
        }
      });
      

}


useEffect(()=>{
    getDeportes()
},[deportes])


//............Imagenes.................//



    return (     
       <>
        <h1 className="tituloAthix">ATHIX</h1>  
        <div className="gridProducts"> 
          {deportes.map((deporte) => (
            <div key={deporte.id}>
              <img className="imgProducts" height={150} width={200} src={deporte.img} alt={`Image for ${deporte.deporte}`} />
              <div className="elementos">
              <p>{deporte.deporte}</p>
              <p>{deporte.marca}</p>
              <p>{deporte.prenda}</p>          
              </div>
              <p>
                <Link to={`/editAthix/${deporte.id}`} className="btn btn-light">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button className="btn btn-danger" onClick={() => confirmarDelete(deporte.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </p>
            </div>
          ))}   
        </div>
        </>
             
    )
} 