import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DistanceParsingService } from '../../services/distance-parsing.service';
import { OptimizationService } from '../../services/optimization.service';
import { DistanceMatrix, mockLocationsList, sampleResultDistances } from '../../../assets/testFolder/testLocations';
import { litterHistory, litterHistory5 } from '../../../assets/testFolder/litter-history';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ListService } from '../locations-list/list.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { apiKey } from 'src/app/secrets/secret.service';
import { Subscription } from 'rxjs';

export interface locationObject {
  name: string,
  longitude: number,
  latitude: number
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'Genetic Algorithms';
  latitude: number;
  longitude: number;
  lines = [];
  locationList: locationObject[] = [];
  zoom: number;
  address: string;
  cityName: string;

  private geoCoder;
  

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.cityName = place.formatted_address
          this.zoom = 12;
        });
      });
    });
  }

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor( 
   private distanceParser: DistanceParsingService,
   private mapsAPILoader: MapsAPILoader,
   private ngZone: NgZone,
   public listService: ListService,
   private httpService: HttpClient
  ) {}

  addToList() {
    this.listService.addPlace({
      name: this.cityName,
      longitude: this.longitude,
      latitude: this.latitude
    })
    console.log(this.listService.places)
  }

  clearList(lat, lng) {
    this.locationList = []
  }

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
    let origins = this.listService.places.map(place => place.name);
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

  getDistanceMatrix() {
    return this.callDistanceMatrix$().subscribe((matrix) => console.log(this.distanceParser.parse(matrix)), error => console.error(error)).unsubscribe()
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