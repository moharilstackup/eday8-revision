import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list.component';
import { CharacterDetailComponent } from './components/character-detail.component';
import { CategoryListComponent } from './components/category-list.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { FilmListComponent } from './components/film-list.component';



const routes: Routes = [
  { path: "", component: CharacterListComponent },
  { path: "categoryList", component: CategoryListComponent },
  { path: "characterList", component: CharacterListComponent },
  { path: "filmList", component: FilmListComponent  },
  { path: "characterDetail", component: CharacterDetailComponent }
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  // declarations: []
})
export class AppRoutingModule { }
// export const routingComponents = [ ]
