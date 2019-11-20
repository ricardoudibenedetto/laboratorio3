function getAnuncios(){
    return  JSON.parse(window.localStorage.getItem("anuncios"));
}

function guardarAnuncios(anuncio){
 
    window.localStorage.setItem('anuncios', JSON.stringify(anuncio));
}