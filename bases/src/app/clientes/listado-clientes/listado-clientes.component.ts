import { Component, Input } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {

  //@Input()
  //clientes: ICliente[] = [];
  constructor(private clientesService: ClientesService){

  }

  get clientes(): ICliente[]{
    return this.clientesService.clientes;
  }
 
}
