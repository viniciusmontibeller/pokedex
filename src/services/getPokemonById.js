async function getPokemonById (id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const dataApi = await response.json()
    return dataApi;
}

export { getPokemonById }