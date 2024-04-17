import express from "express" 
import cors from "cors"

const app = express()

const port = 8000

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("estas ok en el servidor")

})

app.listen(port,()=>{
    console.log(`server funcionando en el puerto ${port}`)
})