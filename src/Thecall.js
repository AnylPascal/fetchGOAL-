import React, { Component } from 'react';




class Thecall extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {},
		};
	}

	componentDidMount() {
		fetch('https://api-football-v1.p.rapidapi.com/v2/lineups/157215', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
				'x-rapidapi-key': 'cecc3a01f3msh3ad1f8c78be3775p163da2jsn14d409d6beee',
			},
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return <div></div>;
	}
}

export default Thecall;
