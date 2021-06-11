import { Component } from '@angular/core';

import { ThemeSettingService } from './shared/services/service.index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminActiveBreaks';

  constructor(
    public settings: ThemeSettingService
  ) {
  }

}
