import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <md-toolbar color="primary" class="mat-elevation-z6">
      <span>Movies</span>
    </md-toolbar>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
