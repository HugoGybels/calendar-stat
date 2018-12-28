import { Component, OnInit } from '@angular/core';
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";
import {Day} from "../../model/Day";

@Component({
  selector: 'app-c-calendar',
  templateUrl: './c-calendar.component.html',
  styleUrls: ['./c-calendar.component.css']
})
export class CCalendarComponent implements OnInit {

  public days: Array<Day> = [];

  constructor(private calendarStatService: CalendarStatService) {

    this.calendarStatService.getAllStats().subscribe( data => {
        data.forEach( day => {
          this.days.push(new Day(day.day, +day.nb_c));
        });
        console.log(this.days);
      }
    )
  }

  ngOnInit() {
  }

}
