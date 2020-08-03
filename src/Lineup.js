import React, { Component } from 'react';

class Lineup extends Component {
	render() {
		const teams = [];

		for (const team in this.props.lineUps) {
			teams.push({ name: team, ...this.props.lineUps[team] });
		}
		console.log(teams);
		return (
			<div>
				{teams.map((team) => (
					<div>
						{' '}
						<div>{team.name}</div>{' '}
					</div>
				))}{' '}
			</div>
		);
	}
}

export default Lineup;