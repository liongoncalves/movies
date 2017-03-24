import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsComponent } from './components/actors.component';
const routes: Routes = [
  {
    path: '',
    component: ActorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
