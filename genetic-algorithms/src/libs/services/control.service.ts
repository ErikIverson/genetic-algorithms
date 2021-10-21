import { Injectable } from '@angular/core';

export interface locationObject {
  name: string,
  longitude: number,
  latitude: number
}

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  
  searchString: string;
  
  latitude: number;
  longitude: number;
  cityName: string;

  locationsList: locationObject[] = [];

  constructor() { }

  getCityIndex(place: locationObject): string {
    return `#${this.locationsList.indexOf(place) + 1}`
  }

  deletePlace(deleted) {
    const index = this.locationsList.indexOf(deleted)
    this.locationsList.splice(index, 1)
  }

  clear() {
    this.locationsList = [];
  }

}
