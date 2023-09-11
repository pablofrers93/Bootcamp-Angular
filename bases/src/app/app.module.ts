import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { EmpleadosModule } from './empleados/empleados.module';
import { ClientesModule } from './clientes/clientes.module';
import { PaginaInicioComponent } from './clientes/pagina-inicio/pagina-inicio.component';
import { AutosModule } from './autos/autos.module';

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent
  ],
  imports: [
    BrowserModule,
    EmpleadosModule,
    ClientesModule,
    AutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
