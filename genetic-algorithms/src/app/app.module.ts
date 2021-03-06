import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';
import { MapComponent } from '../libs/features/map/map.component';
import { LocationsListComponent } from '../libs/features/locations-list/locations-list.component';

import { apiKey } from '../libs/services/secrets/secret.service';
import { HttpClientModule } from '@angular/common/http';
import { HomegridComponent } from '../libs/features/homegrid/homegrid.component';
import { NavbarComponent } from '../libs/features/navbar/navbar.component';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SearchBarComponent } from '../libs/features/search-bar/search-bar.component';
import { OutputConsoleComponent } from '../libs/features/output-console/output-console.component';
import { TimelineComponent } from '../libs/features/timeline/timeline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectPageComponent } from '../libs/features/project-page/project-page.component';
import { AlgorithmPageComponent } from '../libs/features/algorithm-page/algorithm-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LocationsListComponent,
    HomegridComponent,
    NavbarComponent,
    SearchBarComponent,
    OutputConsoleComponent,
    TimelineComponent,
    ProjectPageComponent,
    AlgorithmPageComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:  apiKey,
      libraries: ['places']
    }),
    AppRoutingModule,
    GoogleMapsModule,
    AgmDirectionModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
