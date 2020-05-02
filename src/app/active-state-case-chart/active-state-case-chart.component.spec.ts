import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStateCaseChartComponent } from './active-state-case-chart.component';

describe('ActiveStateCaseChartComponent', () => {
  let component: ActiveStateCaseChartComponent;
  let fixture: ComponentFixture<ActiveStateCaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveStateCaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveStateCaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
