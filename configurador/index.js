var txtTitulo;
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

function Anuncio(titulo, img, coa, precio, baño, dormitorio, garage, descripcion) {
    this.titulo = titulo;
    this.imagen = img;
    this.compraOAlquiler = coa;
    this.precio = precio;
    this.baños = baño;
    this.dormitorios = dormitorio;
    this.garage = garage;
    this.descripcion = descripcion;
};

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
        anuncios.push(new Anuncio(txtTitulo.value, coa, txtPrecio.value, txtBaño.value,txtDormitorio.value ,txtGarage.value ,txtaDescripcion.value))
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
}