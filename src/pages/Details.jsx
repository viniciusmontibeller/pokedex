import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { getPokemon } from "../services/getPokemon"
import { getPokemonAbility } from '../services/getPokemonAbility'
// import { getPokemonEvolution } from "../services/getPokemonEvolutions"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { PokemonDetail } from "../components/PokemonDetail"
import { Button } from '../pages/styles'
import { Main } from './styles'
import { Loading } from "../components/Loading"
// import seta from '../assets/seta.png'

const Details = () => {
   const [pokemon, setPokemon] = useState({
      details: '',
      abilities: []
   })
   const [loading, setLoading] = useState(true)

   const { name } = useParams()

   useEffect(() => {
      const fetchData = async () => {
         const pokemonDetail = await getPokemon(name)
         const pokemonAbilities = await Promise.all(pokemonDetail.abilities.map(async (ability) => {
            return await getPokemonAbility(ability.ability.name)
         }))
         // const pokemonEvolutions = await getPokemonEvolution(pokemonDetail.id)
         // console.log(pokemonEvolutions)
         setPokemon({
            details: pokemonDetail,
            abilities: pokemonAbilities
         })
         setLoading(false)
      }
      fetchData()
   }, [])

    return ( 
       <>
        <Header/>
        
        <Main details>
         {/* <Link to={`/details/${pokemon.id - 1}`}></Link>
         <Link to={`/details/${pokemon.id + 1}`}></Link> */}
         {loading ? <Loading/> : <><PokemonDetail 
               name={pokemon.details.name}
               id={pokemon.details.id}
               image={pokemon.details.sprites?.other["official-artwork"].front_default}
               types={pokemon.details.types}
               abilities={pokemon.abilities}
               moves={pokemon.details.moves}
            />
            <Link to='/'><Button >Back</Button></Link>
            </>
         }
        </Main>
       </>
    )
   }

export { Details }