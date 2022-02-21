import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  employees=[
    {"id":101,"name":"Shyam", "designation":"ASE"},
    {"id":102,"name":"Shyam", "designation":"ASE"},
    {"id":103,"name":"Shyam", "designation":"ASE"},
    {"id":104,"name":"Shyam", "designation":"ASE"},
    {"id":105,"name":"Shyam", "designation":"ASE"}
  ]
  getEmployees(){
    return this.employees
  }
  constructor() { }
}
