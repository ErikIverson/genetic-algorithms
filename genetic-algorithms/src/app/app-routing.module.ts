import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'maps',
    pathMatch: 'full'
  },
  {
    path: 'maps',
    component: MapComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
