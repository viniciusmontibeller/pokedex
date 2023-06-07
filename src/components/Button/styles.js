import styled from "styled-components"

const Btn = styled.button`
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.defaultValues.transparentBackground};
    backdrop-filter: ${props => props.theme.defaultValues.backgroundFilter};
    border-radius: 10px;
    width: 280px;
    color: ${props => props.theme.theme.color};
    font-family: ${props => props.theme.defaultValues.fontFamily};
    font-size: 20px;
    font-weight: 500;
    transition: ${props => props.theme.defaultValues.transition};
    box-shadow: ${props => props.theme.defaultValues.glassShadow};

    :hover{
        scale: 1.1;
        backdrop-filter: none;
        background-color: rgba(255, 255, 255, 0.4);
    }
`

export { Btn }