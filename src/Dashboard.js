import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		const teams = [];

		for (const team in this.props.dashboard) {
			teams.push({ name: team, ...this.props.dashboard[team] });
		}

		return (
			<div>
				{teams.map((team) => (
					<div key={team.name}>
						{' '}
						<div>{team.name}</div> <div>{team.coach}</div>
						<div>{team.formation}</div>
					</div>
				))}{' '}
			</div>
		);
	}
}
export default Dashboard;
