import pokeball from '../../assets/pokeball.png'
import styled from 'styled-components'

const Loading = () => {
    return (
        <Load>
            <img src={pokeball} alt='pokeball'/>
            <h2>Loading...</h2>
        </Load>
    )
}

const Load = styled.div`
    img{
        height: 30px;
        animation: rotation 3s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }

    display: flex;
    align-items: center;
    gap: 20px;

    h2{
        color: ${props => props.theme.theme.color}
    }
`

export { Loading }