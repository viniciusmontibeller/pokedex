import { Header} from "../components/Header"
import { useEffect, useState } from "react";
import { List, Button, ListContainer, Main, Filter, NotFound, Search, Select, CustomSelect, SelectArrow } from './styles'
import { getPokemonsList } from "../services/getPokemonsList";
import { getPokemon } from "../services/getPokemon";
import { PokemonCard } from "../components/PokemonCards/PokemonCards";
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { Loading } from "../components/Loading";

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [queryType, setQueryType] = useState('')
    const [listQuantity, setListQuantity] = useState(10)

    useEffect(() => {
        getPokemonsData()
    }, [listQuantity])

    const getPokemonsData = async () => {
        const data = await getPokemonsList(listQuantity)
        const pokemonDetails = await Promise.all(data.map(async (pokemon) => {
            return await getPokemon(pokemon.name)
        }))
        setPokemons(
            pokemonDetails
        )
        setLoading(false)
    }

    // const pokemonFilter = (name) => {
    //     let filtetredPokemons = []
    //     if(name===""){
    //         getPokemonsData()
    //     }
    //     pokemons.filter(pokemon => {
    //         if(pokemon.name.includes(name.toLowerCase())){
    //             filtetredPokemons = [...filtetredPokemons, pokemon]
    //         }
    //     })
    //     setPokemons(filtetredPokemons)
    // }

    // const pokemonFilter = (query, type) => {
    //     const filteredPokemons = pokemons.filter(pokemon => {
    //         return pokemon.name.toLowerCase().includes(query?.toLowerCase())}).filter(pokemon => {
    //         return pokemon.types[0].type.name.includes(type) || pokemon.types[1]?.type.name.includes(type)
    //     })
    //     return filteredPokemons
    // }

    // const newPokemons = pokemonFilter()
    
    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(query.toLowerCase())
        }).filter(pokemon => {
        return pokemon.types[0].type.name.includes(queryType) || pokemon.types[1]?.type.name.includes(queryType)
        })

    // const filteredPokemons2 = filteredPokemons.filter(pokemon => {
    //     return pokemon.types[0].type.name.includes(queryType) || pokemon.types[1]?.type.name.includes(queryType)
    //     })


    const handleClick = () => {
        setListQuantity(listQuantity + 10)
    }

    // const pokemonTypeFilter = (type) => {
    //     let filtetredPokemons = []
    //     if(type === ""){
    //         getPokemonsData()
    //     }
    //     {   
    //         pokemons.filter((pokemon) => {
    //             pokemon.types.map(item => {
    //                 if(item.type.name === type){
    //                     filtetredPokemons = [...filtetredPokemons, pokemon]
    //                 }
    //             })
    //             setPokemons(filtetredPokemons)
    //         })
    //     }
    // }

    return (
        <>
            <Header />
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
                <option value="fire">fire</option>
                <option value="grass">grass</option>
                <option value="electric">electric</option>
                <option value="water">water</option>
                <option value="ground">ground</option>
                <option value="rock">rock</option>
                <option value="fairy">fairy</option>
                <option value="poison">poison</option>
                <option value="bug">bug</option>
                <option value="dragon">dragon</option>
                <option value="psychic">psychic</option>
                <option value="flying">flying</option>
                <option value="fighting">fighting</option>
                <option value="normal">normal</option>
                <option value="ice">ice</option>
                <option value="ghost">ghost</option>
                <option value="dark">dark</option>
                <option value="steel">steel</option>
            </Select>
                <SelectArrow />
            </CustomSelect>
            </Filter>
            <ListContainer >
                {loading ? <Loading/> : 
                <> 
                    <List>
                    {filteredPokemons.length > 0 ?
                    filteredPokemons.map((pokemon, index) => {
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