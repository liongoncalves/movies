import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent, MovieListComponent } from './components';

import {MovieEffects} from './effects';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    EffectsModule.run(MovieEffects)
  ],
  declarations: [MovieListComponent, MoviesComponent]
})
export class MoviesModule { }
