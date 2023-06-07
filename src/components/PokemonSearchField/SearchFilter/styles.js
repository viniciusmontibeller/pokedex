import styled from "styled-components"

const Search = styled.div`
    box-shadow: ${props => props.theme.defaultValues.glassShadow};
    color: ${props => props.theme.theme.color};
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 18px;
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    transition: ${props => props.theme.defaultValues.transition};

    input {
        outline: none;
        font-size: inherit;
        color: ${props => props.theme.theme.color};
        border: none;
        background-color: transparent;
    }

    :hover,
    :focus{
        box-shadow: ${props => props.theme.defaultValues.darkGlassShadow};
    }
    
`

export { Search }