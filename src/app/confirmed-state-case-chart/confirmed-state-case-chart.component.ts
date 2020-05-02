import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmed-state-case-chart',
  templateUrl: './confirmed-state-case-chart.component.html',
  styleUrls: ['./confirmed-state-case-chart.component.css']
})
export class ConfirmedStateCaseChartComponent implements OnInit {
  @ViewChild('dailyCaseChart', { static: true }) dailyCaseChart: ElementRef;
  bars: any;
  colorArray: any;
  rawData: any;
  isLoaded: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData(){
    this.rawData = this.route.snapshot.data.chartData;
    // console.log(this.rawData);
    this.createChart();
  }

  createChart(){
    this.createConfirmedStateChart();
  }  

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createConfirmedStateChart() {
    this.generateColorArray(1);
    let states: any = [];
    let confirmed: any = [];
    let i;
    for(i = 1; i < 21; i++){
      states.push(this.rawData.statewise[i].state);
    }
    for(i = 1; i < 21; i++){
      confirmed.push(this.rawData.statewise[i].confirmed);
    }
    this.bars = new Chart(this.dailyCaseChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: states,
        datasets: [{
          label: 'Total cases till today',
          data: confirmed,
          backgroundColor: this.colorArray[0], // array should have same number of elements as number of dataset
          borderColor: this.colorArray[0],// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Total cases confirmed (nation-wide): ' + this.rawData.statewise[0].confirmed
        },
        animation: {
          duration: 2000
        },
        responsive: true,
        maintainAspectRatio: true
      }
    });
  }

}
