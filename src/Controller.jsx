import React from 'react';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

class Controller extends React.Component {
	

	render() {
		return(
			<div className="center">
				<ButtonToolbar>
					<button onClick={this.props.start}>
						Play
					</button>
					<button onClick={this.props.stop}>
						Stop
					</button>
					<button onClick={this.props.clear}>
						Clear Board
					</button>
				</ButtonToolbar>
			</div>
		);
	}
}

export default Controller;