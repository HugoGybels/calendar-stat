import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";
import {Router} from "@angular/router";
import {ConstantesActions} from "../../constantes/constantes-actions";

@Component({
  selector: 'app-add-c',
  templateUrl: './add-c.component.html',
  styleUrls: ['./add-c.component.css']
})
export class AddCComponent implements OnInit {

  public state = ConstantesActions.CHOIX_ACTION;


  constructor(private calendarStatService: CalendarStatService,
              private router: Router) { }

  ngOnInit() {
  }

  addC() {

    this.calendarStatService.addC().subscribe( data => {
      this.state = ConstantesActions.ENVOYE;
      this.router.navigate(['home']);
    });

  }

}
