import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'COVID-19 Dashboard';

  selected = '';

  chartNames = [
    
    { value: 'dailyCaseChart', viewValue: 'Latest Cases in India' },
    { value: 'overallCaseChart', viewValue: 'Overall Cases in India' },
    { value: 'confirmedCaseChart', viewValue: 'Statewise Confirmed Cases in India'},
    { value: 'deathCaseChart', viewValue: 'Statewise Death Cases in India' },
    { value: 'activeCaseChart', viewValue: 'Statewise Active Cases in India' },
    { value: 'recoveredCaseChart', viewValue: 'Statewise Recovered Cases in India' }
  ];

  constructor(private router : Router){}

  navigateChart(value){
    // console.log(value);
    this.router.navigate(['/',value]);
  }
}
