import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsComponent } from './components/actors.component';

@NgModule({
  imports: [
    CommonModule,
    ActorsRoutingModule
  ],
  declarations: [ActorsComponent]
})
export class ActorsModule { }
