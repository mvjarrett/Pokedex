import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterUrl = new BehaviorSubject('https://pokeapi.co/api/v2/pokemon?limit=20')
  apiUrl = this.filterUrl.asObservable()


  constructor() { }

  setUrl(apiUrl: any) {
    console.log('set fired')
    this.filterUrl.next(apiUrl)
  }

}
