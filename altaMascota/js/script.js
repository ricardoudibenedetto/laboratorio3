var frm;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    /* console.log(document.forms[0]);
    console.log(document.getElementsByTagName("form")[0]);
    console.log(document.getElementById("frmAlta"));
    console.log(document.getElementsByClassName("frm")[0]);
     */
    frm = document.forms[0];
    frm.addEventListener("submit",manejadorSubmit);
}

function manejadorSubmit($event) {
    $event.preventDefault();
}