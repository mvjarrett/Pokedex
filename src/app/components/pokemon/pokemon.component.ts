import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DetailCallService } from 'src/app/detail-call.service';
import { SpeciesDetails } from 'src/app/models/speciesDetails';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PokemonComponent implements OnInit {
  @Input() dex: any;
  @Input() dexUrl: any;

  state = 'collapsed';
  pokemon: Pokemon;
  speciesData: SpeciesDetails;
  speciesUrl = '';
  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }
  constructor(private detail: DetailCallService) {}

  ngOnInit(): void {
    this.detail.getDetails(this.dexUrl).subscribe((data: any) => {
      if (data) {
        this.pokemon = data;
        console.log(this.pokemon.types);
        this.detail.getFlavor(data.species.url).subscribe((species: any) => {
          if (species) {
            this.speciesData = species;
          }
        });
      }
    });
  }
  getFlavorLang() {
    const result = this.speciesData.flavor_text_entries.find((flavorText) => {
      return flavorText.language.name === 'en';
    });
    return result?.flavor_text.replace('\f', ' ');
  }
}
