"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var listaAutos = [
    {
        id: 1,
        modelo: '600',
        marca: 'Fiat',
        anio: 1970,
        precio: 2500
    },
    {
        id: 2,
        modelo: 'Sprinter',
        marca: 'Mercedes Benz',
        anio: 2005,
        precio: 4500
    },
    {
        id: 3,
        modelo: 'Atios',
        marca: 'Toyota',
        anio: 2023,
        precio: 7800
    }
];
var totalAutos = (0, auto_1.calcularTotalAutos)(listaAutos);
console.log(totalAutos);
