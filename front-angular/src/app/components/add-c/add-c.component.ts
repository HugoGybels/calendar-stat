import { Component, OnInit } from '@angular/core';
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";

@Component({
  selector: 'app-add-c',
  templateUrl: './add-c.component.html',
  styleUrls: ['./add-c.component.css']
})
export class AddCComponent implements OnInit {

  constructor(private calendarStatService: CalendarStatService) { }

  ngOnInit() {
  }

  addC() {
    this.calendarStatService.addC(new Date());
    console.log('add-c');
  }

}
