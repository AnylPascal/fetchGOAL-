import React from 'react';
import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';
import { Route, Link } from 'react-router-dom';
import Standings from './Standings';
import Header from './Header';
import Lineup from './Lineup';

const apiKey = process.env.REACT_APP_MY_KEY;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			loading: true,
			lineUps: {},
			standings: {},
		};
	}

	componentDidMount() {
		fetch('https://api-football-v1.p.rapidapi.com/v2/lineups/157215', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
				'x-rapidapi-key': apiKey,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.setState({
					...this.state,
					loading: true,
					data: response.api.lineUps,
				});
			});

		fetch('https://api-football-v1.p.rapidapi.com/v2/leagueTable/524', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
				'x-rapidapi-key': apiKey,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				this.setState({
					...this.state,
					loading: true,
					data: response.api.results.standings,
				});
			});
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Route
					path='/'
					exact
					render={() => {
						return <Lineup lineUps={this.state.data} />;
					}}
				/>
				<Route
					path='/standings'
					exact
					render={() => {
						return <Standings standings={this.state.data} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
