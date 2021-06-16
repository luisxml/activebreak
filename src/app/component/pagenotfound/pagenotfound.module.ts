import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

import { ComponentModule } from '../component.module';


@NgModule({
  declarations: [
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    ComponentModule
  ]
})
export class PagenotfoundModule { }
