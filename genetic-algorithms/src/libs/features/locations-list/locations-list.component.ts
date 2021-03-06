import { Component } from '@angular/core';
import { ControlService } from 'src/libs/services/control.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent {

  constructor(
    public controlService: ControlService
  ) { }

}
