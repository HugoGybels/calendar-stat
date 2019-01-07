import {Component, Input, OnInit} from '@angular/core';
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";
import {Day} from "../../model/Day";

@Component({
  selector: 'app-c-calendar',
  templateUrl: './c-calendar.component.html',
  styleUrls: ['./c-calendar.component.css']
})
export class CCalendarComponent implements OnInit {

  @Input() days: Array<Day>;

  constructor() {
  }

  ngOnInit() {
  }

}
