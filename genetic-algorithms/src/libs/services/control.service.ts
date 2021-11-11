import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { apiKey } from 'src/libs/services/secrets/secret.service';
import { DistanceParsingService } from './distance-parsing.service';
import { DistanceMatrix } from '../../assets/testFolder/testLocations';
import { switchMap, take } from 'rxjs/operators';
import { litterHistory } from '../../assets/testFolder/litter-history';

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
  lines = [];
  showingHistory = false;

  currentGen: number; //0;
  currentLitter;  //any[];

  locationsList: locationObject[] = [{
    latitude: 40.7127753,
    longitude: -74.0059728,
    name: "New York, NY, USA"
  },
  {
    latitude: 44.977753,
    longitude: -93.2650108,
    name: "Minneapolis, MN, USA"
  },{
    latitude: 30.267153,
    longitude: -97.7430608,
    name: "Austin, TX, USA"
  }
];

  constructor(
    private httpService: HttpClient,
    private distanceParser: DistanceParsingService,
  ) { }

  getCityIndex(place: locationObject): string {
    return `#${this.locationsList.indexOf(place) + 1}`
  }

  deletePlace(deleted) {
    const index = this.locationsList.indexOf(deleted)
    this.locationsList.splice(index, 1)
  }

  clear() {
    this.locationsList = [];
    this.showingHistory = false;
    this.currentGen = null;
    this.currentLitter = null;
  }

  addLocations(route) {
    console.log(route)
    this.lines = []
    for (let index of route) {
      this.lines.push(this.locationsList[index])
    }
    this.lines.push(this.locationsList[route[0]]);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showHistory(litterHistory) {
    this.showingHistory = true;
    while (this.showingHistory) {
      for (let i in litterHistory) {
        if (!this.showingHistory) {
          break
        }
        await this.delay(100)
        this.addLocations(litterHistory[i][0])
        console.log('Gen: ', i)
        this.currentGen = Number(i);
        console.log('Path: ', litterHistory[i][0])
        console.log('Distance: ', litterHistory[i][1])
      }
      this.showingHistory = false;
    }
    
  }

  getHttpRequestBody(): string {
    let origins = this.locationsList.map(place => place.name);
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

  // getDistanceMatrix() {
  //   return this.callDistanceMatrix$().pipe(take(1)).subscribe((matrix) => console.log(this.distanceParser.parse(matrix)), error => console.error(error))
  // }

  callOptimizePath$(distance_dict) {
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const params = new HttpParams().set('distance_dict', JSON.stringify(distance_dict)).set('batch_size', 400).set('max_generations', 150).set('mutation_odds', 0.01)
    console.log('request: ', params)
     if (distance_dict !== []) {
      return this.httpService.post<any[]>('/optimize-path', {
      headers: headers, 
      params: params
      })
     } else return null
  }

  getOptimizedPath() {
  
    this.showingHistory = false;
    if (this.locationsList.length > 10) {
      console.log('Max 10 Locations Allowed');
      return
    }
    this.callDistanceMatrix$().pipe(switchMap((distance_dict) => 
      this.callOptimizePath$(this.distanceParser.parse(distance_dict)))).subscribe((litter) => {
        console.log(litter);
        console.log('Best path', litter[litter.length - 1]);
        this.showHistory(litter);
        this.currentLitter = litter;
      })
  }

}
