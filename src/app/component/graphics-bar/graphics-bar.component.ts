import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphics-bar',
  templateUrl: './graphics-bar.component.html',
  styleUrls: ['./graphics-bar.component.css']
})
export class GraphicsBarComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];

  barChartData: ChartDataSets[] = [
    { data: [1500, 1450, 1625, 1525, 1580, 1600, 1515], label: 'Asignadas' },
    { data: [1200, 1100, 1200, 1250, 1300, 1300, 1250], label: 'Realizadas' },
    { data: [300 , 350 , 425 , 275 , 280 , 300 , 265], label: 'Postergadas' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
