import { Component, OnInit } from '@angular/core';
import { MapDirectionsService } from '@angular/google-maps';
import { DistanceParsingService } from './distance-parsing.service';
import { mockLocationsList, sampleResultDistances } from './testLocations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'genetic-algorithms';
  lat =  41.600368;
  lng = -93.658386;
  lines = [{lat: this.lat, lng: this.lng}];

  public origin: {lat: number, lng: number};
  public destination: {lat: number, lng: number};

  ngOnInit() {
  }

  constructor( 
   private directionService: MapDirectionsService,
   private distanceParser: DistanceParsingService
  ) {}

  addLocations() {
    console.log('adding locations');
    mockLocationsList.map(loc => this.lines.push(loc));
    console.log('lines', this.lines);
  }

  getDistanceMatrix$() {

  }

  optimizePath() {

  }

  testButton() {
    this.distanceParser.parse(sampleResultDistances);
  }

}
