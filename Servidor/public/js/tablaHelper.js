function crearTabla(array){
   let tabla = document.createElement("table");
    tabla.style.paddingRight = "20px";
   let cabecera = document.createElement('tr');
   
   for(atributo in array[0]) {
        let th = document.createElement('th');
        th.textContent = atributo;
        cabecera.appendChild(th);
   }

   tabla.appendChild(cabecera);

   /* for(i in array) { debugger
        let fila = document.createElement("tr");
        let objeto = array[i];
        for(j in objeto){
            let celda = document.createElement("td");
            let dato = document.createTextNode(objeto[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    } */
    for(indice in array) {
       
        let fila = document.createElement("tr");
        fila.style.borderBottom = "1px solid silver";
        objeto = array[indice];
        for(valores in objeto) {
            let celda = document.createElement('td');
            let dato = document.createTextNode(objeto[valores]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
       
        tabla.appendChild(fila);
    }
return tabla;
    
}