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
                    info.innerText = xhr.responseText;         
                }, 3000);
            }
        }
        else {
            console.log(`ocurrio un error ${xhr.status}`);
            info.innerHTML = '<img src="./img/spinner.gif" alt="spinner"/>';
        }
    }
    xhr.open('GET', './documento.txt', true);
    xhr.send();
}