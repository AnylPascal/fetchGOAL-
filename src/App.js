import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';


const apiKey = process.env.REACT_APP_MYKEY;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			loading: true,
			lineUps: {},
		};
	}

	componentDidMount() {
		fetch('https://api-football-v1.p.rapidapi.com/v2/predictions/157462', {
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
					data: response.api.predictions[0],
				});
			});

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
				console.log(response.api.lineUps);

				this.setState({
					...this.state,
					lineUps: response.api.lineUps,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {


		return (
			<div className='App'>
				<div className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<nav>
						<Link to='/'></Link>
					</nav>
					<main>
						<Route path='/' component={Dashboard} />
					</main>
				</div>
			</div>
		);
	}
}

export default App;
