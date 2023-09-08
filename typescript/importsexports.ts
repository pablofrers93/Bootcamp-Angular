import { IProducto, calcularTotal } from "./producto";

const listaProductos : IProducto[] = [
    {
        id: 1,
        descripcion: 'Tablet',
        precio: 2000
    },
    {
        id: 2,
        descripcion: "Notebook",
        precio: 5000
    },
    {
        id: 3,
        descripcion: "Iphone",
        precio: 4000
    }
];

const totalLista = calcularTotal(listaProductos);

console.log(totalLista);