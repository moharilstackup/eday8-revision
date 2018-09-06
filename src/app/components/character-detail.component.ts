import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  public characters = [];

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this._characterService.getCharacters();
  }

}
