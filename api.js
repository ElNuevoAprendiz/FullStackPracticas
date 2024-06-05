let contenedorPersonajes = document.getElementById("Personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach(elementos => {
       console.log(elementos.name)
       console.log(elementos.image)

    const contenedorCreado = document.createElement('div')
        //Usa bastic por eso las comillas invertidas, y ademas el uso del signo $
    contenedorCreado.innerHTML = `
        <h4>${elementos.name}</h4>
        <img src="${elementos.image}">
    
    
    
    `;

    contenedorPersonajes.append(contenedorCreado)
        
    });

})
