import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBlankComponent } from './page-blank.component';

const routes: Routes = [
  {
    path: '',
    component: PageBlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageBlankRoutingModule { }
