import React from "react"
import ReactDOM from "react-dom"
import { getData } from "services/AppService.jsx"

describe("testing primitive", () => {
	it("returns hello world\"?\"", () => {
		expect(getData()).toBe("Hello World?")
	})
})