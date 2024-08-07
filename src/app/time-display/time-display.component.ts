import {
  AfterViewChecked,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MonthService} from '../month.service';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnChanges, AfterViewChecked {

  @Input()
  date: Date;
  times: Date[] = [];
  availableTimes: TimeCell[];
  timeSelected: UntypedFormControl;
  @ViewChild('selectElement')
  selectElement;

  constructor(private monthService: MonthService) {
    this.timeSelected = new UntypedFormControl('');
  }

  ngAfterViewChecked(): void {
    this.selectElement.nativeElement.focus();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.availableTimes = this.monthService.populateTypicalDay(this.date).map(d => new TimeCell(d, Math.random() > 0.7));
  }

}

export class TimeCell {

  date: Date;
  active: boolean;

  constructor(date: Date, active: boolean) {
    this.date = date;
    this.active = active;
  }

}
