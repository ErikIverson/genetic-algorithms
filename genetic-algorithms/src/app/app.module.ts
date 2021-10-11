import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';
import { MapComponent } from '../libs/features/map/map.component';
import { LocationsListComponent } from '../libs/features/locations-list/locations-list.component';
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { apiKey } from './secrets/secret.service'
import { HttpClientModule } from '@angular/common/http';
import { HomegridComponent } from './homegrid/homegrid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LocationsListComponent,
    HomegridComponent,
    NavbarComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
