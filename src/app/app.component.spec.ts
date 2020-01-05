import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MonthComponent} from "./month/month.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MonthComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should advance a month when next is called'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.next();
    fixture.detectChanges();
    expect(app.date.getFullYear()).toBe(new Date().getFullYear());
    expect(app.date.getMonth()).toBe(new Date().getMonth() + 1)
  });

  it(`should substract a month when prev is called'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.date = new Date(2020, 2);
    app.prev();
    fixture.detectChanges();
    expect(app.date.getFullYear()).toBe(2020);
    expect(app.date.getMonth()).toBe(1)
  });

  it(`should set to current month when reset is called'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.date = new Date(2024, 11);
    app.reset();
    fixture.detectChanges();
    expect(app.date.getFullYear()).toBe(new Date().getFullYear());
    expect(app.date.getMonth()).toBe(new Date().getMonth());
  });

});
