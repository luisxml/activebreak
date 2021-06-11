import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBlankRoutingModule } from './page-blank-routing.module';
import { PageBlankComponent } from './page-blank.component';


@NgModule({
  declarations: [
    PageBlankComponent
  ],
  imports: [
    CommonModule,
    PageBlankRoutingModule
  ]
})
export class PageBlankModule { }
