import { Header } from "./style"

const Navbar = ({ pokemonFilter }) => {
    return( 
        <Header>
            <input onChange={(event) => pokemonFilter(event.target.value)} type='search' placeholder="Search"></input>
        </Header>
    )
}

export { Navbar }