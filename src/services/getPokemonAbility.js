async function getPokemonAbility (name) {
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${name}`)
    const dataApi = await response.json()
    return dataApi;
}

export { getPokemonAbility }