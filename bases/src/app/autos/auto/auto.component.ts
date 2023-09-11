import { Component } from '@angular/core';
import { IAuto } from '../interface/auto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {

  autos : IAuto[] = [
    {
      marca: 'toyota',
      modelo: 'pepe',
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
}