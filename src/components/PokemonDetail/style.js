import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
`

const DetailContainer = styled.div`
    background-color: ${props => props.theme.defaultValues.transparentBackground};
    box-shadow: ${props => props.theme.defaultValues.darkGlassShadow};
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    padding: 30px;
    border-radius: 20px;
    display: flex;
    max-width: 1000px;
    gap: 20px;
    letter-spacing: 1px;
    color: ${props => props.theme.theme.color};

    h1, h2, h3{
        text-transform: capitalize;
    }

    h2 {
        margin-bottom: 15px;
    }

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }

    @media(min-width: 500px){
        gap: 50px;
    }
`

const Name = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    box-shadow: ${props => props.theme.defaultValues.glassShadow};
    border-radius: 10px;
    padding: 5px 10px;
    p{
        font-weight: 500;
        font-size: 25px;
        opacity: 0.7;
    }

    @media(max-width: 500px){
        h1, p {
            font-size: 20px;
        }
    }
`

const Moves = styled.ul`
      padding: 15px 10px;
      max-height: 200px;
      overflow-y: scroll;
      max-width: 400px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      border-radius: 10px;
      box-shadow: hsla(211, 76%, 52%, 0.3) 3px 3px 6px 0px inset, hsla(211, 76%, 70%, 0.3) -3px -3px 6px 1px inset;
    
    ::-webkit-scrollbar {
    width: 8px;
    }

    ::-webkit-scrollbar-track {
    box-shadow: hsla(211, 76%, 52%, 0.3) 3px 3px 1px 0px inset, hsla(211, 76%, 70%, 0.3) -3px -3px 1px 1px inset;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.pokemonTypeColor[props.colorType]};
    border-radius: 10px;
    }

      li {
        padding: 5px 20px;
        background-color: ${props => props.theme.pokemonTypeColor[props.colorType]};
        font-weight: 500;
        border-radius: 40px;
      }
   `
const Ability = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;

    li{
        border-radius: 5px;
        box-shadow: hsla(211, 76%, 52%, 0.3) 3px 3px 6px 0px inset, hsla(211, 76%, 70%, 0.3) -3px -3px 6px 1px inset; 
        
        h3, p {
        padding: 2px 10px;
        }

        p{
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
        }

        h3{
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        box-shadow: ${props => props.theme.defaultValues.shadow};
        }
    }
`

const Info= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 450px;
    flex: 1;
    img{
        padding: 40px;
        max-width: 100%;
        filter: drop-shadow( 0px 0px 10px white);
    }
`

const Description = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 20px;
    max-width: 400px;
    justify-content: center;
    @media(max-width: 500px){
        h2{
            font-size: 1.3rem;
        }
        h3{
            font-size: 1rem;
        }
        p,li{
            font-size: 0.8rem;
        }
        
    }
`

const AbilitiesContainer = styled.div`
    max-width: 400px;
    h2{
        text-align: center;
    }
`

const MovesContainer = styled.div`
    h2{
        text-align: center;
    }
`

export { Container, DetailContainer, Moves, Ability, Info, Description, MovesContainer, Name, AbilitiesContainer }