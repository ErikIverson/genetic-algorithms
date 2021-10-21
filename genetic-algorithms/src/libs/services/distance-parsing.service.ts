import { Injectable } from '@angular/core';
import { DistanceMatrix } from '../../assets/testFolder/testLocations';

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
        distDict.push(element.distance.value);
      });
      this.distanceDict.push(distDict);
    });
    console.log('distance dict', JSON.stringify(this.distanceDict));
    console.log('address list: ', JSON.stringify(this.getIndexMap(matrix)))
    return this.distanceDict;
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
