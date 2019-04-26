## Installation

1. Install ng-chartjs:

```sh
npm install ng-chartjs --save
```

2. Install chart.js library:

```sh
npm install chart.js --save
```

3. In your App.module
```sh
import { NgChartjsModule } from 'ng-chartjs';
imports: [
   NgChartjsModule.registerPlugin(),
]
```
4. In your Component.module
```sh
import { NgChartjsModule } from 'ng-chartjs';
imports: [
    NgChartjsModule,
  ],
```
5. In your Component TS File
```sh
lineChartData: Array<any> = [
    {
      label: 'Line 1',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [ 10, 15, 20, 25, 30, 10, 15, 20, 25, 30, 10, 15, 20, 25, 30 ],
    },

    {
      label: 'Line 2',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30, 10, 15, 20, 30, 10, 15, 20, 30, 10, 15, 20, 30, 10, 15, 25 ],
    },
  ];
  lineChartLabels = ["tag 1", "tag 2", "tag 3", "tag 4", "tag 5", "tag 6", "tag 7", "tag 8", "tag 9", "tag 10", "tag 11"];
  lineChartOptions: any = {
    resposive: true,
  };
  lineChartLegend = true;
  lineChartType = 'line';
  inlinePlugin: any;
```
6. In your HTML FILE
```sh
<div class="chartWrapper">
  <div class="chartAreaWrapper">
   <canvas ngChartjs height="400" width="15000" [datasets]="lineChartData" [labels]="lineChartLabels
   [options]="lineChartOptions" [legend]="lineChartLegend" [chartType]="lineChartType" [inlinePlugins]="inlinePlugin">
   </canvas>
  </div>
</div>
```
6. In your SCSS/CSS FILE
```sh
.chartWrapper {
    position: relative;
  }

  .chartWrapper > canvas {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  .chartAreaWrapper {
    width: 15000px;
    overflow-x: scroll;
  }
```


## Documentation ChartJS
https://www.chartjs.org/docs/latest/
