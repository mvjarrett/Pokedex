import { Component, OnInit } from '@angular/core';
import { BaseCallService } from 'src/app/base-call.service';
import { FilterService } from 'src/app/filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pkmndata: any;
  apiUrl: any;

  constructor(
    private baseCall: BaseCallService,
    private filter: FilterService
  ) {}

  ngOnInit(): void {}

  genone() {
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
    this.filter.setUrl(this.apiUrl)
    this.baseCall.getMons(this.apiUrl).subscribe((data: any) => {
      if (data) this.pkmndata = data.results;
    });
  }
  gentwo() {
    this.apiUrl =
      'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100';
      this.filter.setUrl(this.apiUrl)
    this.baseCall.getMons(this.apiUrl).subscribe((data: any) => {
      if (data) this.pkmndata = data.results;
    });
  }
}
