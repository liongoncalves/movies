import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <md-toolbar color="primary" class="mat-elevation-z6">
      <span>Movies</span>
      <nav> 
        <a routerLink="/actors" >Actors</a>
        <a routerLink="/movies" >Movies</a>
      </nav>
    </md-toolbar>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
