import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
    constructor() { }
    username : string = '';
    password : string = '';
    isValid : boolean = true;
   
    validate(){
      if(this.username == "" || this.password==""){
        this.isValid = true;
      }
      else{
        this.isValid = false;
      }
    }
    ngOnInit(): void {
      
    }
    
  }