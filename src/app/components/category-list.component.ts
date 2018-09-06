import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showCharacters() {
    this.router.navigate(['/characterList']);
  }

  showCharacterDetail() {
    this.router.navigate(['/characterDetail']);
  }

  showFilms() {
    this.router.navigate(['/filmList']);
  }
}
