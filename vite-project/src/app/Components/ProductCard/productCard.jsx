//https://fakestoreapi.com/products
import { Link } from "react-router-dom"

export const ProductCard = ({producto}) => { 

    return (
      <div className="">
        <Link className="moviesCard" to={`/product/${producto.id}`}><img className="movieImage" src={producto.image} />
        <p>Nombre: {producto.name}</p>
        <p>Genero: {producto.gender}</p>
        </Link>
      </div>
      
    )
  }
  
  