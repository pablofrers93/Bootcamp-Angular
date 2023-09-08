"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotal = void 0;
function calcularTotal(productos) {
    var total = 0;
    productos.forEach(function (p) {
        total += p.precio;
    });
    return total;
}
exports.calcularTotal = calcularTotal;
