import React from 'react';

class Box extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className={this.props.boxClass}
			/>
		);
	}
}

export default Box;