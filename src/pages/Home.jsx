import { Header } from "../components/Header"
import { useEffect, useState } from "react";
import { Main } from '../components/Containers'
import { getPokemonsList } from "../services/getPokemonsList";
import { getPokemon } from "../services/getPokemon";
import { PokemonsList } from "../components/PokemonsList/PokemonList";
import { PokemonSearchField } from "../components/PokemonSearchField";

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [type, setType] = useState('')
    const [listQuantity, setListQuantity] = useState(10)

    useEffect(() => {
        const getPokemonsData = async () => {
            const data = await getPokemonsList(listQuantity)
            const pokemonDetails = await Promise.all(data.map(async (pokemon) => {
                return await getPokemon(pokemon.name)
            }))
            setPokemons(pokemonDetails)
            setLoading(false)
        }
        getPokemonsData()
    }, [listQuantity])

    const pokemonFilter = (pokemons) => {
        return pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        }).filter(pokemon => {
            return pokemon.types[0].type.name.includes(type) || pokemon.types[1]?.type.name.includes(type)
        })
    }

    const handleClick = () => {
        setListQuantity(prev => prev + 10)
    }

    const handleReset = () => {
        setSearchValue('')
        setType('')
    }

    return (
        <>
            <Header handleReset={handleReset} />
            <Main>
                <PokemonSearchField
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    type={type}
                    setType={setType}
                />
                <PokemonsList
                    loading={loading}
                    pokemons={pokemons}
                    pokemonFilter={pokemonFilter}
                    handleClick={handleClick}
                />
            </Main>
        </>
    )
}

export { Home }