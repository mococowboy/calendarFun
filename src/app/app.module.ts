import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';

import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { MonthService } from "./month.service";
import {createCustomElement} from '@angular/elements';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  bootstrap: [AppComponent],
  providers: [MonthService],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector});
    customElements.define('calendar-fun', el);
  }

}
