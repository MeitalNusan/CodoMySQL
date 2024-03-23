import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, doc } from "firebase/firestore";
import { db, imageDb } from "../../../firebase/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "../AdidasCreate/cssCreateAdid.css"
 
export const CreateAdidas = () => {
  const navigate = useNavigate();
  const [deporte, setDeporte] = useState("");
  // const [marca, setMarca] = useState("");
  // const [prenda, setPrenda] = useState("");
  const [urlImDesc, setUrlImDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const guardarInfo = async (e) => {
    e.preventDefault();
  
    if (!deporte ) /*agregar || !marca || !prenda */ {
      console.log("Please fill in all fields");
      return;
    }
  
    
      const newD = {
        deporte: deporte,
        // marca: marca,
        // prenda: prenda,
        img:urlImDesc,
      };
  
      try {
        await addDoc(collection(db, "Adidas"), { ...newD });
        navigate("/Adidas");
      } catch (error) {
        console.error(error);
      }
  
      setIsLoading(false);
      setDeporte("");
      // setMarca("");
      // setPrenda("");
      setUrlImDesc("");
    }  
    
  
  const fileHandler = async (e) => {
    try {
      const archivoI = e.target.files[0];
  
      // Check if a file is selected
      if (!archivoI) {
        console.error("No file selected");
        return;
      }
  
      // Check if the selected file is an image
      if (!archivoI.type.startsWith("image/")) {
        console.error("Invalid file type. Please select an image file.");
        return;
      }
  
      const refArchivo = ref(imageDb, `documentos/${archivoI.name}`);
      await uploadBytes(refArchivo, archivoI);
      const imageUrl = await getDownloadURL(refArchivo);
      setUrlImDesc(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle the error, display a message, etc.
    }
  };
  
  return (
    <div>
       <form className="conteiner" onSubmit={guardarInfo}>
       <h1>Create Adidas</h1>
        <label className="form-label">Modelo:</label>
        <div>
          <input
            id="deporte"
            className="form-control"
            type="text"
            placeholder="deporte"
            value={deporte}
            onChange={(e) => setDeporte(e.target.value)}
          />
        </div>

        {/* <label className="form-label">Marca:</label>
        <div>
          <input
            id="marca"
            className="form-control"
            type="text"
            placeholder="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div> */}

        {/* <label className="form-label">Prenda:</label>
        <div>
          <input
            id="prenda"
            className="form-control"
            type="text"
            placeholder="prenda"
            value={prenda}
            onChange={(e) => setPrenda(e.target.value)}
          />
        </div> */}

        <label className="form-label">Agregar Imagen: </label>
        <input
          type="file"
          id="file"
          placeholder="agregar imagen"
          className="form-control"
          onChange={fileHandler}
        />
        <button className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Creating..." : "Crear"}
        </button>      

        <Link className="btn btn-danger" to="/Adidas">
          Cancelar
        </Link>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br />
    </div>
  );
};
