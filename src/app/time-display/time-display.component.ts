import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MonthService} from "../month.service";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnChanges {

  @Input()
  date: Date;
  times: Date[] = [];
  monthService: MonthService;

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.times = this.monthService.populateTypicalDay(this.date);
  }

}
