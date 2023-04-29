async function getPokemonsList () {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    const dataApi = await response.json()
    return dataApi.results;
}

export {getPokemonsList}