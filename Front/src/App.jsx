import Show from "../src/components/Show.jsx"
import Edit from "../src/components/Edit.jsx"
import Create from "../src/components/Create.jsx"
import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () =>{
  return(
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Show/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App