var deuda = function (cliente, monto) {
    cliente.credito += monto;
};
var nuevoCliente = {
    nombres: 'Pablo Ezequiel',
    apellidos: 'Frers',
    credito: 3000,
    mostrarCliente: function () {
        console.log("Credito del cliente: ".concat(this.nombres, " ").concat(this.apellidos, " es ").concat(this.credito));
    }
};
deuda(nuevoCliente, 300);
nuevoCliente.mostrarCliente();
