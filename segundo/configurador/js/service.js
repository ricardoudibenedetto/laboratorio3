function getAnuncios() {
    return JSON.parse(window.localStorage.getItem("anuncios"));
}

function guardarAnuncios(anuncios) {
   
       window.localStorage.setItem('anuncios', JSON.stringify(anuncios));
      
}

function eliminar() {

    window.localStorage.clear();
 }