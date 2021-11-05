import { Component } from '@angular/core';
import { ControlService } from 'src/libs/services/control.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  public currentGen = this.controlService.currentGen;

  constructor(
    public controlService: ControlService,
  ) { }

  updateCurrentGen(event) {
    this.controlService.currentGen = event.value;
    this.controlService.addLocations(this.controlService.currentLitter[this.controlService.currentGen][0]);
  }

}
