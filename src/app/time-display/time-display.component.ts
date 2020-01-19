import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MonthService} from "../month.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnChanges, AfterViewInit {



  @Input()
  date: Date;
  times: Date[] = [];
  monthService: MonthService;
  timeSelected: FormControl;
  @ViewChild('selectElement', {static: false})
  selectElement;

  constructor(monthService: MonthService) {
    this.monthService = monthService;
    this.timeSelected = new FormControl('');
  }

  ngAfterViewInit(): void {
    this.selectElement.nativeElement.focus();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.times = this.monthService.populateTypicalDay(this.date);
  }

}
