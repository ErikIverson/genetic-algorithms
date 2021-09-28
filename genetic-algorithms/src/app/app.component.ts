import { Component, OnInit } from '@angular/core';
import { MapDirectionsService } from '@angular/google-maps';
import { DistanceParsingService } from '../libs/distance-parsing.service';
import { OptimizationService } from '../libs/optimization.service';
import { mockLocationsList, sampleResultDistances } from '../assets/testFolder/testLocations';
import { litterHistory } from '../assets/testFolder/litter-history';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'genetic-algorithms';
  lat =  41.600368;
  lng = -93.658386;
  lines = [];

  public origin: {lat: number, lng: number};
  public destination: {lat: number, lng: number};

  ngOnInit() {
  }

  constructor( 
   private directionService: MapDirectionsService,
   private distanceParser: DistanceParsingService,
   private optimizationService: OptimizationService
  ) {}

  addLocations(route) {
    this.lines = []
    for (let index of route) {
      this.lines.push(mockLocationsList[index])
    }
    this.lines.push(mockLocationsList[route[0]]);
  }

  async showHistory() {
    for (let i in litterHistory) {
      await this.delay(100)
      this.addLocations(litterHistory[i][0])
      console.log('Gen: ', i)
      console.log('Distance: ', litterHistory[i][1])
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  testButton() {
    console.log('testing get distance dict')
    this.distanceParser.parse(sampleResultDistances);
  }

}
