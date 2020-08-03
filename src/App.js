import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
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
			odds: {},
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
				console.log(response);

				return response.json();
			})
			.then((response) => {
				console.log(response);

				this.setState({
					...this.state,
					loading: false,
					data: response.api.lineUps,
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
					path='/dashboard'
					exact
					render={() => {
						return <Dashboard teams={this.teams} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
