import { Component, OnInit, Input } from '@angular/core';
import { BaseCallService } from 'src/app/base-call.service';
import { FilterService } from 'src/app/filter.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {

  pkmndata: Pokemon[] = [];

  constructor(
    private baseCall: BaseCallService,
    private filter: FilterService
  ) {}

  ngOnInit(): void {
    this.filter.apiUrl.subscribe((data) => {
      this.baseCall.getMons(data).subscribe((apiData: any) => {
        if (apiData) this.pkmndata = apiData.results;
      });
    });
  }
}
