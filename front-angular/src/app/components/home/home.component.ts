import { Component, OnInit } from '@angular/core';
import {Day} from "../../model/Day";
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public days: Array<Day> = [];

  constructor(private calendarStatService: CalendarStatService) {
    this.updateDayList();
  }

  ngOnInit() {
  }

  updateDayList() {
    this.calendarStatService.getAllDays().subscribe( days => {
      this.days = [];
      days.forEach( day => {
          this.days.push(new Day(day.day, +day.nb_c));
        });
      }
    )
  }

}
