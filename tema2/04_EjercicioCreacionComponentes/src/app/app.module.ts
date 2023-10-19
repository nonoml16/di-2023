import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { TextComponentsComponent } from './components/text-components/text-components.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PaginaComponent,
    TextComponentsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
