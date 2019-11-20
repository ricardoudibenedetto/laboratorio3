
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
