import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviePopularListComponent } from './components/movie-popular-list/movie-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MovieTopRatedComponent } from './components/movie-top-rated/movie-top-rated.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePopularListComponent,
    MovieItemComponent,
    MovieTopRatedComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
