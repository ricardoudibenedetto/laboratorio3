"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function holaMundo(monto) {
    var hola;
    return monto.toString();
}
var mensaje;
//array
var array;
//tupla
var tupla = [1, "lala", [2, "string"]];
var Eheroe;
(function (Eheroe) {
    Eheroe[Eheroe["xmen"] = 0] = "xmen";
    Eheroe[Eheroe["avenger"] = 1] = "avenger";
})(Eheroe || (Eheroe = {}));
for (var key in Eheroe) {
    console.log(key);
}
var funcionEnviarMision2 = function () {
    var heroes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        heroes[_i] = arguments[_i];
    }
    for (var i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviado");
    }
};
funcionEnviarMision2("spiderman", "superman", "tuhermanagirl");
//funcion Flecha
var funcionEnviarMision3 = function (heroe) {
    if (heroe === void 0) { heroe = "Heroe"; }
    return heroe + " enviado a la mision 3";
};
console.log(funcionEnviarMision3());
var flas = {
    nombre: "joseEnrrique",
    edad: 24,
    poderes: ["corre", "viaja en el roca comodo"],
    getNombre: function () {
        return this.nombre;
    }
};
var ironman = {
    nombre: "tony stark",
    edad: 84,
    getNombre: function () { return this.nombre; }
};
console.log(ironman.getNombre());
var gepardo = {
    nombre: "James"
};
console.log(gepardo.nombre);
//interfaces en clases 
var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this.nombre = "un avenger";
        this.nombre = nombre;
    }
    return Avenger;
}());
var Mutante = /** @class */ (function () {
    function Mutante() {
        this.nombre = "un mutante";
    }
    return Mutante;
}());
var unAvenger = new Avenger("hulk");
var unMutante = new Mutante();
console.log(unMutante.nombre);
var mifuncion;
mifuncion = function (num1, num2) { return num1 + num2; };
console.log(mifuncion(2, 98));
//clases
var av2 = new Avenger("hombre hormiga");
console.log(av2.nombre);
var Avenger3 = /** @class */ (function () {
    function Avenger3(nombre) {
        var _this = this;
        this._nombre = "un av";
        this._edad = 23;
        this.mostrar = function () { return _this._nombre; };
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger3.prototype, "edad", {
        get: function () { return this._edad; },
        set: function (e) { this._edad = e; },
        enumerable: true,
        configurable: true
    });
    return Avenger3;
}());
var av3 = new Avenger3("joseEnrique");
av3.edad = 82;
console.log(av3.mostrar());
console.log(av3.edad);
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.nombreDeClase = "Xmen";
    return Xmen;
}());
console.log(Xmen.nombreDeClase);
//herencia 
var AvengerHeredado = /** @class */ (function (_super) {
    __extends(AvengerHeredado, _super);
    function AvengerHeredado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AvengerHeredado;
}(Avenger3));
var avH = new AvengerHeredado("cocacola");
console.log(avH.mostrar());
//herencia2
var AvengerHeredado2 = /** @class */ (function (_super) {
    __extends(AvengerHeredado2, _super);
    function AvengerHeredado2(nombre, edad) {
        var _this = _super.call(this, nombre) || this;
        _this.edad = 0;
        _this.edad = edad;
        return _this;
    }
    return AvengerHeredado2;
}(Avenger3));
var av5 = new AvengerHeredado2("rigoberto", 23);
console.log("Avenger " + av5.mostrar() + ", edad: " + av5.edad);
//namespaces
var Funciones;
(function (Funciones) {
    function f1() {
        console.log("soy f1");
    }
    Funciones.f1 = f1;
    function f2() {
        console.log("soy f2");
    }
    Funciones.f2 = f2;
})(Funciones || (Funciones = {}));
Funciones.f1();
Funciones.f2();
$(function () {
    console.log("ready");
});
/// <reference path="hello.ts" />
var zz;
//# sourceMappingURL=output.js.map