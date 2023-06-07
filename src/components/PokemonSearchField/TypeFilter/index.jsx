import React from "react"
import { CustomSelect, Select, SelectArrow } from "./styles"

const TypeFilter = ({children, type, setType, ...rest}) => {
    return (
        <CustomSelect>
            <Select
                {...rest}
                value={type}
                onChange={(event) => setType(event.target.value)} >
                {children}
            </Select>
            <SelectArrow />
        </CustomSelect>
    )
}

export { TypeFilter }