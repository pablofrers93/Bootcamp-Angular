import { Component } from '@angular/core';
import { IAuto } from '../interface/auto';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.component.html',
  styleUrls: ['./agregar-auto.component.css']
})
export class AgregarAutoComponent {

  constructor(private AutosService: AutosService){

  }

  nuevo: IAuto = {
    marca: '',
    modelo: '',
    precio: 0
  }

  agregar(){
    if(this.nuevo.marca.trim().length === 0){
      return;
    }

    if(this.nuevo.modelo.trim().length === 0){
      return;
    }

    if(this.nuevo.precio === null){
      return;
    }

    this.AutosService.agregarAuto(this.nuevo);
    this.nuevo = {
      marca: '',
      modelo: '',
      precio: 0
    }
  }
}