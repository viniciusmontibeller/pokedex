// import { useEffect, useState } from "react"
import { Head, Container } from "./style"
import { ThemeTogglerButton } from "../themeTogglerButton/themeTogglerButton"
import { Link } from 'react-router-dom'
import logo from '../../assets/pokemon_logo.png'

const Header = ({handleReset}) => {
    
    return( 
        <Head>
            <Container>
                <Link onClick={handleReset} to={'/'}>
                    <img src={logo} alt='Pokemon' />
                </Link>
                <ThemeTogglerButton />
            </Container>
        </Head>
    )
}

export { Header }