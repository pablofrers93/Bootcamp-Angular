function sumar(a: number, b: number): number{
    return a+b;
}

const resultado = sumar(12, 15);
console.log(resultado);


// Funciones flecha o Arrow functions

const sumarArrow = (a: number, b: number): number => {
    return a+b;
}

function multiplicar(numero1: number, numero2: number, base: number): number{
    return numero1*numero2;
}

const result = multiplicar(10,5,2);