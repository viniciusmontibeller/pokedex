import { Types, Type } from '../Types'
import { Card, Img, Id, Name } from './styles'

const PokemonCard = ({ name, image, types, id }) => {

    return (
        <Card colorType={types[0].type.name}>
            <Id># {id}</Id>
            <Img src={image} alt={name} />
            <Name>{name}</Name>
            <Types>
                {types.map((type, index) => {
                    return <Type
                        type={type.type.name}
                        key={index}>
                        {type.type.name}
                    </Type>
                }
                )}
            </Types>
        </Card>
    )
}

export { PokemonCard }