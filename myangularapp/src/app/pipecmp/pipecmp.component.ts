import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecmp',
  templateUrl: './pipecmp.component.html',
  styleUrls: ['./pipecmp.component.css']
})
export class PipecmpComponent implements OnInit {

  title = "Angular Application"
  num:number=10
  today = new Date();
  jsonval = {name:'Rox', age:'25',
              address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


  constructor() { }

  ngOnInit(): void {
  }

}
