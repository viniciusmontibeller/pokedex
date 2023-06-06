import { themes } from '../../global/Theme'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import styled from 'styled-components'
import { BsSun } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'

const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                {theme === themes.light ? <BsMoon/> : <BsSun/>}   
            </Button>
        </div>
    )
}

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.theme.theme.color}; 
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    box-shadow: ${props => props.theme.defaultValues.shadow};
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    outline: none;
    transition: 0.2s ease-in-out;
    :hover,
    :focus{
        filter: drop-shadow(0px 0px 10px white);
        box-shadow: ${props => props.theme.defaultValues.hoverShadow};
    }
`

export { ThemeTogglerButton }