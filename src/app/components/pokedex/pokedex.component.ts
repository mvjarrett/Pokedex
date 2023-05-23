import { Component, OnInit } from '@angular/core';
import { BaseCallService } from 'src/app/base-call.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

 pkmndata: Pokemon[] = []
  constructor(private baseCall: BaseCallService) { }
 
  ngOnInit(): void {
    this.baseCall.getMons().subscribe((data: any) =>{
      this.pkmndata = data.results 
    })
  }

}
