import React from "react"
import { getData } from "services/AppService.jsx"
import "../../css/style.css"

class App extends React.Component {
	render() {
		const element = <div className="hello">{ getData() }</div>
		return element
	}
}

export default App