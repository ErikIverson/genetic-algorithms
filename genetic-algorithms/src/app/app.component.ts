import { Component } from '@angular/core';
import { ControlService } from 'src/libs/services/control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public controlService: ControlService,
  ) { }
}
