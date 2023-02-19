import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentOverviewDashboardComponent } from './investment-overview-dashboard.component';

describe('InvestmentOverviewDashboardComponent', () => {
  let component: InvestmentOverviewDashboardComponent;
  let fixture: ComponentFixture<InvestmentOverviewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentOverviewDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentOverviewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
