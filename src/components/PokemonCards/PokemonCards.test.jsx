import { PokemonCard } from "./PokemonCards";
import { render } from "@testing-library/react";
import { Theme } from "../../global/Theme";

describe('Pokemon Card component', () => {
    const pokemonFake = {
        id: '6',
        name: 'charizard',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        types:
            [
                {
                    "slot": 1,
                    "type": {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        
    }
    it('should render a pokemon card with info', () => {
        const {asFragment} = render(<Theme><PokemonCard {...pokemonFake}/></Theme>)
        expect(asFragment).toMatchSnapshot()
    })
})