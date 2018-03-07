import React from 'react';
import Box from './Box';

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawnBoard: []
		}
	}

	drawBoard() {
		var drawnBoard = [];
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + "_" + j;
				var boxFill = this.props.board[i][j] ? "box fill" : "box empty";
				drawnBoard.push(
					<Box 
						boxFill={boxFill}
						key={boxId}
						row={i}
						col={j}
					/>
				);
			}
		}
	}

	render() {
		return(
			<div className="Board">
				{this.state.drawnBoard}
			</div>
		);
	}
}

export default Board;