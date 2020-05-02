import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCaseChartComponent } from './daily-case-chart.component';

describe('DailyCaseChartComponent', () => {
  let component: DailyCaseChartComponent;
  let fixture: ComponentFixture<DailyCaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
