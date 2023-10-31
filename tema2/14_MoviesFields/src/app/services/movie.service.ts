import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movie-popular-list';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMoviePopularList(): Observable<MovieResponse>{
    return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/popular?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc');
  }

  getMovieTopRatedList(): Observable<MovieResponse>{
    return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/top_rated?api_key=c9002d3916ef1f2f6ec5ecf35bcd96bc');
  }
}
