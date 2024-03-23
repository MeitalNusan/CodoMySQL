import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './../src/app/Components/ProductCard/cssProduct.css'
import  "./app/Views/Products/cssGrid.css"
import  "./app/Views/DetailProduct/cssDetail.css"
// import "./app/Views/Adidas/cssAdidas.css"
import "./app/Views/Home/cssHome.css"
import "./app/Components/Footer/cssFooter.css"
import "./app/Components/Nav/cssNav.css"
import "./App.css"

 
import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
   <App />
//   </React.StrictMode>,
)
