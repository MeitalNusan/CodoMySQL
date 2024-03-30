import http from "http"


const port = 3030
const server = http.createServer((req, res)=>{

    res.statusCode=200
    res.setHeader ("Content-type", "text/html")
    res.end("<h1>hola desde el servidor</h1>")

})

server.listen(port) 