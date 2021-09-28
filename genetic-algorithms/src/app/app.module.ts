import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARAW4ff9g3F_r5KLsdtXgFdgup-DfGNRA'
    }),
    AppRoutingModule,
    GoogleMapsModule,
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
