import { Component } from '@angular/core';
import { IAuto } from '../interface/auto';

@Component({
  selector: 'app-pagina-inicio-autos',
  templateUrl: './pagina-inicio-autos.component.html',
  styleUrls: ['./pagina-inicio-autos.component.css']
})

export class PaginaInicioAutosComponent {

  nuevo: IAuto = {
    marca: '',
    modelo: '',
    precio: 0
  }

  autos : IAuto[] = [
    {
      marca: 'toyota',
      modelo: 'Corolla',
      precio: 2500
    },
    {
      marca: 'volkswagen',
      modelo: 'gol',
      precio: 3500
    },
    {
      marca: 'Citroen',
      modelo: 'Berling',
      precio: 7500
    }
  ]

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

    this.autos.push(this.nuevo);
    this.nuevo = {
      marca: '',
      modelo: '',
      precio: 0
    }
  }

}
