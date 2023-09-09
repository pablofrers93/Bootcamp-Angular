import { Component, Input } from '@angular/core';
import { ICliente } from '../interfaces/cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent {

  @Input()
  clientes: ICliente[] = [];
}
