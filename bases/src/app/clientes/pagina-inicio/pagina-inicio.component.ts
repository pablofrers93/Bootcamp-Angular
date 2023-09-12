import { Component } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  constructor(private ClientesService: ClientesService){

  }

  

  agregarNuevoCliente(cliente: ICliente){
    // this.clientes.push(cliente);
  }

}
