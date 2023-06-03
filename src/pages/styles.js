import styled from 'styled-components'
import { css } from 'styled-components'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    gap: 50px;
    padding: 50px 15px;
    ${props => props.details && css`
        justify-content: center;
        padding-block: 30px;
    `}

    @media(max-width: 500px){
        gap: 30px;
        padding-inline: 0;
        padding-block: 30px;
    }
`

const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;

    @media(max-width: 629px){
        max-width: 300px;
    }
`

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

const Select = styled.select`
    border: none;
    font-family: ${props => props.theme.defaultValues.fontFamily};
    font-size: 14px;
    background-color: ${props => props.theme.defaultValues.transparentBackground};
    box-shadow: ${props => props.theme.defaultValues.shadow};
    padding: 0.7em 2.3em 0.7em 1em;
    border-radius: 10px;
    cursor: pointer;
    color: ${props => props.theme.theme.color};
    transition: ${props => props.theme.defaultValues.transition};
    outline: none;
    box-shadow: ${props => props.theme.defaultValues.glassShadow};

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    option{
        background-color: ${props => props.theme.theme.backgroundColor};
    }

    :hover,
    :focus{
        box-shadow: ${props => props.theme.defaultValues.darkGlassShadow};
    }
`

const CustomSelect = styled.div`
    position: relative;
`

const SelectArrow = styled.span`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-80%, -50%);
    display: block;
    pointer-events: none;
    border-left: 0.55rem solid transparent;
    border-right: 0.55rem solid transparent;
    border-top: ${props => `0.55rem solid ${props.theme.theme.color}`};
    
`

const ListContainer = styled.div`
    max-width: 1400px;
    text-align: center;
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    border-radius: 15px;
    margin-bottom: 50px;
    @media(max-width: 500px){
        margin-bottom: 30px;
    }
`

const Button = styled.button`
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.defaultValues.transparentBackground};
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    border-radius: 10px;
    width: 280px;
    color: ${props => props.theme.theme.color};
    font-family: ${props => props.theme.defaultValues.fontFamily};
    font-size: 20px;
    font-weight: 500;
    transition: ${props => props.theme.defaultValues.transition};
    box-shadow: ${props => props.theme.defaultValues.glassShadow};

    :hover{
        scale: 1.1;
        backdrop-filter: none;
        background-color: rgba(255, 255, 255, 0.4);
    }
`
const NotFound = styled.h3`
    color: ${props => props.theme.theme.color};
`

export { List, Button, ListContainer, Main, Filter, NotFound, CustomSelect, SelectArrow,  Search, Select,}