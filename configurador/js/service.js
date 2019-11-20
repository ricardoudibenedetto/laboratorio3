function getAnuncios(){
    return  JSON.parse(window.localStorage.getItem("anuncios"));
}

function guardarAnuncios(anuncio){
    JSON.parse(window.localStorage.getItem("anuncios"))
    /* si no existe nada en local , agregarle id 1 al elemento  */
    /* buscar el mayor id max y agregarle uno mas antes de guardar */
 /*    if(!JSON.parse(window.localStorage.getItem("anuncios"))) {
        anuncio.id = 1;
    }else {
        anuncio.id = 
    } */
    window.localStorage.setItem('anuncios', JSON.stringify(anuncios));
}