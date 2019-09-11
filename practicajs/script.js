/* function Persona(nombre, apellido, edad) {
    nombre: "juan",
    apellido: "perex",
    edad: 30 ,
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function () {
        return `hola, me llamo ${this.nombre}`;
    }
};

var p1 = new Persona("jose", "alvarez", 34);
var p2 = new Persona("ana", "gonzales", 20);
Persona.prototype.altura = 1.50;
p1.altura = 80;
console.log(p1.altura);
console.log(p2.altura);
 */
 var foo = function(a,b,c){
    console.log(arguments) //arguments[0] , arguments.length , arguments
 }
 var x = foo;
 x(2,3);