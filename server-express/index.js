import express from "express" 

const app = express()

const port = 3030

app.get("/", (req, res)=>{
    res.send("estas ok en el servidor")

})
app.get("/contactos", (req, res)=>{
    res.send("estas en contactos")

})

app.listen(port, ()=>{
    console.log(`server funcionando en el puerto ${port}`)
})