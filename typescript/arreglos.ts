// Arreglos

let personas: string[] = ['Maria', 'Roberto', "Silvina", 'Pablo'];

personas.push('Camila');


// Objetos

interface IEmpleado{
    nombre: string;
    apellido: string;
    direccion: string;
    telefonos: string[];
    sueldo: number;
    cargo?: string;
}

const empleado: IEmpleado = {
    nombre: 'Romina',
    apellido: 'Alvarez',
    direccion: 'Ameguino 306, Lobos',
    telefonos: ['2227520276', '1134435465'],
    sueldo: 5000
}

console.table(empleado);