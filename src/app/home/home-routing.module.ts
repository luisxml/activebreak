import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from '../home/home.component';

// Routes
import { homeRoutes } from './home.routes';

// Routes
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: homeRoutes
  },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
