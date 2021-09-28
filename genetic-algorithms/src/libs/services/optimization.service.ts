import { Injectable } from '@angular/core';
import { DistanceParsingService } from './distance-parsing.service';
import { sampleResultDistances } from '../../assets/testFolder/testLocations';

@Injectable({
  providedIn: 'root'
})
export class OptimizationService {
  public distanceDict;
  public dnaGene;


  constructor(
    private distanceParser: DistanceParsingService
  ) {
    this.distanceDict = this.distanceParser.parse(sampleResultDistances);
  
   }

   getRandomString(len): any[] {
     let dna = [];
     let randomDna = [];
     for (let i = 0; i < len; i ++) {
       dna.push(i);
     };
     let i = Math.floor(Math.random()*(len-.01));
     dna = dna.sort((a, b) => a % i - b % i)
     return dna;
   }


}
