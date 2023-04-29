import { Card } from './syles'

const PokemonCard = ({ name, image, types, id }) => {
    return (
        <Card>
            <img src={image} />
            <p># {id}</p>
            <p>{name}</p>
            {types.map((item, index) => {
                return <span key={index}>{item.type.name}</span>
            }
            )}
        </Card>
    )
}

export { PokemonCard }