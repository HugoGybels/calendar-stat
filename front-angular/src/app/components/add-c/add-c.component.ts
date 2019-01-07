import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";

@Component({
  selector: 'app-add-c',
  templateUrl: './add-c.component.html',
  styleUrls: ['./add-c.component.css']
})
export class AddCComponent implements OnInit {

  @Output() eventUpdateList = new EventEmitter<boolean>(); // Evenement permetant de mettre à jour la liste

  constructor(private calendarStatService: CalendarStatService) { }

  ngOnInit() {
  }

  addC() {
    if(confirm("Confirmez l'ajout")) {
      this.calendarStatService.addC().subscribe( data => {
        this.eventUpdateList.emit()
      });
    }
  }

}
