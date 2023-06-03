import { PokemonCard } from "./PokemonCards";
import { render } from "@testing-library/react";

describe('Pokemon Card component', () => {
    const pokemonFake = {
        id: '3',
        name: 'charmander',
        image: '',
        types: ["fire", "flying"],
    }
    it('should render a pokemon card with info', () => {
        render(<PokemonCard/>)
    })
})