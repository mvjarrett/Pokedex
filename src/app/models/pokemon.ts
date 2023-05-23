import { PokemonType } from "./pokemonType"
import { sprite } from "./sprite"

export interface Pokemon {
 name: string
 url: string
 sprites: sprite
 types: PokemonType[]
}
