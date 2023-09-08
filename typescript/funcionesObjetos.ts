
interface ICliente {
    nombres: string;
    apellidos: string;
    credito: number;
    mostrarCliente: () => void;
    direccion: IDireccion;
}

interface IDireccion {
    numeroCalle: number;
    nombreCalle: string;
    ciudad: string;
}
const deuda = (cliente: ICliente, monto: number):void => {
    cliente.credito += monto;
}

const nuevoCliente: ICliente = {
    nombres: 'Pablo Ezequiel',
    apellidos: 'Frers',
    credito: 3000,
    mostrarCliente(){
        console.log(`Credito del cliente: ${this.nombres} ${this.apellidos} es ${this.credito}`);
    },
    direccion: {
        nombreCalle: 'Calle 143',
        numeroCalle: 259,
        ciudad: 'Lobos'
    } 
}

deuda(nuevoCliente, 300)
nuevoCliente.mostrarCliente();