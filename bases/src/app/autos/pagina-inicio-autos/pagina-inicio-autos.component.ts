import { Component } from '@angular/core';
import { IAuto } from '../interface/auto';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-pagina-inicio-autos',
  templateUrl: './pagina-inicio-autos.component.html',
  styleUrls: ['./pagina-inicio-autos.component.css']
})

export class PaginaInicioAutosComponent {

  constructor(private AutosService: AutosService){
    
  }

}
