import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAutosComponent } from './listado/listado-autos.component';
import { PaginaInicioAutosComponent } from './pagina-inicio-autos/pagina-inicio-autos.component';
import { FormsModule } from '@angular/forms';
import { AutoComponent } from './auto/auto.component';
import { AgregarAutoComponent } from './agregar-auto/agregar-auto.component';
import { AutosService } from './autos.service';



@NgModule({
  declarations: [
    AutoComponent,
    ListadoAutosComponent,
    PaginaInicioAutosComponent,
    AgregarAutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AutoComponent,
    ListadoAutosComponent,
    PaginaInicioAutosComponent
  ],
  providers: [
    AutosService
  ]
})
export class AutosModule { }
