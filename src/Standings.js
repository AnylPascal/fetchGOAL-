import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Standings extends Component {
	render() {
		const api = [];

		const players = [];

		for (const where in this.props.standings) {
			api.push({ name: where, ...this.props.standings[where] });

			console.log(where.startXI);
		}

		for (const standing of api) {
			// console.log(standing.startXI);
			const team = standing.startXI;

			for (const player of team) {
				players.push(player);
				// console.log(player);
			}
		}
		console.log(players);
		return (
			<div>
				{players.map((where, index) => (
					<div key={index}>
						{where.player} <div>{where.number}</div>
						<div>{where.pos}</div>{' '}
					</div>
				))}{' '}
				{''}
				<Link to='/'>Back Home</Link>
			</div>
		);
	}
}
export default Standings;
