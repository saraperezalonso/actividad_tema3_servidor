import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    CatalogoComponent,
    SobrenosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule, RouterOutlet
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
