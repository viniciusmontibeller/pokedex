import { ThemeTogglerButton } from "./ThemeTogglerButton";
import { screen, render, fireEvent } from "@testing-library/react";
import { Theme } from "../../global/Theme";

it("should display the theme toggler button", () => {
    render(<Theme><ThemeTogglerButton/></Theme>)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeVisible()
})

it("should start with the light theme", () => {
    render(<Theme><ThemeTogglerButton/></Theme>)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveStyle("color: rgba(34, 34, 34, 1)")
})

it("should toggle between light and dark theme", () => {
    render(<Theme><ThemeTogglerButton/></Theme>)
    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveStyle("color: rgba(255, 255, 255, 1)")
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveStyle("color: rgba(34, 34, 34, 1)")
})

