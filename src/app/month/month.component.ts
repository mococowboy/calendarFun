import {Component, Input, OnChanges} from '@angular/core';
import {MonthService} from '../month.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnChanges {

  @Input() date: Date;

  monthService: MonthService;
  monthArray: Date[][];
  times: Date[] = [];
  selectedDate: Date;

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  ngOnChanges() {
    console.log(this.date);
    this.monthArray = this.monthService.generatedMonth(this.date.getFullYear(), this.date.getMonth());
    this.times = [];
  }

  public isCurrentMonth(date: Date): boolean {
    return this.date.getMonth() == date.getMonth();
  }

  public writeToConsole(date: Date): void {
    this.selectedDate = date;
    console.log(this.selectedDate);
  }

}
