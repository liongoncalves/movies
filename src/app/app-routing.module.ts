import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: 'app/movies/movies.module#MoviesModule'
  },
  {
    path: 'actors',
    loadChildren: 'app/actors/actors.module#ActorsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
