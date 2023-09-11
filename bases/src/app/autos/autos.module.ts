import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAutosComponent } from './listado/listado-autos.component';
import { PaginaInicioAutosComponent } from './pagina-inicio-autos/pagina-inicio-autos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoAutosComponent,
    PaginaInicioAutosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListadoAutosComponent,
    PaginaInicioAutosComponent
  ]
})
export class AutosModule { }
