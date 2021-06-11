import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSettingRoutingModule } from './theme-setting-routing.module';
import { ThemeSettingComponent } from './theme-setting.component';


@NgModule({
  declarations: [
    ThemeSettingComponent
  ],
  imports: [
    CommonModule,
    ThemeSettingRoutingModule
  ]
})
export class ThemeSettingModule { }
