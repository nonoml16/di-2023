import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaComponent } from './components/pagina/pagina.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
