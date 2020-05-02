import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathStateCaseChartComponent } from './death-state-case-chart.component';

describe('DeathStateCaseChartComponent', () => {
  let component: DeathStateCaseChartComponent;
  let fixture: ComponentFixture<DeathStateCaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathStateCaseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathStateCaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
