import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  tituloAntiguo: string = "Empleados antiguos";
  tituloNuevo: string = "Empleados nuevos";

  empleadosAntiguos: IEmpleado[] = [
    {
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
    ];

  empleadosNuevos: IEmpleado[] = [
    {
      nombres: 'mariana lorena',
      apellidos: 'gomez',
      direccion: '9 de julio 1432',
      sueldo: 1222
    },
    {
      nombres: 'lorenzo',
      apellidos: 'tomaso',
      direccion: 'alem 120',
      sueldo: 3500
    },
    {
      nombres: 'manuela',
      apellidos: 'rodriguez',
      direccion: 'salgado 409',
      sueldo: 600
    }
    ];

}
