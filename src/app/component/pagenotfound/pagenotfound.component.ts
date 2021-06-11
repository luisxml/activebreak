import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-nopagefound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  year: number;

  constructor() {
    this.year = new Date().getFullYear();
   }

  ngOnInit() {
    init_plugins();
  }

}
