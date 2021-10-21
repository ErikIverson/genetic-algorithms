import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from '../libs/features/map/map.component';
import { HomegridComponent } from '../libs/features/homegrid/homegrid.component';
import { NavbarComponent } from '../libs/features/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navbar',
    pathMatch: 'full'
  },
  {
    path: 'maps',
    component: MapComponent,
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomegridComponent
      },
      {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
