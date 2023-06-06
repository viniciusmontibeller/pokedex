import { SearchFilter } from "./SearchFilter"
import { TypeFilter } from "./TypeFilter"
import { Filter } from './styles'

const SearchField = ({ query, queryType, setQuery, setQueryType }) => {
    return (
        <Filter>
            <SearchFilter 
                query={query}
                setQuery={setQuery}
                />
            <TypeFilter  
                queryType={queryType}
                setQueryType={setQueryType}
                />
        </Filter>
    )
}

export { SearchField }