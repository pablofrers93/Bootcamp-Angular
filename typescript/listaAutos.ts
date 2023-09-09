import { IAuto, calcularTotalAutos } from "./auto";

const listaAutos : IAuto[] = [
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

const totalAutos = calcularTotalAutos(listaAutos);
console.log(totalAutos);