import { Injectable } from '@angular/core';
import { LocationsListComponent } from './locations-list.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  places = []

  constructor() { }

  deletePlace(deleted) {
    const index = this.places.indexOf(deleted)
    this.places.splice(index, 1)
  }

  addPlace(newPlace) {
    this.places.push(newPlace)
  }

  clear() {
    this.places = []
  }
}
