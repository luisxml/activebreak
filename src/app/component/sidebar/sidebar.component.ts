import { Component, OnInit } from '@angular/core';

import { SidebarService } from 'src/app/shared/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  hideMenu() {
    const menu: HTMLElement = document.querySelector('.ti-close');
    if (menu) {
      menu.click();
    }
  }
}
