import { render, screen } from "@testing-library/react"
import AppInput from "./input"

describe("Input component", () =>{
    it("should render", () => {
        render(
            <AppInput/>
        )
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })

})