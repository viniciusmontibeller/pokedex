import { fireEvent, render, screen } from "@testing-library/react";
import { PokemonsList } from "./PokemonList";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "../../global/Theme";

const mockPokemon = {
    id: '6',
    name: 'charizard',
    sprites: {
        other: {
            "official-artwork": {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
            }
        }
    },
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

let mockArray = []
for(let i = 1; i <= 10; i++){
    mockArray = [...mockArray, mockPokemon]
}

const mockHandleClick = jest.fn(()=>{
    for(let i = 1; i <= 10; i++){
        mockArray = [...mockArray, mockPokemon]
    }
    return mockArray;
})

const mockFunction = jest.fn(x => x)

it("should render a list of 10 cards", () => {
    render(<BrowserRouter>
        <Theme>
            <PokemonsList pokemonFilter={mockFunction} pokemons={mockArray}/>
        </Theme>
    </BrowserRouter>)
    expect(mockArray.length).toBe(10)
})

it("should increase list quantity by 10 when clicking on load more", () => {
    render(<BrowserRouter>
        <Theme>
            <PokemonsList pokemonFilter={mockFunction} pokemons={mockArray} handleClick={mockHandleClick}/>
        </Theme>
    </BrowserRouter>)
    expect(mockArray.length).toBe(10)
    fireEvent.click(screen.getByRole("button"))
    expect(mockArray.length).toBe(20)
})

