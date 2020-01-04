import {Component, OnInit} from '@angular/core';
import {MonthService} from './month.service';

@Component({
  selector: 'calendar-fun',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  date: Date;
  monthService: MonthService;

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  ngOnInit(): void {
    this.date = new Date();
    // set date for the middle so adding months won't be weird
    this.date.setDate(15);
  }

  public next() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.date = new Date(this.date);
  }

  public prev() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.date = new Date(this.date);
  }

  public reset() {
    this.date = new Date();
    this.date.setDate(15);
    //this.date = new Date(this.date);
  }

}
