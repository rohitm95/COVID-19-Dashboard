import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyCaseChartComponent } from './daily-case-chart/daily-case-chart.component';
import { OverallCaseChartComponent } from './overall-case-chart/overall-case-chart.component';
import { ConfirmedStateCaseChartComponent } from './confirmed-state-case-chart/confirmed-state-case-chart.component';
import { ActiveStateCaseChartComponent } from './active-state-case-chart/active-state-case-chart.component';
import { DeathStateCaseChartComponent } from './death-state-case-chart/death-state-case-chart.component';
import { RecoveredStateCaseChartComponent } from './recovered-state-case-chart/recovered-state-case-chart.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppInterceptor } from './shared/app-interceptor';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyCaseChartComponent,
    OverallCaseChartComponent,
    ConfirmedStateCaseChartComponent,
    ActiveStateCaseChartComponent,
    DeathStateCaseChartComponent,
    RecoveredStateCaseChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
