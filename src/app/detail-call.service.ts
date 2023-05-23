import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Details } from './models/details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DetailCallService {
 getDetails(data: string){
  return this.http.get(data)
  
 }
 getFlavor(data: string){
  return this.http.get(data)
 }
  constructor(private http: HttpClient) { }
}
