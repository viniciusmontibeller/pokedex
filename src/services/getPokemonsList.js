async function getPokemonsList (quantity) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${quantity}`)
    const dataApi = await response.json()
    return dataApi.results;
}

export {getPokemonsList}