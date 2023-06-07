import { SearchFilter } from "./SearchFilter"
import { TypeFilter } from "./TypeFilter"
import { Filter } from './styles'

const pokemonTypeList = ['fire', 'grass', 'electric', 'water', 'ground', 'rock', 'fairy', 'poison', 'bug', 'dragon', 'psychic', 'flying', 'fighting', 'normal', 'ice', 'ghost', 'dark', 'steel']

const SearchField = ({ query, queryType, setQuery, setQueryType }) => {
    return (
        <Filter>
            <SearchFilter 
                query={query}
                setQuery={setQuery}
                placeholder="Search Pokemon"
                />
            <TypeFilter  
                queryType={queryType}
                setQueryType={setQueryType}>
                <option value=''>Type</option>
                {pokemonTypeList.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </TypeFilter>
        </Filter>
    )
}

export { SearchField }