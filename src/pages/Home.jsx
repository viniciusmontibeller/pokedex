import { Header} from "../components/Header"
import { useEffect, useState } from "react";
import { List, Button, ListContainer, Main, Filter, NotFound, Search, Select, CustomSelect, SelectArrow } from './styles'
import { getPokemonsList } from "../services/getPokemonsList";
import { getPokemon } from "../services/getPokemon";
import { PokemonCard } from "../components/PokemonCards/PokemonCards";
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { Loading } from "../components/Loading";

const pokemonArray = ['fire', 'grass', 'electric', 'water', 'ground', 'rock', 'fairy', 'poison', 'bug', 'dragon', 'psychic', 'flying', 'fighting', 'normal', 'ice', 'ghost', 'dark', 'steel']

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
            <Filter>
            <Search>
            <input value={query}
                onChange={(event) => setQuery(event.target.value)} 
                type='search' 
                placeholder="Search Pokemon"/>
                <BiSearch/>
            </Search>
            <CustomSelect>
            <Select value={queryType} onChange={(event) => setQueryType(event.target.value)} >
                <option value=''>Type</option>
                {pokemonArray.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </Select>
                <SelectArrow />
            </CustomSelect>
            </Filter>
            <ListContainer >
                {loading ? <Loading/> : 
                <> 
                    <List>
                    {pokemonFilter(pokemons).length > 0 ?
                    pokemonFilter(pokemons).map((pokemon, index) => {
                        return (
                            <Link key={index} to={`/details/${pokemon.name}`}>
                                <PokemonCard
                                    id={pokemon.id}
                                    image={pokemon.sprites.other["official-artwork"].front_default}
                                    types={pokemon.types}
                                    name={pokemon.name} />
                            </Link>
                        )
                    }) : <NotFound>Pokemon not found</NotFound>
                }
                </List> 
                <Button onClick={handleClick}>Load More</Button>
                </>}
            </ListContainer>
            </Main>
        </>
    )
}

export { Home }