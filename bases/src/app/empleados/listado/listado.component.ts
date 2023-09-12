import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  

  etiquetaBorrado: string = '';

  @Input()
  empleados: IEmpleado[] = [];

  @Input()
  titulo: string = '';
   /* {
      nombres: 'pablo ezequiel',
      apellidos: 'frers',
      direccion: 'calle 143 numero 259',
      sueldo: 2500
    },
    {
      nombres: 'camila rebeca',
      apellidos: 'marani',
      direccion: 'calle 143 numero 259',
      sueldo: 3500
    },
    {
      nombres: 'ramon roberto',
      apellidos: 'marafrers',
      direccion: 'calle 143 numero 259',
      sueldo: 5600
    }
  ];*/

  borrar(){
    const emp = this.empleados.shift();
    if (emp !== undefined)
    {
      this.etiquetaBorrado = emp?.nombres+ ' '+ emp?.apellidos;
    }
    else{
      this.etiquetaBorrado = '';
    }
  }
}
