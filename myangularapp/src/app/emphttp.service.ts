import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmphttpService {
private url:string="/assets/data/employees.json"
  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get<any>(this.url);

  }
}
