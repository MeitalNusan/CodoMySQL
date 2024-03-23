//https://fakestoreapi.com/products
import { get } from "../../utils/httpClient"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
 

export const DetailProduct = () => { 
const [product, setProduct] = useState(null)
const [count, setCount] = useState(0)
const {id} = useParams()


    useEffect(() => {
        get(`character/${id}`).then((data)=>{
            setProduct(data)     
             
        })
        
    },[id])

    if (!product){
        return null;
    }
   
    // const imgUrl = `https://rickandmortyapi.com/api/character/avatar/${id}`

    return(

        <div className="containerDetail">
         <img className="colDetail" src={product.image} alt="" />
         {/* <h1>{product.name}</h1> */}
         
         <div className="productDetail col">
             <p className="item">
                <strong>Titulo:</strong>
                {product.name}
             </p>
                {/* cuando hay mas de un genero por ejemplo dentro de un resultado podes todos recorriendo con un map por ejemplo:  
                 {product.gender.map((genre)=>genre.name).join(" - ")}
                 y ahi mostras genero: romantico, suspenso, accion */}
             <p>
                <strong>Fecha de creación: </strong>
                {product.created}
             </p>
             <div className="carrito">
                <ul> <button onClick={() =>setCount((count) => count + 1)}>+</button></ul>
                    <ul> <h2>{count}</h2></ul>
                    <ul> <button onClick={() =>setCount((count) => count - 1)}>-</button></ul>       
                </div>
         </div>

        </div>
    )
    

}
  
  