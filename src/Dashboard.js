import React, { Component } from 'react';

class Dashboard extends Component {
	state = {
		loading: true,
	};

	render() {
		return <div>{this.state.lineUps}</div>;
	}
}

export default Dashboard;
