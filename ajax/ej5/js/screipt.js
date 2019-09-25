window.addEventListener("load", () => {

    document.forms[0].addEventListener('submit', enviarDatos);
})

function enviarDatos($event) {
    $event.preventDefault();
    let data = traerDatos($event.target)
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        let info = document.getElementById('info');
        //aca va el codigo que maneja la peticion.
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setTimeout(() => {
                    //let lista = JSON.parse(xhr.responseText);
                    info.innerText = xhr.responseText;
                    clearTimeout(tiempo);
                }, 1000);
            }
        }
        else {
            console.log(`ocurrio un error ${xhr.status}`);
            info.innerHTML = '<img src="./img/spinner.gif" alt="spinner"/>';
        }
    }
    xhr.open('GET', './servidor.php?'+data, true);
    xhr.send();

    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'Servidor ocupado. Intente mas tarde';
    }, 2000);
}


function traerDatos(form) {
    let nombre = form.nombre.value;
    let apellido = form.apellido.value;

    return `nombre=${nombre}&apellido=${apellido}`;
}