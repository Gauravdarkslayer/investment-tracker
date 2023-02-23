import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDetailComponent } from './investment-detail.component';

describe('InvestmentDetailComponent', () => {
  let component: InvestmentDetailComponent;
  let fixture: ComponentFixture<InvestmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
