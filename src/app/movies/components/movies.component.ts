import { Component } from '@angular/core';
import * as fromMovies from '../reducers';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-movies',
  template: `
    <h1>Movie List</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  constructor(store: Store<fromMovies.State>) {
    store.select(fromMovies.getEntities).subscribe(res => {
      debugger;
    });
  }
}
