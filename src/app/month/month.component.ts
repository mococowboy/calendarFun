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

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  ngOnChanges() {
    this.monthArray = this.monthService.generatedMonth(this.date.getFullYear(), this.date.getMonth());
  }

  public isCurrentMonth(date: Date): boolean {
    return this.date.getMonth() == date.getMonth();
  }

  public writeToConsole(date: Date): void {
    console.log('The date clicked on was ' + date);
  }

}
