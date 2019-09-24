window.addEventListener("load", () => {

    document.getElementById("btnTraer").addEventListener("click", traerTexto)
})

function traerTexto() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        let info = document.getElementById('info');
        //aca va el codigo que maneja la peticion.
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setTimeout(() => {
                    let persona = JSON.parse(xhr.responseText);
                    info.innerText = `Nombre: ${persona.nombre} ${persona.apellido} Edad: ${persona.edad}`;
                    clearTimeout(tiempo);         
                }, 1000);
            }
        }
        else {
            console.log(`ocurrio un error ${xhr.status}`);
            info.innerHTML = '<img src="./img/spinner.gif" alt="spinner"/>';
        }
    }
    xhr.open('GET', './persona.json', true);
    xhr.send();

    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'Servidor ocupado. Intente mas tarde';
    }, 2000);
}