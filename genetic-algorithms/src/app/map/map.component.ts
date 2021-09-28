import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapDirectionsService } from '@angular/google-maps';
import { DistanceParsingService } from '../../libs/services/distance-parsing.service';
import { OptimizationService } from '../../libs/services/optimization.service';
import { mockLocationsList, sampleResultDistances } from '../../assets/testFolder/testLocations';
import { litterHistory } from '../../assets/testFolder/litter-history';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'genetic-algorithms';
  latitude: number;
  longitude: number;
  lines = [];
  zoom: number;
  address: string;

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
          this.zoom = 12;
        });
      });
    });
  }

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor( 
   private directionService: MapDirectionsService,
   private distanceParser: DistanceParsingService,
   private optimizationService: OptimizationService,
   private mapsAPILoader: MapsAPILoader,
   private ngZone: NgZone
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