import React, { Component } from 'react';

class Lineup extends Component {
	render() {
		const teams = [];
		for (const team in this.props.lineUps) {
			teams.push({ name: team, ...this.props.lineUps[team] });
			
		}

		return <div>Line Ups </div>;
	}
}

export default Lineup;
