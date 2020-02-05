import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  constructor() {}

  private MONTH_DAYS: number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  public isLeapYear(year: number): boolean {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }

  public generatedMonth(year: number, month: number): Date[][] {
    const dayArray: Date[] = [];
    this.MONTH_DAYS[1] = this.daysInFebruary(year);

    // give padding of at least a week on each side of the month
    for (let i = -6; i <= this.MONTH_DAYS[month] + 6; i++) {
      dayArray.push(new Date(year, month, i));
    }

    const yearWeek: Date[][] = [];

    dayArray.forEach((value) => {
      // if the array is empty or if the day is Sunday, add an empty array to be added to.
      if (value.getDay() === 0 || yearWeek.length === 0) {
        yearWeek.push([]);
      }
      // add the value to the last array
      yearWeek[yearWeek.length - 1].push(value);
    });

    // filter out weeks that contain at least one day in the month and return
    return yearWeek.filter(dw => dw.some(d => d && d.getMonth() === month));
  }

  private daysInFebruary(year: number): number {
    return (this.isLeapYear(year)) ? 29 : 28;
  }

  public populateTypicalDay(date: Date): Date[] {
    const dates: Date[] = [];
    // 9:30 to 5:30
    for (let i = 570; i <= 1050; i += 30) {
      dates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate(), Math.floor(i / 60), i % 60));
    }
    return dates;
  }

}
