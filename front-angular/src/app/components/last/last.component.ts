import { Component, OnInit } from '@angular/core';
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  public last: Date;

  constructor(private calendarStatService: CalendarStatService) { }

  ngOnInit() {
    this.calendarStatService.getLast().subscribe(last => {
      this.last = last;
    })
  }

}
