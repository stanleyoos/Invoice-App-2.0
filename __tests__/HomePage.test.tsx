import { render, screen } from "@testing-library/react"
import Home from "../src/app/page"
import "@testing-library/jest-dom"

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />) // ARRANGE

    const myElem = screen.getByText("Welcome to Invoice App") // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })
})
