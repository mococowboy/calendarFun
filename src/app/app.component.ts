import {Component, Input} from '@angular/core';

@Component({
  selector: 'calendar-fun',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  message: string = '';

  date: Date;

  constructor() {
    this.date = new Date();
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
  }

}
