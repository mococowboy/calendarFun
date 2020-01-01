import {Component, OnInit} from '@angular/core';
import {MonthService} from './month.service';

@Component({
  selector: 'calendar-fun',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  month: string;
  year: number;
  date: Date;
  monthService: MonthService;

  ngOnInit(): void {
    this.date = new Date();
    // if today was the 31st of January and I added a month to become
    // February, the date would be in March. This fixes that.
    this.date.setDate(15);
    this.month = this.monthService.getMonthName(this.date.getMonth());
    this.year = this.date.getFullYear();
  }

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  public next() {
    this.month = this.monthService.getNextMonth(this.month);
    if (this.month === 'JANUARY') {
      ++this.year;
    }
  }

  public prev() {
    this.month = this.monthService.getPrevMonth(this.month);
    if (this.month === 'DECEMBER') {
      --this.year;
    }
  }

  public reset() {
    const yearMonth = this.monthService.resetMonth();
    this.month = this.monthService.getMonthName(yearMonth.getMonth());
    this.year = yearMonth.getFullYear();
  }

}
