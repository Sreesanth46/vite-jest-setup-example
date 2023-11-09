import { render, screen, waitFor } from "@testing-library/react"
import Login from "./Login"
import { act } from "react-dom/test-utils"
import userEvent from "@testing-library/user-event"


describe("Input component", () => {
    let Component

    beforeEach(async () => {
        await act(async () => {
            render(
                <Login />
            )
        })
    })

    it("should render", () => {
        const input = screen.getByRole('button', { name: /login/i })
        expect(input).toBeInTheDocument()
    })

    it("should be able to type texts", async () => {

        const inputFields = screen.getAllByRole('textbox')

        await waitFor(() => {
            userEvent.type(inputFields[0], "Username")
            userEvent.type(inputFields[1], "Password")
        })

        screen.debug(screen.getAllByRole('textbox'))

    })

})