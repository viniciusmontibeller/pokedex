import { BiSearch } from 'react-icons/bi'
import { Search } from './styles'

const SearchFilter = ({ query, setQuery }) => {
    return (
        <Search>
            <input value={query}
                onChange={(event) => setQuery(event.target.value)} 
                type='search' 
                placeholder="Search Pokemon"/>
                <BiSearch/>
        </Search>
    )
}

export { SearchFilter }