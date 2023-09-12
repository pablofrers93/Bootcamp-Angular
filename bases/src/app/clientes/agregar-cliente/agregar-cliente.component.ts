import { Component, EventEmitter, Output } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {


  constructor(private ClientesService: ClientesService){
    
  }

  nuevo: ICliente = {
    nombre: '',
    credito: 0
  }

  // @Output()
  // onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    if(this.nuevo.credito === null){
      return;
    }

    // this.onNuevoCliente.emit(this.nuevo);

    this.ClientesService.agregarCliente(this.nuevo);

    this.nuevo = {
      nombre: '',
      credito: 0
    }
  }

}
