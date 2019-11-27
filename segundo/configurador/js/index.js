
let frm;
let frmChecks;
let futuroEnum = ["todas","compra","alquiler"]
window.addEventListener("load", iniciador);

function iniciador() {
    debugger
    let btnBorrar = document.getElementById("btnEliminar");
    //let inputProm = document.getElementById("promedio");
    let selTransaccion = document.getElementById("selTransaccion");
    selTransaccion.addEventListener("change", fitrarTransaccion);
    btnBorrar.addEventListener("click",eliminarAnuncio);
    this.frm = document.forms[0];
    this.frmChecks = document.forms[1];
    this.frm.addEventListener("submit", manejadorSubmit);
    if(getAnuncios()) {
        anuncios = getAnuncios();
        document.getElementById("tabla").innerHTML = "";
        document.getElementById("tabla").appendChild(crearTabla(anuncios));
        cargarFuncionClickALaTabla();
        promedio(anuncios);
    }
    agregarMetodosChecks();

    cargarSelect(selTransaccion, futuroEnum);
}

function manejadorSubmit($event) {
    $event.preventDefault();

    let nuevoAnuncios = obtenerAnuncios($event.target);
    debugger
    if(nuevoAnuncios.id <= anuncios.length) {
        anuncios[nuevoAnuncios.id - 1] = nuevoAnuncios;
    }else{
        anuncios.push(nuevoAnuncios);
    }
    guardarAnuncios(anuncios);
    promedio(anuncios);
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").appendChild(crearTabla(anuncios));
    if(getAnuncios()) {
        cargarFuncionClickALaTabla();
    }
    /* trs.forEach(element => {
        element.addEventListener("click", ()=>{
            alert("touch");
        }) 
    }); */
    
    document.getElementById('form').reset();
}
function cargarFuncionClickALaTabla() {
    let trs = document.getElementsByTagName("tr");
    let idTouch = 0;
    for (let i = 1; i < trs.length; i++) {
        trs[i].addEventListener("click", function(e){
            /* con este anuncio cargar los inputs aca en el click */
           idTouch = e.path[1].childNodes[0].innerText;
           let anuncio = buscarPorId(idTouch);
           console.log(buscarPorId(idTouch));
           setTimeout(cargarDatosForm(anuncio) , 0);
         });
        
    }    
}

function buscarPorId(id){
    let anu;
    anuncios.forEach( anuncio => {
        if(anuncio.id == id){
            anu = anuncio;
        }
    });
    return anu;
}

function cargarDatosForm({id, titulo , compraOAlquiler,precio, baños,dormitorios,garage,descripcion}) {
    debugger
    this.frm.id.value = id;
    this.frm.titulo.value = titulo;
    this.frm.precio.value = precio;
    this.frm.baño.value = baños;
    this.frm.dormitorio.value = dormitorios;
    this.frm.garage.value = garage;
    this.frm.descripcion.value = descripcion;
    if(compraOAlquiler == "compra"){
        document.getElementById("rdbCompra").checked = true;
    }else {
        document.getElementById("rdbAlquiler").checked = true;
    }
    //this.frm.compraOAlquiler.value = compraOAlquiler;
}
function obtenerAnuncios(form) {
    let id;
    let titulo;
    let imagen;
    let compraOAlquiler;
    let precio;
    let baños;
    let dormitorios;
    let garage;
    let descricion;
    for(elemento of form.elements) {
        switch(elemento.name) {
            case "titulo":
                this.titulo = elemento.value;
                break;
            case "compraOAlquiler":
                 if (elemento.checked) {
                    this.compraOAlquiler = elemento.value;
                }
                break;
            case "precio":
                this.precio = elemento.value;
                break;
            case "baño":
                this.baños = elemento.value;
                break;
            case "dormitorio":
                this.dormitorios = elemento.value;
                break;
            case "garage":
                this.garage = elemento.value;
                break;
            case "descripcion":
                this.descricion = elemento.value;
                break;
        }
    }
    debugger
    if(anuncios.length == 0){
        this.id = 1;
    }
    else if(this.frm.id.value){
        this.id = this.frm.id.value;
    } 
    else {
        this.id = anuncios[anuncios.length-1].id +1 ;
    }
    return new Anuncio(this.id,this.titulo, this.compraOAlquiler,this.precio, this.baños, this.dormitorios, this.garage, this.descricion);

}


/* function modificarAnuncio(anuncio){
    if(anuncio.id < anuncios.length){
        obtenerAnuncios(anuncio.id) = anuncio;
    }
} */

function eliminarAnuncio() {
    debugger
    let idTouch = document.forms[0].id.value;
    anuncios = anuncios.filter( ({id})=> {
        return id != idTouch;
    } );
    //anuncios[idTouch-1] = null; 
    guardarAnuncios(anuncios);
    promedio(anuncios);
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").appendChild(crearTabla(anuncios));
    cargarFuncionClickALaTabla();
    document.getElementById('form').reset();

}

function filtrarTabla(){
    let anuncionsFiltardos = getAnuncios();
    let checks = [];
    checks.push("id");
    for (let i = 0; i < 7; i++) {
        if(document.forms[1][i].checked == true){
            checks.push(document.forms[1][i].value);
        }
        
    }
   let b =  anuncionsFiltardos.map(anuncio => { 
       debugger
        let anuncioF = new Object();
        checks.forEach(valor => {
            anuncioF[valor] = anuncio[valor];
        });
        return anuncioF;
    });

    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").appendChild(crearTabla(b));
    cargarFuncionClickALaTabla();
    
}

function agregarMetodosChecks() {
    
    for(let i = 0 ;i< this.frmChecks.length ;i++) {
        this.frmChecks[i].addEventListener("click", filtrarTabla);
    }
/*     forEach(check => {
        check.addEventListener("click", filtrarTabla);
    });
 */    
}

function cargarSelect(sel, arr) {
    //selCiudades.options.length = 0;
    /* limpiarSelect(selCiudades); */
    arr.forEach(element => {
        let opcion = document.createElement('option');
        opcion.setAttribute('value', element);
        let texto = document.createTextNode(element);
        opcion.appendChild(texto);
        sel.appendChild(opcion);
    });
}


function fitrarTransaccion() {
debugger
    let trans = selTransaccion.value;
    var anuncioAux;
    if(trans != "todas"){
         anuncioAux = anuncios.filter(anunc => {
            return anunc.compraOAlquiler == trans;
          })
    }else{
        anuncioAux = anuncios;
    }


      document.getElementById("tabla").innerHTML = "";
      document.getElementById("tabla").appendChild(crearTabla(anuncioAux));
      cargarFuncionClickALaTabla();
}

function promedio(a) {
    debugger
    let acumulador = 0;
    a.forEach(elemento => {
        acumulador += parseInt(elemento.precio);
    })

    let prom = acumulador/ a.length;

    document.getElementById("promedio").value = prom;
}
