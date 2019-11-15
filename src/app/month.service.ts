import {Injectable} from '@angular/core';
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  constructor() {
  }

  private MONTH_NAME: string[] = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  private DAY_NAME: string[] = [
    'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'
  ];

  private MONTH_DAYS: number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  public isLeapYear(year: number): boolean {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }

  public generatedMonth(year: number, month: number): Date[][] {
    const dayArray: Date[] = [];
    this.MONTH_DAYS[1] = this.daysInFebruary(year);

    //populate the entire year of dates.
    for (let month of this.MONTH_NAME) {
      for (let i = 1; i <= this.MONTH_DAYS[this.getMonthIndex(month)]; i++) {
        dayArray.push(new Date(year, this.getMonthIndex(month), i));
      }
    }

    const yearWeek: Date[][] = [];

    //populate an array of weeks of dates for the whole year.
    dayArray.map((val, idx, arr) => {
      if (val.getDay() === 0) {
        yearWeek.push(Array.of(val, arr[idx + 1], arr[idx + 2], arr[idx + 3], arr[idx + 4], arr[idx + 5], arr[idx + 6]));
      }
    })

    //filter out weeks that contain at least one day in the month and return
    return yearWeek.filter(dw => dw.some(d => d && d.getMonth() === month))
  }

  private daysInFebruary(year: number): number {
    return (this.isLeapYear(year)) ? 29 : 28;
  }

  public resetMonth(): Date {
    return new Date();
  }

  public getMonthIndex(month: string): number {
    return this.MONTH_NAME.findIndex(monthArray => monthArray === month);
  }

  public getMonthName(monthIndex: number): string {
    if (monthIndex < 0 || monthIndex > 11) throw RangeError("Index is invalid");
    return this.MONTH_NAME[monthIndex];
  }

  public getNextMonth(month: string): string {
    let monthIndex = this.MONTH_NAME.findIndex(monthObj => monthObj === month);
    if (monthIndex === 11) {
      return this.MONTH_NAME[0];
    } else {
      return this.MONTH_NAME[++monthIndex];
    }
  }

  public getPrevMonth(month: string): string {
    let monthIndex = this.MONTH_NAME.findIndex(monthObj => monthObj === month);
    if (monthIndex === 0) {
      return this.MONTH_NAME[11];
    } else {
      return this.MONTH_NAME[--monthIndex];
    }
  }

}
