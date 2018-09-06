import { Injectable } from '@angular/core';

/* @Injectable({
  providedIn: 'root'
}) */

@Injectable()
export class CharacterService {

  constructor() { }

  getCharacters() {
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
  }

}
