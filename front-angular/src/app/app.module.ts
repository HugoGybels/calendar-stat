import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CCalendarComponent } from './components/c-calendar/c-calendar.component';
import {CalendarStatService} from "./services/calendar-stat/calendar-stat.service";
import {HttpClientModule} from "@angular/common/http";
import { AddCComponent } from './components/add-c/add-c.component';

@NgModule({
  declarations: [
    AppComponent,
    CCalendarComponent,
    AddCComponent
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
