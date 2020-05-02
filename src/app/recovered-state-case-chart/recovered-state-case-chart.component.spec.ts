import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredStateCaseChartComponent } from './recovered-state-case-chart.component';

describe('RecoveredStateCaseChartComponent', () => {
  let component: RecoveredStateCaseChartComponent;
  let fixture: ComponentFixture<RecoveredStateCaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveredStateCaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredStateCaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
