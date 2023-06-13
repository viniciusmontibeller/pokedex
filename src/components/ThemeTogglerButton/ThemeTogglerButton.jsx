import { themes } from '../../global/Theme'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { BsSun } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'
import { Button } from '../Button'
import { isEqual } from 'lodash'

const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return <Button
        themeTogglerButton
        onClick={() => setTheme(isEqual(theme, themes.light) ? themes.dark : themes.light)}>
        {isEqual(theme, themes.light) ? <BsMoon /> : <BsSun />}
    </Button>
}

export { ThemeTogglerButton }