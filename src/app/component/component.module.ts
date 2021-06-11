import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { ChartsModule } from 'ng2-charts';

// Components
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraphicsBarComponent } from './graphics-bar/graphics-bar.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    GraphicsBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
  ],
  exports: [
    BreadcrumbComponent,
    SidebarComponent,
    HeaderComponent,
    GraphicsBarComponent
  ]
})
export class ComponentModule { }
