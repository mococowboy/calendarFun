import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  constructor() { }

  private MONTH_NAME: string[] = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  private DAY_NAME: string[] = [
    'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'
  ]

  private MONTH_DAYS: number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ]

  private isLeapYear(year: number): boolean {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }

  public generatedMonth(year: number, month: number): Date[] {
    const dayArray: Date[] = [];

    if (this.isLeapYear(year) && month === 1) {
      for (let i = 1; i <= 29; i++) {
        dayArray.push(new Date(year, month, i));
      }
    } else {
      for (let i = 1; i <= this.MONTH_DAYS[month]; i++) {
        dayArray.push(new Date(year, month, i));
      }
    }
    return dayArray;
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
