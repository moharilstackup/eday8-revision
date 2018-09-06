import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from './character';
import { Observable } from 'rxjs/Observable';

/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()
export class CharacterService {

  private _url: string = "https://swapi.co/api/people/"

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this._url);
    
    
/* 
    return [
      {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue"
      },
      {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow"
      }
    ];
     */
  }

}
