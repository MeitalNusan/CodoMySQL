import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getDoc, updateDoc,doc } from "firebase/firestore"
import { db } from "../../../firebase/firebase.js"



export const EditAthix = () =>{
    const [deporte, setDeporte] = useState("")
    // const [marca, setMarca] = useState("")
    // const [prenda, setPrenda] = useState("")
    const [img, setImg] = useState("")

    const navigate = useNavigate()
    const {id} = useParams()


//buscar item por ID en la base de datos
    const getDeportebyId = async (id) =>{
        const deporteDoc = await getDoc(doc(db, "Athix", id))

        if(deporteDoc.exists()){
            setDeporte(deporteDoc.data().deporte)
            // setMarca(deporteDoc.data().marca)
            setPrenda(deporteDoc.data().prenda)
            setImg(deporteDoc.data().img)
         }else{
            console.log("no existe")

        }
    }

// llamar a la función pero en un useEffect para que se renderice cuando quiero
    useEffect(()=>{
        getDeportebyId(id)
    },[])


//modificar lo que busque por ID
const update = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!deporte /*|| !prenda*/) {
        // Display an error message or prevent form submission
        console.log("Please fill in all fields");
        return;
    }

    const deporteDoc = doc(db, "Athix", id);

    try {
        let imgDataUrl = ""; // Initialize with an empty string

        // Check if img is a valid File object
        if (img instanceof File) {
            // Convert File to data URL
            imgDataUrl = await convertFileToDataUrl(img);
        } else {
            // Handle the case where img is not a valid File object
            console.error("Invalid image file");
            // You might want to display an error message to the user or handle it differently
        }

        const data = {
            deporte: deporte,
            // marca: marca,
            // prenda: prenda,
            img: imgDataUrl,
        };

        await updateDoc(deporteDoc, data);
        navigate("/Athix");
    } catch (error) {
        // Handle errors, including the conversion error
        console.error("Error updating document:", error);
    }
};
// Helper function to convert File to data URL
const convertFileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};

    return (
        <div className="conteiner">
            <h1>Edit Athix</h1>
            <div className="row">
                <div className="col-3">
                    <form onSubmit={update}>
                        <div className="mb-3">
                              <label className="form-label">Deporte:</label>
                              <input
                              onChange={(e) =>setDeporte(e.target.value)}
                              value={deporte}
                              className="form-control"
                              type="text"
                               />
                               <br />
                              {/* <label className="form-label">Marca:</label>
                               <input
                              onChange={(e) =>setMarca(e.target.value)}
                              value={marca}
                              className="form-control"
                              type="text"
                               /> */}
                              {/* <label className="form-label">Prenda:</label>
                               <input
                              onChange={(e) =>setPrenda(e.target.value)}
                              value={prenda}
                              className="form-control"
                              type="text"
                               /> */}
                              {/* <label className="form-label">Imagen:</label> */}
                              <label className="form-label">Imagen:</label>
                            <input
                                onChange={(e) => setImg(e.target.files[0])}
                                className="form-control"
                                type="file"
                            />

                        </div>
                        <button type="submit" className="btn btn-primary">Editar</button>
                       <Link className="btn btn-danger" to="/Athix">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>      
    )
}