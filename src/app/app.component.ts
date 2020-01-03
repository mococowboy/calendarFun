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

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  ngOnInit(): void {
    this.date = new Date();
    // if today was the 31st of January and I added a month to become
    // February, the date would be in March. This fixes that.
    this.date.setDate(15);
    this.month = this.monthService.getMonthName(this.date.getMonth());
    this.year = this.date.getFullYear();
  }

  public next() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.month = this.monthService.getMonthName(this.date.getMonth());
    this.year = this.date.getFullYear();
    this.date = new Date(this.date);
  }

  public prev() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.month = this.monthService.getMonthName(this.date.getMonth());
    this.year = this.date.getFullYear();
    this.date = new Date(this.date);
  }

  public reset() {
    this.date = new Date();
    this.month = this.monthService.getMonthName(this.date.getMonth());
    this.year = this.date.getFullYear();
    this.date = new Date(this.date);
  }

}
