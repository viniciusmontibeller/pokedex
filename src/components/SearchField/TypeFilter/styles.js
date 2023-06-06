import styled from "styled-components"

const Select = styled.select`
    border: none;
    font-family: ${props => props.theme.defaultValues.fontFamily};
    font-size: 14px;
    background-color: ${props => props.theme.defaultValues.transparentBackground};
    box-shadow: ${props => props.theme.defaultValues.shadow};
    padding: 0.7em 2.3em 0.7em 1em;
    border-radius: 10px;
    cursor: pointer;
    color: ${props => props.theme.theme.color};
    transition: ${props => props.theme.defaultValues.transition};
    outline: none;
    box-shadow: ${props => props.theme.defaultValues.glassShadow};

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    option{
        background-color: ${props => props.theme.theme.backgroundColor};
    }

    :hover,
    :focus{
        box-shadow: ${props => props.theme.defaultValues.darkGlassShadow};
    }
`

const CustomSelect = styled.div`
    position: relative;
`

const SelectArrow = styled.span`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-80%, -50%);
    display: block;
    pointer-events: none;
    border-left: 0.55rem solid transparent;
    border-right: 0.55rem solid transparent;
    border-top: ${props => `0.55rem solid ${props.theme.theme.color}`};
`

export { Select, CustomSelect, SelectArrow}