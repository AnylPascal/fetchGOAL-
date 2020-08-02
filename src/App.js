import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}

	setState = {
		loading: true,
		data: {},
	};

	async componentDidMount() {
		const url = 'https://api-football-v1.p.rapidapi.com/v2/predictions/157462';
		const response = await fetch(url);
		const data = await response.json();
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
