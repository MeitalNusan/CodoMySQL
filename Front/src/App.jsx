import Show from "../src/components/Show.jsx"
import Edit from "../src/components/Edit.jsx"
import Create from "../src/components/Create.jsx"
import { Card } from "./components/Card.jsx"
 import { Layout } from "./components/Layout.jsx"
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"


const queryClient = new QueryClient();

const App = () =>{
  return(
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Show/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="/card/:id" element={<Card/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
    </QueryClientProvider>
  )
}

export default App