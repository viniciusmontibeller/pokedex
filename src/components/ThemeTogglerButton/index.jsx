import { themes } from '../../global/Theme'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { BsSun } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'
import { Button } from '../Button'

const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    console.log(theme)

    return <Button
        themeTogglerButton
        onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
        {theme == themes.light ? <BsMoon /> : <BsSun />}
    </Button>
}

export { ThemeTogglerButton }