import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-c',
  templateUrl: './add-c.component.html',
  styleUrls: ['./add-c.component.css']
})
export class AddCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addC() {
    console.log('add-c');
  }

}
