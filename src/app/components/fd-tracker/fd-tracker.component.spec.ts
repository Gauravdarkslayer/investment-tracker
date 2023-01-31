import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdTrackerComponent } from './fd-tracker.component';

describe('FdTrackerComponent', () => {
  let component: FdTrackerComponent;
  let fixture: ComponentFixture<FdTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
