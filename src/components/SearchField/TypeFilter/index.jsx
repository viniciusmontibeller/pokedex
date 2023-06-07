import { CustomSelect, Select, SelectArrow } from "./styles"

const TypeFilter = (props) => {
    return (
        <CustomSelect>
            <Select
                {...props} 
                value={props.queryType} 
                onChange={(event) => props.setQueryType(event.target.value)} >
                {props.children}
            </Select>
            <SelectArrow />
        </CustomSelect>
    )
}

export { TypeFilter }