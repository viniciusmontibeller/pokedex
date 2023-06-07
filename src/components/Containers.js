import styled from 'styled-components'
import { css } from 'styled-components'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 93vh;
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

const Caroussel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-width: 1100px;
`

const ButtonsField = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    justify-content: space-around;
    align-items: center;
    padding-inline: 10px;
`

export { Main, Caroussel, ButtonsField }