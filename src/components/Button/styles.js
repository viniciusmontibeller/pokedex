import styled from "styled-components"
import { css } from "styled-components"

const Btn = styled.button`
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.defaultValues.transparentBackground};
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    color: ${props => props.theme.theme.color};
    font-family: ${props => props.theme.defaultValues.fontFamily};
    transition: ${props => props.theme.defaultValues.transition};
    box-shadow: ${props => props.theme.defaultValues.glassShadow};

    ${props => props.themeTogglerButton && css `
        background-color: transparent;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        box-shadow: ${props => props.theme.defaultValues.shadow};
        outline: none;

        :hover,
        :focus{
        filter: drop-shadow(0px 0px 10px white);
        box-shadow: ${props => props.theme.defaultValues.hoverShadow};
        }
    `}

    ${props => props.default && css `
        font-size: 20px;
        padding: 0.8em 0.8em;
        border-radius: 10px;
        font-weight: 500;

        @media(min-width: 500px){
            width: 280px;
        }

        :hover{
        scale: 1.1;
        backdrop-filter: none;
        background-color: rgba(255, 255, 255, 0.4);
        }
    `}

    ${props => props.arrow && css `
        border-radius: 10px;
        display: flex;
        padding: 15px;

        :hover{
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: ${props => props.theme.defaultValues.darkGlassShadow};
        }

        img {
            height: 40px;

            @media(max-width: 500px){
                height: 30px;
            }
        }

        ${props => props.prev && css `
            transform: rotate(180deg);
            left: 0;
        `}

        ${props => props.next && css `
            right: 0;
        `}

        ${props => props.disabled && css `
            opacity: 0.6;
            cursor: default;
            a{
                pointer-events: none;
            }
            :hover{
                background-color: ${props => props.theme.defaultValues.transparentBackground};
                box-shadow: ${props => props.theme.defaultValues.glassShadow};
            }
        `}
    `}
        
`

export { Btn }