const API =" https://rickandmortyapi.com/api/"

export const get = (path)=>{
    return fetch(API+path,{
        headers:{
            Auth:'eyJhbGciOiJIUzI1NiIsInR'

        }
    }).then((results)=>results.json())

}

// get("/discover/movie").then((data=>{
//     data.results
// }))