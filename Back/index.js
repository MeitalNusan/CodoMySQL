import express from "express" 
import cors from "cors"
import db from "./database/db.js";


const app = express()

const port = 8000

app.use(cors())
app.use(express.json())


try {
    await db.authenticate()
    console.log("conectado a la db");
} catch (error) {
    console.log(`no se pudo conectar por: ${error}`);
}

app.listen(port,()=>{
    console.log(`server funcionando en el puerto ${port}`)
})