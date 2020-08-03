import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		return (
			<div className='dashboard'>
				<Link to='/'>Great things coming soon!</Link>
			</div>
		);
	}
}

export default Dashboard;
