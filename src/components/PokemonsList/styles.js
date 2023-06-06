import styled from "styled-components"

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

const NotFound = styled.h3`
    color: ${props => props.theme.theme.color};
`

export { ListContainer, List, NotFound}