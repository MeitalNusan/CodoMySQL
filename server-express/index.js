import express from "express" 
import cors from "cors"

const app = express()

const port = 3030

app.use(cors())
app.use(express.json)



app.get("/", (req, res)=>{
    res.send("estas ok en el servidor")

})
app.get("/contactos", (req, res)=>{
    res.send("estas en contactos")

})

app.listen(port, ()=>{
    console.log(`server funcionando en el puerto ${port}`)
})