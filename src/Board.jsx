import React from 'react';
import Box from './Box';

class Board extends React.Component {
	render() {
		const width = this.props.cols * 16;
		var drawnBoard = [];

		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.cols; j++) {
				let boxId = i + "_" + j;

				boxClass = this.props.board[i][j] ? "box fill" : "box empty";
				drawnBoard.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						row={i}
						col={j}
					/>
				);
			}
		}

		return (
			<div className="board" style={{width: width}}>
				{drawnBoard}
			</div>
		);
	}
}

export default Board;