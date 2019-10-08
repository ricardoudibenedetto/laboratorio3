function crearTabla(array){
   let tabla = document.createElement("table");
   let cabecera = document.createElement('tr');
   
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