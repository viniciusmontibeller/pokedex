import styled from "styled-components"

const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;

    @media(max-width: 629px){
        max-width: 300px;
    }
`

export { Filter }