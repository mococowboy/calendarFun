import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MonthService} from '../month.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnChanges, OnInit {

  @Input() month: string;
  @Input() year: number;

  monthService: MonthService;

  monthArray: Date[];
  rows: Date[][];

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  ngOnChanges() {
    this.monthArray = this.monthService.generatedMonth(this.year, this.monthService.getMonthIndex(this.month));

    //create a row with empty Dates and then count backwards replacing the end of the weeks with the days in here?
    const firstRow: Date[] = this.monthArray.filter(d => d.getDate() <= this.monthArray.find(f => f.getDay() === 6).getDate());

    const lastSunday =  this.monthArray.filter(d => d.getDay() === 0).reduce((prev, curr) => prev.getDate() > curr.getDate() ? prev : curr);
    const lastWeek = this.monthArray.filter(day => day.getDate() >= lastSunday.getDate());

    // subtract the first and last weeks from the whole array leaving whole weeks
    const balance: Date[] = this.monthArray.filter(d => !firstRow.includes(d)).filter(e => !lastWeek.includes(e));
    const numMiddle = Math.floor(balance.length / 7);

    const middle: Date[][] = [];

    for (let i = 0; i <= numMiddle + 1; i++) {
      middle[i] = balance.slice(i * 7, (i * 7) + 7);
    }

    middle.unshift(firstRow);
    middle.push(lastWeek);
    this.rows = middle;
  }

  ngOnInit(): void {

  }

}
