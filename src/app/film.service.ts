import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from './character';
import { Observable } from 'rxjs/Observable';

/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()
export class FilmService {
  
  private _url: string = "https://swapi.co/api/films/"

  constructor(private http: HttpClient) { }

  getFilms(): Observable<any> {
    return this.http.get<any>(this._url);
  }


}
