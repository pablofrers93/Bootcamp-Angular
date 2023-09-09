import { Component } from '@angular/core';
import { ICliente } from '../interfaces/cliente';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  nuevo: ICliente = {
    nombre: '',
    credito: 0
  }

  clientes : ICliente[] = [
    {
      nombre: 'Pablo',
      credito: 5000
    },
    {
      nombre: 'Camila',
      credito: 8000
    },
    {
      nombre: 'Ramon',
      credito: 10000
    }
  ]

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    if(this.nuevo.credito === null){
      return;
    }

    this.clientes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      credito: 0
    }
  }

}
