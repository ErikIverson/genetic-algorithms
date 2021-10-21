import { Component } from '@angular/core';
import { ControlService } from 'src/libs/services/control.service';

@Component({
  selector: 'app-homegrid',
  templateUrl: './homegrid.component.html',
  styleUrls: ['./homegrid.component.scss']
})
export class HomegridComponent  {

  constructor(
    public controlService: ControlService
  ) { }

  

}
