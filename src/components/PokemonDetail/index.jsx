import { DetailContainer, Moves, Ability, Info, Description, MovesContainer, Name, AbilitiesContainer } from './style'
import { Types, Type } from '../Types'


const PokemonDetail = ({ name, id, image, types, abilities, moves }) => {

   return (
      <DetailContainer>
         <Info colorType={types?.[0].type.name}>
            <Name>
               <h1>{name}</h1>
               <p># {id}</p>
            </Name>
            <img src={image} alt={name} />
            <Types>
               {
                  types?.map((type, index) => {
                     return <Type key={index} biggerType type={type.type.name}>
                        {type.type.name}
                     </Type>
                  })
               }
            </Types>
         </Info>
         <Description>
            <AbilitiesContainer>
               <h2>Abilities</h2>
               <Ability colorType={types?.[0].type.name}>
                  {
                     abilities.map((ability, index) => {
                        return (<li key={index}>
                           <h3>{ability.name}</h3>
                           {ability.effect_entries.map((effect, index) => {
                              if (effect.language.name.includes("en")) {
                                 return <p key={index}>{effect.short_effect}</p>
                              }
                           })}
                        </li>
                        )
                     })
                  }
               </Ability>
            </AbilitiesContainer>
            <MovesContainer>
               <h2>Moves</h2>
               <Moves colorType={types?.[0].type.name}>
                  {
                     moves?.map((move, index) => {
                        return <li key={index}>{move.move.name}</li>
                     })
                  }
               </Moves>
            </MovesContainer>
         </Description>
      </DetailContainer>
   )
}

export { PokemonDetail }