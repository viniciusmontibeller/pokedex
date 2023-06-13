import { PokemonDetail } from "./PokemonDetail";
import { render } from "@testing-library/react";
import { Theme } from "../../global/Theme";

describe("Pokemon detail component", () => {
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
            ],
        abilities: [{
            effect_entries:
                [
                    {
                        "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine fire Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                        "language": {
                            "name": "de",
                            "url": "https://pokeapi.co/api/v2/language/6/"
                        },
                        "short_effect": "Erhöht den Schaden von fire Attacken um 50% wenn nur noch 1/3 der maximalen hp oder weniger übrig sind."
                    },
                    {
                        "effect": "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
                        "language": {
                            "name": "en",
                            "url": "https://pokeapi.co/api/v2/language/9/"
                        },
                        "short_effect": "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less."
                    }
                ]
        },
        {
            effect_entries:
                [
                    {
                        "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine fire Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                        "language": {
                            "name": "de",
                            "url": "https://pokeapi.co/api/v2/language/6/"
                        },
                        "short_effect": "Erhöht den Schaden von fire Attacken um 50% wenn nur noch 1/3 der maximalen hp oder weniger übrig sind."
                    },
                    {
                        "effect": "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
                        "language": {
                            "name": "en",
                            "url": "https://pokeapi.co/api/v2/language/9/"
                        },
                        "short_effect": "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less."
                    }
                ]
        }
        ],
        moves: [
            {
                move: {
                    name: "mega-punch"
                }
            },
            {
                move: {
                    name: "mega-punch"
                }
            },
            {
                move: {
                    name: "mega-punch"
                }
            },
            {
                move: {
                    name: "mega-punch"
                }
            },
            {
                move: {
                    name: "mega-punch"
                }
            }
        ]

    }
    it("should render a pokemon's details", () => {
        const {asFragment} = render(<Theme><PokemonDetail {...pokemonFake} /></Theme>)
        expect(asFragment).toMatchSnapshot()
    })
})
