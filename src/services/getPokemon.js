async function getPokemon (name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const dataApi = await response.json()
    return dataApi;
}

export {getPokemon}