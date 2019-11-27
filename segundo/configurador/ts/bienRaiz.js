"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var BienRaiz = /** @class */ (function (_super) {
        __extends(BienRaiz, _super);
        function BienRaiz(id, titulo, coa, precio, baño, dormitorio, garage, descripcion) {
            var _this = _super.call(this, id, titulo) || this;
            _this.compraOAlquiler = coa;
            _this.precio = precio;
            _this.baños = baño;
            _this.dormitorios = dormitorio;
            _this.garage = garage;
            _this.descripcion = descripcion;
            return _this;
        }
        return BienRaiz;
    }(Anuncio));
    Clases.BienRaiz = BienRaiz;
})(Clases || (Clases = {}));
