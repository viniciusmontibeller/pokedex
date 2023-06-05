import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body{
        background: url(${props => props.theme.theme.backgroundImage}) no-repeat center center fixed; 
        background-size: cover;
        background-color: ${props => props.theme.theme.backgroundColor};
        font-family: ${props => props.theme.defaultValues.fontFamily};

        #root {
            height: auto;
        }
    }
`

export { GlobalStyle }