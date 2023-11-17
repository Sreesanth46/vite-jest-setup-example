import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "./Login"
import { LoginApi } from '../services/index';


const responseData = {
    id: 1,
    email: "louisarrow46@gmail.com",
    name: "Harvey",
    profilePic: null,
    upi: null,
    phone: "7845128745",
    status: 1,
    createdAt: "2023-10-10T14:05:29.000Z",
    updatedAt: "2023-10-10T14:05:29.000Z",
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}

jest.mock('../services/index', () => ({ LoginApi: jest.fn() }))

describe("Input component", () => {

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

        // await waitFor(() => {
        fireEvent.change(inputFields[0], { target: { value: 'Username123' } })
        fireEvent.change(inputFields[1], { target: { value: 'Password123' } })
        // })

        expect(inputFields[0].value).toEqual('Username123')
        expect(inputFields[1].value).toEqual('Password123')
    })

    describe("Verify user events", () => {
        it("should display error when trys to login with empty fields", async () => {

            const loginButton = screen.getByRole("button", { name: /login/i })
            fireEvent.click(loginButton)

            expect(screen.getByText(/error/i)).toBeInTheDocument()
        })

        it("should display success message", async () => {

            LoginApi.mockResolvedValue({ data: responseData })
            // Mock localStorage.setItem
            Storage.prototype.setItem = jest.fn();

            const inputFields = screen.getAllByRole('textbox')

            // await waitFor(() => {
            fireEvent.change(inputFields[0], { target: { value: 'Username123' } })
            fireEvent.change(inputFields[1], { target: { value: 'Password123' } })
            // })

            expect(inputFields[0].value).toEqual('Username123')
            expect(inputFields[1].value).toEqual('Password123')

            const loginButton = screen.getByRole("button", { name: /login/i })
            await waitFor(() => fireEvent.click(loginButton))

            expect(LoginApi).toHaveBeenCalled()

            expect(screen.queryByText(/error/i)).not.toBeInTheDocument()

            expect(screen.getByText("Login successful")).toBeInTheDocument()
        })
    })




})
