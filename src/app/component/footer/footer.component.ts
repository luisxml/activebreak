import { Component, OnInit } from '@angular/core';

import { GeneralLabel } from 'src/app/shared/models/general/label.interface';
import { general } from 'src/assets/label.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  labelGeneral: GeneralLabel =  new GeneralLabel();

  constructor() { }

  ngOnInit(): void {
    this.labelGeneral = general;
  }

}
