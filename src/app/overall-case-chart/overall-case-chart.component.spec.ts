import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallCaseChartComponent } from './overall-case-chart.component';

describe('OverallCaseChartComponent', () => {
  let component: OverallCaseChartComponent;
  let fixture: ComponentFixture<OverallCaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallCaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallCaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
