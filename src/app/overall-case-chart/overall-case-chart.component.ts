import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overall-case-chart',
  templateUrl: './overall-case-chart.component.html',
  styleUrls: ['./overall-case-chart.component.css']
})
export class OverallCaseChartComponent implements OnInit {
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
    this.createOverallStatusChart();
  }

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createOverallStatusChart() {
    this.generateColorArray(3);
    let lastArrayIndex = this.rawData.cases_time_series.length - 1;
    let chartData = this.rawData.cases_time_series[lastArrayIndex];
    let todaysDate = chartData.date;
    this.bars = new Chart(this.dailyCaseChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Confirmed', 'Deceased', 'Recovered'],//,'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'
        datasets: [{
          label: 'Daily Cases',//Viewers in millions
          data: [chartData.totalconfirmed, chartData.totaldeceased, chartData.totalrecovered], //2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17
          backgroundColor: this.colorArray, // 'rgb(38, 194, 129)' array should have same number of elements as number of dataset
          borderColor: this.colorArray,// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          duration: 2000
        },
        responsive: true,
        maintainAspectRatio: true
      }
    });
  }
}
