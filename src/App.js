import React from 'react';
import Board from './Board';
import Controller from './Controller';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [],
			rows: 50,
			cols: 50,
			cycles: 0
		}
		this.createBoard();
	}

	createBoard() {
		var newBoard = [];
		for (var i = 0; i < this.state.rows; i++) {
			var row = [];
			for (var j = 0; j < this.state.cols; j++) {
				let fillValue;
				if (Math.random() > 0.65) {
					fillValue = true;
				} else {
					fillValue = false;
				}
				row.push(fillValue);
			}
			newBoard.push(row);
		}
		this.setState({board: newBoard});
	}

	render() {
		return(
			<div id="root">
				<h1>Conway's Game of Life</h1>
				<Controller />
				<Board
					board={this.state.board}
					rows={this.state.rows}
					cols={this.state.cols}
				/>
				<p>Years Passed: {this.state.cycles}</p>
			</div>
		);
	}
}

export default App;