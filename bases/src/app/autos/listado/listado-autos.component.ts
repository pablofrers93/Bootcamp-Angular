import { Component, Input } from '@angular/core';
import { IAuto } from '../interface/auto';

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css']
})
export class ListadoAutosComponent {

  etiquetaBorrado: string = '';

  @Input()
  autos: IAuto[] = [];

  @Input()
  titulo: string = '';

  borrar(){
    const auto = this.autos.shift();
    if (auto !== undefined)
    {
      this.etiquetaBorrado = auto.marca+ ' '+ auto.modelo;
    }
    else{
      this.etiquetaBorrado = '';
    }
  }
}
