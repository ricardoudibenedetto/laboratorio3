/* let x = {nombre : "jose", apellido:"Perez", edad :40};

let xhr= new XMLHttpRequest();
xhr.onreadystatechange = ()=>{
   if( xhr.readyState == 4 && xhr.status == 200){
       console.log(JSON.parse(xhr.responseText));
   }
}
xhr.open('POST', 'http://localhost:3000/altaPersona', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(x)); */
var frm;
let personas;
window.addEventListener("load", init);

function init() {
    btnmodificar = document.getElementById('btnModificar');
    btnmodificar.style.display = "none";
    btneliminar = document.getElementById('btnEliminar').style.display = "none";
    btnmodificar.addEventListener("click", modificar);
    this.frm = document.forms[0];
    this.frm.addEventListener("submit", manejadorSubmit);
}

function manejadorSubmit($event) {
    $event.preventDefault();
    btnmodificar = document.getElementById('btnModificar').style.display = "block";
    btnmodificar = document.getElementById('btnEliminar').style.display = "block";
    let persona = obtenerAnuncioForm($event.target);
    /*  */
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    }

    xhr.open('POST', 'http://localhost:3000/altaPersona', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));

    generarTabla();

    document.getElementById('frm').reset();
}


function cargarEventos() {
    let trs = document.getElementsByTagName('tr');
    for (let index = 1; index < trs.length; index++) {
        trs[index].addEventListener("click", cargarForm)
    }
}

function cargarForm(e) {
    frm.id.value = e.path[1].childNodes[0].innerText;
    frm.nombre.value = e.path[1].childNodes[1].innerText;
    frm.apellido.value = e.path[1].childNodes[2].innerText;
    frm.edad.value = e.path[1].childNodes[3].innerText;
    debugger

}
function obtenerAnuncioForm(frm) {
    let nombre;
    let apellido;
    let edad;
    let anuncio = {};
    for (elemento of frm.elements) {
        switch (elemento.name) {
            case "titulo":
                anuncio.titulo = elemento.value;
                break;
            case "transaccion":
                
                anuncio.apellido = elemento.value;
                break;
            case "edad":
                anuncio.edad = elemento.value;
                break;
        }
    }
    console.log(anuncio);
    return anuncio;
}

function generarTabla() {
    let xhr = new XMLHttpRequest();
    /* getPersonas */
    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {

            console.log(JSON.parse(xhr.responseText));
            document.getElementById('tabla').innerHTML = "";
            this.personas = JSON.parse(xhr.responseText)
            document.getElementById('tabla').appendChild(crearTabla(this.personas));
            cargarEventos();
        }
    }

    xhr.open('GET', 'http://localhost:3000/traerPersonas', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
}

function modificar() {
    let persona ={};
    /* modificarPersona */
    debugger
    persona.id = document.forms[0].id.value;
    persona.nombre = document.forms[0].nombre.value;
    persona.apellido = document.forms[0].apellido.value;
    persona.edad = document.forms[0].edad.value;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            console.log(JSON.parse(xhr.responseText));
            generarTabla();
            document.getElementById('frm').reset();
        }
    }
    xhr.open('POST', 'http://localhost:3000/modificarPersona', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));
    
}


function traerPersonas() {
    /* getPersona */
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            return JSON.parse(xhr.responseText);
        }
    }
    
    xhr.open('GET', 'http://localhost:3000/traerPersonas');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
}
