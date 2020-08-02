import React, { Component } from 'react';

class Dashboard extends React.ChildrenComponent {
	state = {
		loading: true,
	};

	

	render() {
		return (
			<div>
				{this.state.loading ? <div>loading...</div> : <div>game..</div>}
			</div>
		);
	}
}

export default Dashboard;
