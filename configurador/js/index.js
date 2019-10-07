/* var txtTitulo;
var btnSubmit;
var anuncios;
var compraOAlquiler;
var txtPrecio;
var txtBaño;
var txtGarage;
var txtImagen;
var txtDormitorio;
var txtaDescripcion;
var form;
anuncios = [];

window.addEventListener("load",() => {
    loadControls();
    loadAnuncio();
});



function loadAnuncio() {
    form.addEventListener("submit",()=>{
        event.preventDefault();
        let coa;
        if(compraOAlquiler[0].checked) {
            coa = "compra";
        } 
        else {
            coa ="alquiler";
        }
        
        anuncios.push(new Anuncio(txtTitulo.value,txtImagen.value, coa, txtPrecio.value, txtBaño.value,txtDormitorio.value ,txtGarage.value ,txtaDescripcion.value))
        console.log(anuncios);
    })
}

function loadControls() {
    txtPrecio = document.getElementById("txtPrecio");
    btnSubmit = document.getElementById("btnSubmit");
    txtTitulo = document.getElementById("txtTitulo");
    compraOAlquiler = document.getElementsByName("compraOAlquiler");
    txtBaño = document.getElementById("txtBaño");
    txtDormitorio = document.getElementById("txtDormitorio");
    txtGarage = document.getElementById("txtGarage");
    txtaDescripcion = document.getElementById("txtaDescripcion");
    form = document.getElementById("form");
    txtImagen = document.getElementById("txtImagen");
} */

let frm;
window.addEventListener("load", iniciador);

function iniciador() {
    this.frm = document.forms[0];
    this.frm.addEventListener("submit", manejadorSubmit);
}

function manejadorSubmit($event) {
    $event.preventDefault();

    let nuevoAnuncios = obtenerAnuncios($event.target);
    anuncios.push(nuevoAnuncios);
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").appendChild(crearTabla(anuncios));
    let trs = document.getElementsByTagName("tr");
    debugger
    /* trs.forEach(element => {
       element.addEventListener("click", ()=>{
           alert("touch");
       }) 
    }); */
    let idTouch = 0;
    for (let i = 1; i < trs.length; i++) {
         trs[i].addEventListener("click", function(e){
            /* con este anuncio cargar los inputs aca en el click */
           idTouch = e.path[1].childNodes[0].innerText;
           console.log(anuncios[idTouch]);
         });
        
    }
    
}

function obtenerAnuncios(form) {
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
            case "imagen":
                this.imagen = elemento.value;
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
    return new Anuncio(this.titulo,this.imagen, this.compraOAlquiler,this.precio, this.baños, this.dormitorios, this.garage, this.descricion);

}
