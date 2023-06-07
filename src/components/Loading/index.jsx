import pokeball from '../../assets/pokeball.png'
import { Loader } from './styles'

const Loading = () => {
    return (
        <Loader>
            <img src={pokeball} alt='pokeball'/>
            <h2>Loading...</h2>
        </Loader>
    )
}

export { Loading }