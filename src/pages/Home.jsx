import { Navbar } from "../components/Navbar"
import { useEffect, useState } from "react";
import { List } from './styles'
import { getPokemonsList } from "../services/getPokemonsList";
import { getPokemon } from "../services/getPokemon";
import { PokemonCard } from "../components/PokemonCard";

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    // const [listQuantity, setListQuantity] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemonsList()
            const pokemonDetails = await Promise.all(data.map(async (pokemon) => {
                return await getPokemon(pokemon.name)
            }))
            console.log(pokemonDetails)
            setPokemons(
                pokemonDetails
            )
        }
        fetchData()
    }, [])

    const handleClick = () => {
        
    }

    const pokemonFilter = (name) => {
        let filtetredPokemons = []
        if(name===""){
            getPokemonsList()
        }
        console.log(name)
        pokemons.map((pokemon => {
            if(pokemon.name.includes(name)){
                filtetredPokemons = [...filtetredPokemons, pokemon]
            }
        }))
        setPokemons(filtetredPokemons)
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter}/>
            <div style={{textAlign: "center"}}>
                <List>
                {
                    pokemons.map((pokemon, index) => {
                        return (
                            <PokemonCard
                                key={index}
                                id={pokemon.id}
                                image={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
                                types={pokemon.types}
                                name={pokemon.name} />
                        )
                    })
                }
                </List>
                <button onClick={handleClick}>Carregar mais</button>
            </div>
        </div>
    )
}

export { Home }