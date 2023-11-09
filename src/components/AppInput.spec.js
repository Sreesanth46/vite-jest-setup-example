import { render, screen, waitFor } from "@testing-library/react"
import AppInput from "./AppInput"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

describe("Input component", () => {
    let Component
    function handleChange(e) {
        const { value } = e.target
        setValue = value
    }


    beforeEach(async () => {
        await act(async () => {
            Component = render(
                <AppInput
                    label={"name"}
                    onChange={handleChange}
                />
            )
        })
    })

    it("should render", () => {
        const input = Component.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })

    it("should be able to type texts", async () => {

        const input = Component.getByRole('textbox')

        await waitFor(() => {
            userEvent.type(input, "Hello")
        }) 
            
        
        screen.debug(input)

        // expect(input).toHaveValue('Hello')

    })

})