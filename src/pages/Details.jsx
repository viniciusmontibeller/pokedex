import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { getPokemonById } from "../services/getPokemonById.JS"
import { getPokemonAbility } from '../services/getPokemonAbility'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { PokemonDetail } from "../components/PokemonDetail"
import { Button } from '../components/Button'
import { Main, Caroussel } from '../components/Containers'
import { Loading } from "../components/Loading"
import seta from '../assets/seta.png'
import { ButtonsField } from "../components/Containers"

const Details = () => {
   const [pokemon, setPokemon] = useState({
      details: '',
      abilities: []
   })
   const [loading, setLoading] = useState(true)

   const { id } = useParams()

   useEffect(() => {
      const fetchData = async () => {
         const pokemonDetail = await getPokemonById(id)
         const pokemonAbilities = await Promise.all(pokemonDetail.abilities.map(async (ability) => {
            return await getPokemonAbility(ability.ability.name)
         }))
         setPokemon({
            details: pokemonDetail,
            abilities: pokemonAbilities
         })
         setLoading(false)
      }
      fetchData()
   }, [id])

    return ( 
       <>
        <Header/>
         <Main details>
            {loading ? <Loading/> : 
            <>
            <Caroussel>
               <PokemonDetail 
                  name={pokemon.details.name}
                  id={pokemon.details.id}
                  image={pokemon.details.sprites?.other["official-artwork"].front_default}
                  types={pokemon.details.types}
                  abilities={pokemon.abilities}
                  moves={pokemon.details.moves}
               />
            <ButtonsField>
               <Button prev arrow disabled={id == 1}>
                  <Link to={`/details/${pokemon.details.id - 1}`}>
                     <img src={seta} alt="previous"/>
                  </Link>
               </Button> 
               <Link to='/'>
                  <Button default>Back to pokédex</Button>
               </Link>
               <Button next arrow disabled={id == 1118}>
                  <Link to={`/details/${pokemon.details.id + 1}`}>
                     <img src={seta} alt="next"/>
                  </Link>
               </Button>
            </ButtonsField>
            </Caroussel>
            </>
            }
        </Main>
       </>
    )
   }

export { Details }