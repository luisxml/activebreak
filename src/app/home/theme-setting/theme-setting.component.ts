import { Component, OnInit } from '@angular/core';

import { ThemeSettingService } from 'src/app/shared/services/service.index';

@Component({
  selector: 'app-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.css']
})
export class ThemeSettingComponent implements OnInit {

  constructor( public themeSeting: ThemeSettingService ) { }

  ngOnInit() {
    this.checkTheme();
  }

  changeTheme(theme: string, url: any) {
    this.themeSeting.setTheme(theme);
    this.setTheme(url);
  }

  setTheme(url: any) {
    const selectors: any = document.getElementsByClassName('selector');
    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }
    url.classList.add('working');
  }

  checkTheme() {
    const selectors: any = document.getElementsByClassName('selector');
    const theme  = this.themeSeting.settings.theme;
    for ( const ref of selectors ) {
     if ( ref.getAttribute('data-theme') === theme ) {
       ref.classList.add('working');
       break;
     }
    }
  }
  
}