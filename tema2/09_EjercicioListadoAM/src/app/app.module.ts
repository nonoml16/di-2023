import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaAngularComponent } from './components/tabla-angular/tabla-angular.component';
import { MaterialImportModule } from './material-import/material-import.module';

@NgModule({
  declarations: [
    AppComponent,
    TablaAngularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
