var frm;

window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    /* console.log(document.forms[0]);
    console.log(document.getElementsByTagName("form")[0]);
    console.log(document.getElementById("frmAlta"));
    console.log(document.getElementsByClassName("frm")[0]);
     */
    frm = document.forms[0];
    frm.addEventListener("submit", manejadorSubmit);
}

function manejadorSubmit($event) {
    $event.preventDefault();

    let nuevaMascota = obtenerMascota($event.target);
    mascotas.push(nuevaMascota);
    document.getElementById("divTabla").innerHTML = "";
    document.getElementById("divTabla").appendChild(crearTabla(mascotas));
    console.log(crearTabla(mascotas));
    //console.table(mascotas);
}

function obtenerMascota(frm) {
    let nombre;
    let edad;
    let tipo;
    let vacunado;
    let desparasitado;
    let castrado;
    let alimento;
    for (elemento of frm.elements) {

        switch (elemento.name) {
            case "nombre":
                nombre = elemento.value;
                break;
            case "edad":
                edad = parseInt(elemento.value);
                break;
            case "tipo":
                if (elemento.checked) {
                    tipo = elemento.value;
                }
                break;
            case "castrado":
                castrado = elemento.checked;
                break;
            case "vacunado":
                vacunado = elemento.checked;
                break;
            case "desparasitado":
                desparasitado = elemento.checked;
                break;
            case "alimento":
                alimento = elemento.value;
                break;

        }
    }
    return new Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento);
    //console.log(frm.elements)
}
/* //ejemplo callback
function operar(a, b, callback) {
    return callback(a, b);
}

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

function dividir(x, y) {
    let z;
    if( y != 0) {
       z = x/y;
    }
    return z;
}

function multiplicar(x, y) {
    return x * y;
}

console.log("la respuesta es "+operar(4,5,multiplicar)); */


