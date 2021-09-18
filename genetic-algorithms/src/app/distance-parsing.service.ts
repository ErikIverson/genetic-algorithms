import { Injectable } from '@angular/core';
import { DistanceMatrix, sampleResultDistances } from './testLocations';

@Injectable({
  providedIn: 'root'
})
export class DistanceParsingService {

  public distanceDict = [];

  constructor() { }

  parse(matrix: DistanceMatrix): any {
    matrix.rows.forEach( row => {
      let distDict = [];
      row.elements.forEach(element => {
        distDict.push(element.distance);
      });
      this.distanceDict.push(distDict);
      console.log('index of location',this.distanceDict.indexOf(distDict),  this.getIndex(this.distanceDict.indexOf(distDict), matrix))
    });
    console.log('distance dict', this.distanceDict);
  }

  getIndexMap(matrix: DistanceMatrix) {
    let addresses = [];
    matrix.destination_addresses.forEach(address => {
      addresses.push(address);
    });
    return addresses;
  }

  getIndex(index: number, matrix: DistanceMatrix): string {
    const addyList = this.getIndexMap(matrix);
    return addyList[index];
  }

}
