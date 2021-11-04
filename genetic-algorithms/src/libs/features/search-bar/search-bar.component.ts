import { Component, NgZone, OnInit, Input, Output,  ViewChild, ElementRef } from '@angular/core';
import { ControlService } from 'src/libs/services/control.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() cityName: string;
  @Input() latitude: number;
  @Input() longitude: number;

  @Output() searchString: string;
  searchValue = '';
  zoom: number;

  constructor(
    private controlService: ControlService,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader,
  ) { }

  @ViewChild('search')
  public searchElementRef: ElementRef;

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
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
          this.controlService.latitude = place.geometry.location.lat();
          this.controlService.longitude = place.geometry.location.lng();
          this.controlService.cityName = place.formatted_address;
          this.zoom = 12;
          this.searchElementRef.nativeElement.innerText = '';
    })
  })
})
}
  

  searchPlace() {
    console.log(this.controlService.cityName)
  }

  addToList() {
    console.log(this.searchElementRef.nativeElement.innerText)
    this.searchElementRef.nativeElement.innerText = '';
    if (this.controlService.locationsList.length > 10) {
      console.log('Max 10 Locations Allowed')
      return
    } else if (this.controlService.locationsList.find((place) => place.name == this.controlService.cityName)) {
      console.log('Place is already on the list.')
      return
    }
    this.controlService.locationsList.push({
      name: this.controlService.cityName,
      longitude: this.controlService.longitude,
      latitude: this.controlService.latitude
    })
    console.log(this.controlService.locationsList);
  }

  getOptimizedPath() {
    this.controlService.getOptimizedPath()
  }

}
