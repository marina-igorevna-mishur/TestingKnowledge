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
		getData().then(this.updateTable)
	}

	updateTable = data => {
		this.setState({
			head: data.headers,
			trials: data.trials
		})
	}

	composeTableHead = () => {
		var table = this.state.head.map(function (element) {
			return <th key={element}>{element}</th>
		})
		return table
	}

	composeTable = () => {
		var table = this.state.trials.map(function (element) {
			return <Table trId={element.id} key={element.id} title={element.title} disease={element.disease} phase={element.phase} />
		})
		return table
	}

	render() {

		return (
			<div className="table">
				<table style={style.table}>
					<thead>
						{this.composeTableHead()}
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