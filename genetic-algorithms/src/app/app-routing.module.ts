import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from '../libs/features/map/map.component';
import { HomegridComponent } from '../libs/features/homegrid/homegrid.component';
import { NavbarComponent } from '../libs/features/navbar/navbar.component';
import { ProjectPageComponent } from '../libs/features/project-page/project-page.component';
import { AlgorithmPageComponent } from '../libs/features/algorithm-page/algorithm-page.component';

const routes: Routes = [
  {
    path: 'maps',
    component: MapComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomegridComponent
      },
      {
        path: 'project', 
        component: ProjectPageComponent
      },
      {
        path: 'algorithm', 
        component: AlgorithmPageComponent
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
