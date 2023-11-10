import { cleanup, render, screen } from "@testing-library/react"
import AppButton from "../AppButton"


beforeEach(() => {
    cleanup();
})

describe("AppButton", () => {
    it("should render a button", () => {
        render(<AppButton />)
        expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it("should render button with given name", () => {
        render(<AppButton>Login</AppButton>)
        const loginButton = screen.getByRole("button", { name: /login/i })
        expect(loginButton).toBeInTheDocument()
        // -- assert Text --
        expect(loginButton).toHaveTextContent(/login/i)
    })

    it("should be able to add new attributes", () => {
        render(<AppButton disabled>Login</AppButton>)
        const loginButton = screen.getByRole("button", { name: /login/i })
        expect(loginButton).toBeInTheDocument()
        expect(loginButton).toBeDisabled()

    })
})