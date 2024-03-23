//https://fakestoreapi.com/products
import { Link } from "react-router-dom"
import { useState } from 'react'

  
 

function Footer  () { 
     
    return(
        
         <footer className="footer">
            <div className="politicas"> 
                <a className="politica" href="" >Politicas y privacidad |</a> 
                <a className="politica" href="" >Quienes somos? |</a>
                <a className="politica" href="" >Contactanos |</a>
            </div>
           <div class="redes">
                 <a class="i" href="https://www.instagram.com/"><i class='bx bxl-instagram-alt' ></i></a>
                <a class="w" href="https://www.whatsapp.com/"><i class='bx bxl-whatsapp'></i></a>
                <a class="t" href="https://www.twitter.com/"><i class='bx bxl-twitter'></i></a>
           </div>
        </footer>
        
    )
    

}
export default Footer
  
  