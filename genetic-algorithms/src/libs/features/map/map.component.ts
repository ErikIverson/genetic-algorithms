import { Component, NgZone, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DistanceParsingService } from '../../services/distance-parsing.service';
import { DistanceMatrix, mockLocationsList } from '../../../assets/testFolder/testLocations';
import { litterHistory5 } from '../../../assets/testFolder/litter-history';
import { MapsAPILoader } from '@agm/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { apiKey } from 'src/libs/services/secrets/secret.service';
import { ControlService } from 'src/libs/services/control.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() searchString: string;

  title = 'Genetic Algorithms';
  latitude: number;
  longitude: number;
  lines = [];
  zoom: number;
  address: string;
  cityName: string;

  private geoCoder;

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    })
  }

  constructor( 
   private distanceParser: DistanceParsingService,
   private mapsAPILoader: MapsAPILoader,
   private ngZone: NgZone,
   private httpService: HttpClient,
   public controlService: ControlService
  ) {}

  addLocations(route) {
    this.lines = []
    for (let index of route) {
      this.lines.push(mockLocationsList[index])
    }
    this.lines.push(mockLocationsList[route[0]]);
  }

  async showHistory() {
    for (let i in litterHistory5) {
      await this.delay(100)
      this.addLocations(litterHistory5[i][0])
      console.log('Gen: ', i)
      console.log('Distance: ', litterHistory5[i][1])
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getHttpRequestBody(): string {
    let origins = this.controlService.locationsList.map(place => place.name);
    const reqBody = origins.join(' | ');
    console.log(reqBody);
    return reqBody
  }

  callDistanceMatrix$() {
    const placesParam = this.getHttpRequestBody();
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    const params = new HttpParams().set('origins', placesParam).set('destinations', placesParam).set('key', apiKey)
    console.log('request: ', params)
    return this.httpService.get<DistanceMatrix>('/maps/api/distancematrix/json', {
      headers: headers,
      params: params
    })
  }

  async getDistanceMatrix() {
    return this.callDistanceMatrix$().subscribe((matrix) => console.log(this.distanceParser.parse(matrix)), error => console.error(error))
  }

  async optimizePath() {
    const distance_dict = await this.getDistanceMatrix();
    return this.httpService.get<any[]>('')
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getAddress(this.latitude, this.longitude);
        this.zoom = 8;
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}