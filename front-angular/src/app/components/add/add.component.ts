import { Component, OnInit } from '@angular/core';
import {ConstantesActions} from "../../constantes/constantes-actions";
import {CalendarStatService} from "../../services/calendar-stat/calendar-stat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public state = ConstantesActions.CHOIX_ACTION;


   constructor(private calendarStatService: CalendarStatService,
               private router: Router) { }

   ngOnInit() {
   }

   addC() {
     if(confirm("Voulez vous vraiment ajouter une C ?\nAction non reversible.")) {
      this.calendarStatService.reccordLast().subscribe(); 
      this.calendarStatService.addC().subscribe( data => {
         this.router.navigate(['home']);
       });
     }
   }

 }
