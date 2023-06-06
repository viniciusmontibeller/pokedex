import { CustomSelect, Select, SelectArrow } from "./styles"

const pokemonTypeList = ['fire', 'grass', 'electric', 'water', 'ground', 'rock', 'fairy', 'poison', 'bug', 'dragon', 'psychic', 'flying', 'fighting', 'normal', 'ice', 'ghost', 'dark', 'steel']

const TypeFilter = ({ queryType, setQueryType }) => {
    return (
        <CustomSelect>
            <Select value={queryType} onChange={(event) => setQueryType(event.target.value)} >
                <option value=''>Type</option>
                {pokemonTypeList.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </Select>
                <SelectArrow />
        </CustomSelect>
    )
}

export { TypeFilter }