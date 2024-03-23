//https://fakestoreapi.com/products
import { Link } from "react-router-dom"
import { useState } from 'react'
 
  


function Nav  () { 
     
    return(
         <div className="nav-container">
            <nav className="nav1">
            
            <div className="item2" >
                   <Link className="tituloHome" to="/"> <h1 > ALWAYS</h1></Link>
                </div>


        <div className="item1">
                  <div class="dropdown">
           <button class="btn btn- dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link className="botones">  Mujeres</Link>   </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Ropa deportiva</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Zapatillas</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Bikinis</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Ropa interior</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Botines</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Sandalias</Link></button>
              </div>
            </div>
 
            <div class="dropdown">
           <button class="btn btn- dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link className="botones">  Hombres</Link>   </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Zapatillas</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Ropa deportiva</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Mallas</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Botines</Link></button>
              </div>
            </div>
 
           <div class="dropdown">
           <button class="btn btn- dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link className="botones">  Marcas</Link>   </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Adidas</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Diadora</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Olympikus</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">New Balance</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Athix">Athix</Link></button>
                  <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Fila</Link></button>
              </div>
            </div>
 

          {/* <div class="dropdown">
              <button class="btn btn- dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link className="botones">  Deportes</Link>   </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Futbol</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Running</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Voley</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Tenis</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Natación</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/Adidas">Training</Link></button>
            </div>
         </div>
  */}
         <div class="dropdown">
              <button class="btn btn- dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link className="botones">  Crear</Link>   </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="btn btn-light"><Link className="btn btn" to="/createHome">Crear Gemelos</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/createHome2">Crear Novedad</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/createHome3">Crear 3 Novedades</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/createHome4">Crear Carousel</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/createAdidas">Crear Adidas</Link></button>
              <button className="btn btn-light"><Link className="btn btn" to="/createAthix">Crear Athix</Link></button>
              </div>
         </div>
 
                   

      </div>
 
                
        </nav>
        </div>
    )
    

}
export default Nav
  
  