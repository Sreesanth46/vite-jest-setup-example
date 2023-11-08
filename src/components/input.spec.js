import { render, screen, waitFor} from "@testing-library/react"
import AppInput from "./input"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

describe("Input component", () => {
    it("should render", () => {
        render(
            <AppInput />
        )
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })

    it("should be able to type texts", async () => {
        await act(async() => {
            render(<AppInput />)
        })
        const input = screen.getByRole('textbox')

        userEvent.type(input, "Hello")

        expect(input).toHaveValue('Hello')

    })

})