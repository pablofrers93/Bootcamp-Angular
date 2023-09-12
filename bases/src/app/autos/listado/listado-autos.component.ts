import { Component, Input } from '@angular/core';
import { IAuto } from '../interface/auto';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css']
})
export class ListadoAutosComponent {

  constructor(private autosService: AutosService){

  }

  get autos(): IAuto[]{
    return this.autosService.autos;
  }
}
