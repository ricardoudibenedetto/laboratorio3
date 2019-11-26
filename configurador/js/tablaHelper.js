function crearTabla(array) {
   /*  var tabla = document.createElement("table");
    tabla.setAttribute('border','1px solid black');
    tabla.setAttribute('style','border-collapse :collapse');
    tabla.setAttribute('width','700px');
    //tabla.className = 'tabla'; //agregar la clase o classlist
    //console.log(tabla);

    let cabecera = document.createElement("tr");
    
    let th = document.createElement("th");
    th.textContent = "id";
    cabecera.appendChild(th);

    for(atributo in array[0]) {
        let th = document.createElement("th");
        th.textContent = atributo;
        cabecera.appendChild(th);
    }

    tabla.appendChild(cabecera);

    let id=0;
    for(i in array) {
        let fila = document.createElement("tr");
        let objeto = array[i];
        let celdaId = document.createElement("td");
            celdaId.setAttribute('style','text-aligne : center');
            let ID = document.createTextNode(id);
            celdaId.appendChild(ID);
            fila.appendChild(celdaId);
        for(j in objeto){
            let celda = document.createElement("td");
            celda.setAttribute('style','text-aligne : center');
            let dato = document.createTextNode(objeto[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
        id++;
    }
    return tabla; */

   let tabla = document.createElement("table");
   let cabecera = document.createElement('tr');
   tabla.setAttribute('border','1px solid black');
    tabla.setAttribute('style','border-collapse :collapse');
    tabla.setAttribute('width','700px');
   for(atributo in array[0]) {
        let th = document.createElement('th');
        th.textContent = atributo;
        cabecera.appendChild(th);
   }

   tabla.appendChild(cabecera);
    for(indice in array) {
        let tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid silver";
        objeto = array[indice];
        for(valores in objeto) {
            let td = document.createElement('td');
            let dato = document.createTextNode(objeto[valores]);
            td.appendChild(dato);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
return tabla;
}