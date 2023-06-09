import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Search } from './styles'

const SearchFilter = ({ searchValue, setSearchValue, ...rest }) => {
    return (
        <Search>
            <input
                {...rest}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                type='search'
            />
            <BiSearch />
        </Search>
    )
}

export { SearchFilter }