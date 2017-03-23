import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class SharedModule { }
