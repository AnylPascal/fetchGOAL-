import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Standings extends Component {
	render() {
		const api = [];

		for (const where in this.props.api.standings) {
			api.push({ name: where, ...this.props.standings[where] });
		}
		return (
			<div>
				{api.map((where) => (
					<div key={where.api.standings}>
						{' '}
						{''} <div>{where.api.standings}</div>{' '}
					</div>
				))}{' '}
				{''}
				<Link to='/'>Back Home</Link>
			</div>
		);
	}
}
export default Standings;
