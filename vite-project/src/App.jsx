import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./app/Views/Home/home"
import { Products } from "./app/Views/Products/products"
import { DetailProduct } from "./app/Views/DetailProduct/DetailProduct"
import { Layout } from "./app/Components/Layout/Layout"
import { Adidas } from "./app/Views/Marcas/Adidas/Adidas"
import { Athix } from "./app/Views/Marcas/Athix/Athix"
import { CreateAdidas } from "./app/Views/Create/AdidasCreate/CreateAdidas"
import { EditAdidas } from "./app/Views/Create/AdidasCreate/EditAdidas"
import { CreateAthix } from "./app/Views/Create/AthixCreate/CreateAthix"
import { EditAthix } from "./app/Views/Create/AthixCreate/EditAthix"
import { EditHome } from "./app/Views/Home/editGemelos"  
import { EditHome2 } from "./app/Views/Home/editNovedad"  
import { EditHome3 } from "./app/Views/Home/edit3Finales"  
import { EditHome4 } from  "./app/Views/Home/editCarousel"
import { CreateHome } from "./app/Views/Home/createGemelos"
import { CreateHome2 } from "./app/Views/Home/createNovedad"  
import { CreateHome3 } from "./app/Views/Home/create3Finales" 
import { CreateHome4 } from "./app/Views/Home/createCarousel"
 
 
// import 'bootstrap/dist/css/bootstrap.min.css'
export const App = () => {

  return (
    <>
  
    <div className="app">
      <BrowserRouter>
             <Routes>   
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="/Adidas" element={<Adidas />} />
                    <Route path="/Athix" element={<Athix />} />
                    <Route path="/createAdidas" element={<CreateAdidas />} />
                    <Route path="/editAdidas/:id" element={<EditAdidas />} />
                    <Route path="/createAthix" element={<CreateAthix />} />
                    <Route path="/editAthix/:id" element={<EditAthix />} />
                    <Route path="/editGemelos/:id" element={<EditHome />} />
                    <Route path="/editNovedad/:id" element={<EditHome2 />} />
                    <Route path="/edit3Finales/:id" element={<EditHome3 />} />
                    <Route path="/editCarousel/:id" element={<EditHome4 />} />
                    <Route path="/createHome" element={<CreateHome />} />
                    <Route path="/createHome2" element={<CreateHome2 />} />
                    <Route path="/createHome3" element={<CreateHome3 />} />
                    <Route path="/createHome4" element={<CreateHome4 />} />
                   </Route>
            </Routes>
      </BrowserRouter>
    </div>
    
    </>
    
  )
}


