export interface IAuto{
    id: number;
    modelo: string;
    marca: string;
    anio: number;
    precio: number;
}

export function calcularTotalAutos(autos: IAuto[]): number{
    let total = 0;
    autos.forEach((a) => {
        total++;
    })
    return total;
}