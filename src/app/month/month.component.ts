import {Component, Input, OnChanges} from '@angular/core';
import {MonthService} from '../month.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnChanges {

  @Input()
  date: Date;
  monthArray: Date[][];
  times: Date[] = [];
  selectedDate: Date;

  constructor(private monthService: MonthService) {

  }

  ngOnChanges() {
    this.monthArray = this.monthService.generatedMonth(this.date.getFullYear(), this.date.getMonth());
    this.times = [];
    this.selectedDate = null;
  }

  public isCurrentMonth(date: Date): boolean {
    return this.date.getMonth() == date.getMonth();
  }

  public writeToConsole(date: Date): void {
    this.selectedDate = date;
  }

}
