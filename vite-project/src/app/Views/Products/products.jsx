import { ProductCard } from "../../Components/ProductCard/productCard"
import { Link } from "react-router-dom"
import { get } from "../../utils/httpClient"
import { useState, useEffect } from "react"
// import productos from "../../data/peliculas.json"


export const Products = () => { 

  const [products, setProducts] = useState([])


  useEffect(()=>{
     get("character").then((data)=>{
      setProducts(data.results)
       
     })
  },[])

    return (
        <div className="contenedorGrid">
          <div className="title" >
             <p> Listado de Productos</p>
          </div>

          <div className="moviesGrid">
              {products.map((product)=>(
              <>  
              <ProductCard 
                key={product.id} 
                producto={product}    
              />
              </>
             ))}
          </div>
        </div>
    
    )
  }
  
   