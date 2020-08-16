import React, { Component } from 'react';

class Lineup extends Component {
	render() {
		const teams = [];

		for (const team in this.props.lineUps) {
			teams.push({ name: team, ...this.props.lineUps[team] });
		}

		return (
			<div>
				{teams.map((team) => (
					<div key={team.name}>
						{' '}
						<div>{team.name}</div> <div>{team.coach}</div>
						<div>{team.formation}</div>
						<div>{team.startXI}</div>
					</div>
				))}{' '}
			</div>
		);
	}
}

export default Lineup;
