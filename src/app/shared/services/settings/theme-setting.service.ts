import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Models
import { ThemeSetting } from '../../models/general/theme-setting.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeSettingService {

  settings: ThemeSetting = {
    url: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(
    @Inject(DOCUMENT) private document
  ) 
  {
    this.loadSettingTheme();
  }

  saveTheme() {
    localStorage.setItem('settingTheme', JSON.stringify(this.settings));
  }

  loadSettingTheme() {
    if ( localStorage.getItem('settingTheme')) {
      this.settings = JSON.parse(localStorage.getItem('settingTheme'));
      this.setTheme(this.settings.theme);
    } else {
      this.setTheme(this.settings.theme);
    }
  }

  setTheme( theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.url = url;
    this.saveTheme();
  }

}

