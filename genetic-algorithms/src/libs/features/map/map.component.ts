import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
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
   private mapsAPILoader: MapsAPILoader,
   public controlService: ControlService
  ) {}


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