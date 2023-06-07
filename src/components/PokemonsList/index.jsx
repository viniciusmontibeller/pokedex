import { Loading } from "../Loading";
import { PokemonCard } from "../PokemonCards/PokemonCards";
import { Button } from "../Button";
import { ListContainer, List, NotFound } from "./styles"
import { Link } from "react-router-dom";

const PokemonsList = ({ loading, pokemons, pokemonFilter, handleClick }) => {

    return (
        <ListContainer >
                {loading ? <Loading/> : 
                <> 
                    <List>
                    {pokemonFilter(pokemons).length > 0 ?
                    pokemonFilter(pokemons).map((pokemon, index) => {
                        return (
                            <Link key={index} to={`/details/${pokemon.id}`}>
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
                <Button default onClick={handleClick}>Load More</Button>
                </>}
            </ListContainer>
    )
}

export { PokemonsList }