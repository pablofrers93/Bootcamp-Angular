import { Injectable } from '@angular/core';
import { IAuto } from './interface/auto';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private _autos : IAuto[] = [];

  get autos(): IAuto[]{
    return this._autos;
  }

  agregarAuto(auto: IAuto){
    this._autos.push(auto);
    localStorage.setItem('autos', JSON.stringify(this._autos))
  }
  constructor() {
    console.log('Servicio Inicializado')
    this._autos = JSON.parse(localStorage.getItem('autos')!) || [];
   }
}
