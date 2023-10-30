import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/character-list.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacterList(): Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>('https://apisimpsons.fly.dev/api/personajes');
  }
}
