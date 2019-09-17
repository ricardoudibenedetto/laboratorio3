function Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
    this.alimento = alimento;
    this.vacunado = vacunado;
    this.castrado = castrado;
    this.desparasitado = desparasitado;

    Mascota.prototype.toString = function () {
        return `hola soy ${this.nombre} y tengo ${this.edad} años`;
    }
}


