"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotalAutos = void 0;
function calcularTotalAutos(autos) {
    var total = 0;
    autos.forEach(function (a) {
        total++;
    });
    return total;
}
exports.calcularTotalAutos = calcularTotalAutos;
