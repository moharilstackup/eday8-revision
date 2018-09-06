import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  public films = [];

  constructor(private _filmService: FilmService) { }

  ngOnInit() {
    // this.characters = this._characterService.getCharacters();
    this._filmService.getFilms()
      .subscribe(data => this.films = data.results)
  }

}
