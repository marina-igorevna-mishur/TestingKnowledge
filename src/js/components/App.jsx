import React from "react"
import { getData } from "services/AppService.jsx"
import PropTypes from "prop-types"
import "../../css/style.css"

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			head: [],
			trials: []
		}
	}

	componentDidMount() {
		this.getTable()
	}


	setTrialsState = (info) => {
		var data = JSON.parse(info.toString())
		console.log(data)
		this.setState({
			head: data.headers,
			trials: data.trials
		})
	}

	getTable = () => {
		console.log("uno")
		getData().then(this.setTrialsState)
	}

	composeTableHead = () => {
		console.log("head")
		var table = this.state.head.map(function (element) {
			return <td key={element} >{element}</td>
		})
		return table
	}

	composeTable = () => {
		console.log("table")
		var table = this.state.trials.map(function (element) {
			return <Table trId={element.id} key={element.id} title={element.title} disease={element.disease} phase={element.phase} />
		})
		return table
	}

	render() {
		
		return(
			<div className = "table">
				<table style={style.table}>
					<thead>
						<tr style={style.tableContent}>
							{this.composeTableHead()}
						</tr>
					</thead>
					<tbody>
						{this.composeTable()}
					</tbody>
				</table>
			</div>
		)
	}

}

class Table extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<tr>
				<td style={style.tableContent}>{this.props.trId}</td>
				<td style={style.tableContent}>{this.props.title}</td>
				<td style={style.tableContent}>{this.props.disease}</td>
				<td style={style.tableContent}>{this.props.phase}</td>
			</tr>
		)
	}
}

Table.propTypes = {
	trId: PropTypes.number,
	title: PropTypes.string,
	disease: PropTypes.string,
	phase: PropTypes.string
}

var style = {
	table: {
		border: "2px solid black",
	},
	tableContent: {
		border: "1px solid black",
		textAlign: "center"
	}
}

export default App