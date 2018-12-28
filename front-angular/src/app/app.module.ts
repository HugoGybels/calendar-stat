import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CCalendarComponent } from './c-calendar/c-calendar.component';
import {CalendarStatService} from "./services/calendar-stat/calendar-stat.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CCalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CalendarStatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
