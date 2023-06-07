import { SearchFilter } from "./SearchFilter"
import { TypeFilter } from "./TypeFilter"
import { Filters } from './styles'

const pokemonTypeList = ['fire', 'grass', 'electric', 'water', 'ground', 'rock', 'fairy', 'poison', 'bug', 'dragon', 'psychic', 'flying', 'fighting', 'normal', 'ice', 'ghost', 'dark', 'steel']

const PokemonSearchField = ({ searchValue, type, setSearchValue, setType }) => {
    return (
        <Filters>
            <SearchFilter 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                placeholder="Search Pokemon"
                />
            <TypeFilter  
                type={type}
                setType={setType}>
                <option value=''>Type</option>
                {pokemonTypeList.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </TypeFilter>
        </Filters>
    )
}

export { PokemonSearchField }