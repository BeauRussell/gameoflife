import React from 'react';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

class Controller extends React.Component {
	

	render() {
		return(
			<div className="center">
				<ButtonToolbar>
					<button className="btn btn-default" onClick={this.props.start}>
						Play
					</button>
					<button className="btn btn-default" onClick={this.props.stop}>
						Stop
					</button>
				</ButtonToolbar>
			</div>
		);
	}
}

export default Controller;