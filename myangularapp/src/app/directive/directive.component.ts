import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl:'./directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  message: string ="message form ts file"
  flag: boolean=false
  
  months=["jan","feb","march","april","may","jun","july","august"]

  number=[12,13,34,5,7,78,89,90,45,23,4,57,234,]
  constructor() { }

  ngOnInit(): void {
  }

}

