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
//Obteniendo la etiqueta de la fecha
const fecha = document.querySelector('#fecha')

//Obteniendo modificaciones de estilo
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through' //clase que ya esta definida en CSS

//Creacion de fecha
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-PE',{weekday:'long', month: 'short', day: 'numeric'})

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

//funcion cuando se marca una tarea realizada
function tareaRealizada(element){
    //Cambiar el diseño visual del circulo
    element.classList.toggle(check)
    element.classList.toggle(uncheck)

    //Cambiar el diseño visual del texto a tachado 
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
}

//funcion cuando se elimina una tarea
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
}


//Eventos  para agregar tareas
botonAgregar.addEventListener('click', ()=>{
    const tarea = input.value
    const opcionSelect = obtenerOpcion(opciones)//Detectar que input radio esta seleccionado - retorna un string
    if(tarea){
        agregarTarea(tarea, opcionSelect, 1, false, false)
    }
    input.value = ""
})

document.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        const tarea = input.value
        const opcionSelect = obtenerOpcion(opciones)
        if(opcionSelect){
            if(tarea){
                agregarTarea(tarea, opcionSelect, 1, false, false)
               }
               input.value = ""
        } 
    }
})

//Eventos para controlar las tareas realizadas o las eliminadas

lista1.addEventListener('click', function(event){
    //Las dos primeras lineas basicamente leen el atributo data del elemento seleccionado dentro del ul lista
    const element = event.target //La propiedad "target" del objeto "event" se refiere al elemento en el que se hizo clic
    const elementData = element.attributes.data.value

    if(elementData === 'realizado'){
        tareaRealizada(element)
    }else if (elementData === 'eliminado'){
        tareaEliminada(element)
    }
})

lista2.addEventListener('click', function(event){
    //Las dos primeras lineas basicamente leen el atributo data del elemento seleccionado dentro del ul lista
    const element = event.target //La propiedad "target" del objeto "event" se refiere al elemento en el que se hizo clic
    const elementData = element.attributes.data.value

    if(elementData === 'realizado'){
        tareaRealizada(element)
    }else if (elementData === 'eliminado'){
        tareaEliminada(element)
    }
})

lista3.addEventListener('click', function(event){
    //Las dos primeras lineas basicamente leen el atributo data del elemento seleccionado dentro del ul lista
    const element = event.target //La propiedad "target" del objeto "event" se refiere al elemento en el que se hizo clic
    const elementData = element.attributes.data.value

    if(elementData === 'realizado'){
        tareaRealizada(element)
    }else if (elementData === 'eliminado'){
        tareaEliminada(element)
    }
})
