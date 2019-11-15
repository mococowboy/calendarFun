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

  monthArray: Date[][];

  constructor(monthService: MonthService) {
    this.monthService = monthService;
  }

  ngOnChanges() {
    this.monthArray = this.monthService.generatedMonth(this.year, this.monthService.getMonthIndex(this.month));
  }

  ngOnInit(): void {

  }

}
