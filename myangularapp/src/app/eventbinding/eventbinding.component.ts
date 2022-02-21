import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
displayMsg(){
  alert("hello shyam");
}
  constructor() { }

  ngOnInit(): void {
  }

}
