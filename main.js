//Obteniendo las listas
const lista1 = document.querySelector("#lista1")
const lista2 = document.querySelector("#lista2")
const lista3 = document.querySelector("#lista3")
//Obteniendo el input 
const input = document.querySelector("#input")
//Obteniendo las opciones de tipo radio
const opciones = document.querySelectorAll('input[type=radio]');
//Obteniendo el boton de agregar 
const botonAgregar = document.querySelector("#boton-agregar")


//Obteniendo modificaciones de estilo
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through' //clase que ya esta definida en CSS


function obtenerOpcion(op){
    let opcionSeleccionada
    op.forEach(opcion =>{
        if(opcion.checked){
            opcionSeleccionada = opcion.value
        }
    })

    return String(opcionSeleccionada)
}

function agregarTarea(tarea, proyecto, id, realizado, eliminado){

    if(eliminado){return} //si eliminado existe entonces se sale de la funcion

    const REALIZADO = realizado ?  check : uncheck
    const LINE  = realizado ? lineThrough : ''

    const elemento = ` <li id="elemento">
                             <i class="far ${REALIZADO}" data="realizado" id=${id}></i>
                             <p class="text ${LINE}">${tarea}</p>
                             <i class="fas fa-trash de btn-d" data="eliminado" id=${id}"></i>
    	                </li>`

    switch (proyecto){
        case "proyecto1":
            lista1.insertAdjacentHTML("beforeend", elemento)
            break;
        case "proyecto2":
            lista2.insertAdjacentHTML("beforeend", elemento)
            break;
        case "proyecto3":
            lista3.insertAdjacentHTML("beforeend", elemento)
            break;
    }
}


//Eventos 
botonAgregar.addEventListener('click', ()=>{
    const tarea = input.value
    const opcionSelect = obtenerOpcion(opciones)//Detectar que input radio esta seleccionado - retorna un string
    if(tarea){
        agregarTarea(tarea, opcionSelect, 1, false, false)
    }
    input.value = ""
})


