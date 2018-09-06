import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public characters = [];

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this._characterService.getCharacters();
  }

}
