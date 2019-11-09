import {Component} from '@angular/core';
import {MonthService} from './month.service';

@Component({
  selector: 'calendar-fun',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  month: string;
  year: number;
  monthService: MonthService;

  constructor(monthService: MonthService) {
    this.monthService = monthService;

    const reset = monthService.resetMonth();
    this.month = this.monthService.getMonthName(reset.getMonth());
    this.year = reset.getFullYear();
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
