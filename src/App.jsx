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
    };
    this.createBoard = this.createBoard.bind(this);
  }

  componentWillMount(){
    this.createBoard();
    this.start();
  }
	
	createBoard() {
		var newBoard = [];
		for (var i = 0; i < this.state.rows; i++) {
			var row = [];
			for (var j = 0; j < this.state.cols; j++) {
				let fillValue;
				if (Math.random() > 0.75) {
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

	start() {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, 300);
	}

	stop() {
		clearInterval(this.intervalId);
	}

	play() {
		console.log(this.state);
		const playBoard = this.state.board;
		let newBoard = playBoard.slice(0);
		for (var i = 0; i < this.state.rows; i++) {
			for (var j = 0; j < this.state.cols; j++) {
				const neighbors = this.findNeighbors(playBoard, i, j);
				if (playBoard[i][j] && neighbors < 2 || neighbors > 3) {
					newBoard[i][j] = false;
				}
				if (!playBoard[i][j] && neighbors === 3) {
					newBoard[i][j] = true;
				}
			}
		}
		const newCycles = this.state.cycles + 1;
		this.setState({
			board: newBoard,
			cycles: newCycles
		});
	}

	findNeighbors(playBoard, row, col) {
		const maxRows = this.state.rows;
		const maxCols = this.state.cols;
		let neighbors = 0;
		console.log(playBoard);
		if (row > 0 && playBoard[row - 1][col]) {
			neighbors++;
		}
		if (row > 0 && col < maxCols && playBoard[row - 1][col + 1]) {
			neighbors++;
		}
		if (col < maxCols && playBoard[row][col + 1]) {
			neighbors++;
		}
		if (row < maxRows && col < maxCols && playBoard[row + 1][col + 1]) {
			neighbors++;
		}
		if (row < maxRows && playBoard[row + 1][col]) {
			neighbors++;
		}
		if (row < maxRows && col > 0 && playBoard[row + 1][col - 1]) {
			neighbors++;
		}
		if (col > 0 && playBoard[row][col - 1]) {
			neighbors++;
		}
		if (row > 0 && col > 0 && playBoard[row - 1][col - 1]) {
			neighbors++;
		}
		return neighbors;
	}

	render() {
		return(
			<div id="root">
				<h1>Conway's Game of Life</h1>
				<Controller
					start={this.start}
					stop={this.stop}
				/>
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