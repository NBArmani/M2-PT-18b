//_________________________________________PARA MOSTRAR LA LISTA______________________________________________//
const listaDeAmigos = document.querySelector("#lista")
const mostrarAmigos = document.querySelector("#boton")
const URL_BASE = "http://localhost:5000/amigos"

const crearLista = (amigos) => {
    const li = document.createElement("li")
    li.innerHTML = amigos.name
    listaDeAmigos.appendChild(li)
}



const verAmigos = (amigo) => {
    listaDeAmigos.innerHTML = ""
    amigo.forEach(crearLista)
}


mostrarAmigos.addEventListener("click", () => {
    $.get(URL_BASE, verAmigos)
})
// ? ______________________________________________PARA BUSCAR______________________________________________ ? //

const botonBuscar = document.querySelector("#search")
const barraDeBusqueda = document.querySelector("#input")
const buscarAmigo = document.querySelector("#amigo")

botonBuscar.addEventListener("click", () => {
    const ID = barraDeBusqueda.value
    $.get(`${URL_BASE}/${ID}`, (data) => {
        buscarAmigo.textContent = data.name
    })
})

// ! ______________________________________________PARA BORRAR______________________________________________ ! //
const botonDelete = document.querySelector("#delete")
const barraInput = document.querySelector("#inputDelete")
const buscarAEliminar = document.querySelector("#success")
botonDelete.addEventListener("click", () => {
    const ID = barraInput.value
    $.ajax({
        url: `${URL_BASE}/${ID}`,
        type: "DELETE",
        success: (persona) => {
            buscarAEliminar.textContent = persona.name
            buscarAEliminar.textContent = "persona eliminada correctamente"

        }
    })
})