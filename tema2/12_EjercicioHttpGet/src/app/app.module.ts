import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
