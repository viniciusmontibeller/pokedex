import styled from 'styled-components'
import { css } from 'styled-components'

const Types = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

const Type = styled.span`
    padding: 3px;
    border-radius: 140px;
    text-align: center;
    display: inline-block;
    width: 100px;
    background-color: ${props => props.theme.pokemonTypeColor[props.type]};
    box-shadow: ${props => props.theme.defaultValues.shadow};
    ${props => props.biggerType && css `
        @media(min-width: 500px){
        width: 8em;
        padding: 6px;
        font-size: 1.2em;
        }
    `}
`

export { Types, Type }