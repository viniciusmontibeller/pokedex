import styled from "styled-components";

const Head = styled.header`
    background-color: ${props => props.theme.defaultValues.transparentBackground};
    box-shadow: ${props => props.theme.defaultValues.darkGlassShadow};
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin-inline: 30px;

    img{
        max-height: 60px;
    }
`

export { Head, Container}