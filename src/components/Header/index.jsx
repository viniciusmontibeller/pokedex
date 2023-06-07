import { Head, Container } from "./style"
import { ThemeTogglerButton } from "../ThemeTogglerButton/"
import { Link } from 'react-router-dom'
import logo from '../../assets/pokemon_logo.png'

const Header = ({handleReset}) => {
    
    return( 
        <Head>
            <Container>
                <Link onClick={handleReset} to={'/'}>
                    <img src={logo} alt='Pokemon logo' />
                </Link>
                <ThemeTogglerButton />
            </Container>
        </Head>
    )
}

export { Header }