import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  isValid: boolean=true
  imgUrl:string="./assets/images/nature.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
