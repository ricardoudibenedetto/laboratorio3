function Persona(nombre,apellido,edad){
    /* nombre: "juan",
    apellido: "perex",
    edad: 30 ,*/
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function(){
        return `hola, me llamo ${this.nombre}`;
    }
};

var p1 = new Persona("jose", "alvarez", 34);
var p2 = new Persona("ana", "gonzales", 20);

p1.altura = 80;
console.log( p1.altura);
console.log( p2.saludar());
