<?php 

 $nombre = $_GET["nombre"];
 $apellido = $_GET["apellido"];

if(empty($nombre) || empty($apellido)) {
    echo "por valor ingrese su nombre y apellido";
}
else {
    echo "Gracias ".$nombre." ".$apellido."!";
}
?>