import { render, screen } from "@testing-library/react"
import Dashboard from "./Dashboard"

describe("Dashboard", () => {

    it("Renders properly", () => {
        render(<Dashboard/>)

        expect(screen.getByText('Dashboard')).toBeInTheDocument()
    })
})