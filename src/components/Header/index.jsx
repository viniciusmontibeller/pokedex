// import { useEffect, useState } from "react"
import { Head, Container } from "./style"
import { ThemeTogglerButton } from "../themeTogglerButton/themeTogglerButton"
import { Link } from 'react-router-dom'
import logo from '../../assets/pokemon_logo.png'

const Header = () => {
    
    return( 
        <Head>
            <Container>
                <Link to={'/'}>
                    <img src={logo} alt='' />
                </Link>
                <ThemeTogglerButton />
            </Container>
        </Head>
    )
}

export { Header }