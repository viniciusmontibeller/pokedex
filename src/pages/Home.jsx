import { Header} from "../components/Header"
import { useEffect, useState } from "react";
import { Main } from '../components/Main'
import { getPokemonsList } from "../services/getPokemonsList";
import { getPokemon } from "../services/getPokemon";
import { PokemonsList } from "../components/PokemonsList";
import { SearchField } from "../components/SearchField";

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [queryType, setQueryType] = useState('')
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
            return pokemon.name.toLowerCase().includes(query.toLowerCase())
            }).filter(pokemon => {
            return pokemon.types[0].type.name.includes(queryType) || pokemon.types[1]?.type.name.includes(queryType)
            })
    }

    const handleClick = () => {
        setListQuantity(prev => prev + 10)
    }

    const handleReset = () => {
        setQuery('')
        setQueryType('')
    }

    return (
        <>
            <Header handleReset={handleReset}/>
            <Main>
            <SearchField 
                query={query}
                setQuery={setQuery}
                queryType={queryType}
                setQueryType={setQueryType}
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