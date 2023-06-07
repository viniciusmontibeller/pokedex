import { BiSearch } from 'react-icons/bi'
import { Search } from './styles'

const SearchFilter = (props) => {
    return (
        <Search>
            <input 
                {...props}
                value={props.searchValue}
                onChange={(event) => props.setSearchValue(event.target.value)} 
                type='search' 
                />
            <BiSearch/>
        </Search>
    )
}

export { SearchFilter }