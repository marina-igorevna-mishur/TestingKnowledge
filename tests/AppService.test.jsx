import React from "react"
import ReactDOM from "react-dom"
import { getData } from "services/AppService.jsx"

describe("testing primitive", () => {
	it("returns data\"?\"", () => {
		expect(getData()).toBe("Hello World?")
	})
})