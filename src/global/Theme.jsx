import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import LightBackground from '../assets/lightbg.jpg'
import DarkBackground from '../assets/darkbg.jpg'

const themes = {
    light: {
        color: "rgba(34, 34, 34, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        backgroundColorHover: "rgba(34, 34, 34, 0.2)",
        backgroundImage: LightBackground,
    },
    dark: {
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(34, 34, 34, 1)",
        backgroundColorHover: "rgba(255, 255, 255, 0.3)",
        backgroundImage: DarkBackground,
    }
};

const defaultValues = {
    transparentBackground: "rgba(255, 255, 255, 0.1)",
    glassShadow: "hsla(211, 76%, 52%, 0.3) 3px 3px 6px 0px inset, hsla(211, 76%, 70%, 0.3) -3px -3px 6px 1px inset, 0 0 10px 2px rgba(0, 0, 0, 0.35)",
    darkGlassShadow: "hsla(211, 76%, 52%, 0.3) 3px 3px 6px 0px inset, hsla(211, 76%, 70%, 0.3) -3px -3px 6px 1px inset, 0 0 10px 5px rgba(0, 0, 0, 0.35)",
    shadow: "0 0 10px 1px rgba(0, 0, 0, 0.35)",
    hoverShadow: "0 0 10px 5px rgba(0, 0, 0, 0.35)",
    transition: "0.2s ease-in-out",
    backgroundFilter: "blur(8px)",
    fontFamily: "'Nunito', sans-serif"
}

const pokemonTypeColor = {
    fire: "#EE8130",
    grass: "#7AC74C",
    electric: "#F7D02C",
    water: "#6390F0",
    ground: "#E2BF65",
    rock: "#B6A136",
    fairy: "#D685AD",
    poison: "#A33EA1",
    bug: "#A6B91A",
    dragon: "#6F35FC",
    psychic: "#F95587",
    flying: "#A98FF3",
    fighting: "#C22E28",
    normal: "#A8A77A",
    ice: "#96D9D6",
    ghost: "#735797",
    dark: "#705746",
    steel: "#B7B7CE",
}

const localTheme = JSON.parse(localStorage.getItem('theme')) || themes.light

const Theme = ({children}) => {
        const [ theme, setTheme ] = useState(localTheme)

        useEffect(() => {
            localStorage.setItem('theme', JSON.stringify(theme))
        }, [theme])

        return (
        <ThemeProvider theme={{theme, setTheme, pokemonTypeColor, defaultValues}}>
            {children}
        </ThemeProvider>
        )
}

export { Theme, themes }