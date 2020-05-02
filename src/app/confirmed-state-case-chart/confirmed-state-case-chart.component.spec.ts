import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedStateCaseChartComponent } from './confirmed-state-case-chart.component';

describe('ConfirmedStateCaseChartComponent', () => {
  let component: ConfirmedStateCaseChartComponent;
  let fixture: ComponentFixture<ConfirmedStateCaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedStateCaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedStateCaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
