import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CCalendarComponent } from './components/c-calendar/c-calendar.component';
import {CalendarStatService} from './services/calendar-stat/calendar-stat.service';
import {HttpClientModule} from '@angular/common/http';
import { AddCComponent } from './components/add-c/add-c.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CCalendarComponent,
    AddCComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CalendarStatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
