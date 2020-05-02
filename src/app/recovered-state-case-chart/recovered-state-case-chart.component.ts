import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recovered-state-case-chart',
  templateUrl: './recovered-state-case-chart.component.html',
  styleUrls: ['./recovered-state-case-chart.component.css']
})
export class RecoveredStateCaseChartComponent implements OnInit {
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
    this.createRecoveredStateChart();
  }

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createRecoveredStateChart(){
    this.generateColorArray(1);
    let states: any = [];
    let recovered: any = [];
    let i;
    for(i = 1; i < 21; i++){
      states.push(this.rawData.statewise[i].state);
    }
    for(i = 1; i < 21; i++){
      recovered.push(this.rawData.statewise[i].recovered);
    }
    this.bars = new Chart(this.dailyCaseChart.nativeElement, {
      type: 'line',
      data: {
        labels: states,
        datasets: [{
          label: 'Death cases till today',
          data: recovered,
          backgroundColor: this.colorArray[0], // array should have same number of elements as number of dataset
          borderColor: this.colorArray[0],// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Total recovered cases (nation-wide): ' + this.rawData.statewise[0].recovered
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
