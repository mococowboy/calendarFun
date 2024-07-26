import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonthComponent } from './month.component';

describe('MonthComponent', () => {
  let component: MonthComponent;
  let fixture: ComponentFixture<MonthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react to changes in the input date', () => {
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    component.date = new Date();
    expect(component.date.getMonth()).toBe(new Date().getMonth());
    expect(component.date.getFullYear()).toBe(new Date().getFullYear());
  });

  it('should return true when given the current month', () => {
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    component.date = new Date();
    expect(component.isCurrentMonth(new Date())).toBeTruthy();
  });

  it('should return false when given the non-current month', () => {
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    component.date = new Date();
    expect(component.isCurrentMonth(new Date(2019, 10))).toBeFalsy();
  });
});
