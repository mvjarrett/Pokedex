import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BaseCallService {

  constructor(private http: HttpClient) { }
  getMons(apiUrl: string){
    return this.http.get(apiUrl)
   }
}
