import styled from 'styled-components'

const Card = styled.li`
    background-color: ${props => { props.theme.defaultValues.transparentBackground}};
    position: relative;
    box-shadow: ${props => props.theme.defaultValues.darkGlassShadow};
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    width: 280px;
    color: ${props => props.theme.theme.color};
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    transition: ${props => props.theme.defaultValues.transition};
    letter-spacing: 1px;

    img{
        filter: drop-shadow(0px 0px 10px white);
        transition: ${props => props.theme.defaultValues.transition};
    }

    ::after{
        content: '';
        position: absolute;
        height: 80%;
        width: 100%;
        border-radius: inherit;
        z-index: -1;
        inset: 0;
        background-color: ${props => props.theme.pokemonTypeColor[props.colorType]};
        box-shadow: ${props => props.theme.defaultValues.shadow};
        opacity: 0.6;
        transition: ${props => props.theme.defaultValues.transition};
    }

    :hover{
        opacity: 1;
        backdrop-filter: none;
        scale: 1.08;
        ::after{
            opacity: 0.9;
        }
        img{
        filter: drop-shadow(0px 0px 15px white);
        }
    }
`

const Name = styled.p`
    text-transform: capitalize;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 25px;
`

const Id = styled.p`
    text-align: left;
    border-radius: 50%;
`

const Img = styled.img`
    height: 150px;
    margin-bottom: 10px;
`

export { Card, Name, Id, Img }