import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieListResponse } from '../models/movie-list.interface';
import { MovieDetailResponse } from '../models/movie-detail.interface';
import { environment } from 'src/environments/environment.development';

const MOVIE_BASE_URL = 'movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getList(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/now_playing?api_key=${environment.apiKey}`);
  }

  getMovie(id: number): Observable<MovieDetailResponse> {
    return this.http.get<MovieDetailResponse>(`${environment.apiBaseUrl}/${MOVIE_BASE_URL}/${id}?api_key=${environment.apiKey}`);
  }
}
