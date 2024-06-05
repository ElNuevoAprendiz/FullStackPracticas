let contenedorPersonajes = document.getElementById("Personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach(elementos => {
        console.log(elementos.name)
        
    });

})
