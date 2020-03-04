import React from "react"
import Enzyme, { shallow } from "enzyme"
import App from "components/App.jsx"
import AppService from "services/AppService.jsx"
import Adapter from "enzyme-adapter-react-16"

const sinon = require("sinon")

Enzyme.configure({ adapter: new Adapter() })

describe("App component", () => {
	var wrapper

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	afterEach(() => {
		wrapper.unmount()
	})

	it("gets right string", () => {
		var text = wrapper.find("div").text()
		expect(text).toEqual("Hello World?")
	})

	it("gets not right string", () => {
		var wrong = sinon.stub(AppService, "getData").returns("What?")
		var text = wrapper.find("div").text()
		expect(text).toEqual("What?")
		wrong.restore()
	})
})