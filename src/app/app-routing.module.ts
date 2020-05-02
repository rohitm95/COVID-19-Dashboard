import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveStateCaseChartComponent } from './active-state-case-chart/active-state-case-chart.component';
import { ApiResolverService } from './services/api-resolver.service';
import { DailyCaseChartComponent } from './daily-case-chart/daily-case-chart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OverallCaseChartComponent } from './overall-case-chart/overall-case-chart.component';
import { ConfirmedStateCaseChartComponent } from './confirmed-state-case-chart/confirmed-state-case-chart.component';
import { DeathStateCaseChartComponent } from './death-state-case-chart/death-state-case-chart.component';
import { RecoveredStateCaseChartComponent } from './recovered-state-case-chart/recovered-state-case-chart.component';


const routes: Routes = [
  { path: '', redirectTo: 'dailyCaseChart', pathMatch: 'full' },
  { path: 'dailyCaseChart', component: DailyCaseChartComponent, resolve: { chartData : ApiResolverService} },
  { path: 'overallCaseChart', component: OverallCaseChartComponent, resolve: { chartData : ApiResolverService} },
  { path: 'confirmedCaseChart', component: ConfirmedStateCaseChartComponent, resolve: { chartData : ApiResolverService} },
  { path: 'deathCaseChart', component: DeathStateCaseChartComponent, resolve: { chartData : ApiResolverService} },
  { path: 'activeCaseChart', component: ActiveStateCaseChartComponent, resolve: { chartData : ApiResolverService} },
  { path: 'recoveredCaseChart', component: RecoveredStateCaseChartComponent, resolve: { chartData : ApiResolverService} },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
