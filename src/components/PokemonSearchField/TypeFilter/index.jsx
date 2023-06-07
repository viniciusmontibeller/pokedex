import { CustomSelect, Select, SelectArrow } from "./styles"

const TypeFilter = (props) => {
    return (
        <CustomSelect>
            <Select
                {...props} 
                value={props.type} 
                onChange={(event) => props.setType(event.target.value)} >
                {props.children}
            </Select>
            <SelectArrow />
        </CustomSelect>
    )
}

export { TypeFilter }