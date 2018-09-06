import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './components/character-list.component';
import { CharacterDetailComponent } from './components/character-detail.component';
import { FilmListComponent } from './components/film-list.component';
import { FilmDetailComponent } from './components/film-detail.component';
import { CharacterService } from './character.service';
import { FilmService } from './film.service';
// import { Observable } from 'rxjs/Observable';
import { CategoryListComponent } from './components/category-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    FilmListComponent,
    FilmDetailComponent,
    CategoryListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CharacterService, FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
