import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimeDisplayComponent } from './time-display.component';

describe('TimeDisplayComponent', () => {
  let component: TimeDisplayComponent;
  let fixture: ComponentFixture<TimeDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
