"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var prueba = __assign({}, Eheroe);
for (var key in prueba) {
    console.log(key);
}
/// <reference path="hello.ts" />
var zz;
//# sourceMappingURL=output.js.map