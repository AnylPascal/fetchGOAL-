import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		const standings = [];

		for (const stats in this.props.dashboard) {
			standings.push({ laliga: stats, ...this.props.dashboard[stats] });
		}

		return (
			<div>
				{standings.map((stats) => (
					<div key={stats.laliga}>
						{' '}
						<div>{stats.laliga}</div> <div>{stats.coach}</div>
						<div>{stats.formation}</div>
					</div>
				))}{' '}
			</div>
		);
	}
}
export default Dashboard;
