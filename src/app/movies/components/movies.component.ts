import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  template: `
    <h1>Movie List</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
}
