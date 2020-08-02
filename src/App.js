import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  setState = {
    loading: true,
    data: 
  }

  async componentDidMount() {
		const url = 'https://api-football-v1.p.rapidapi.com/v2/predictions/157462';
		const response = await fetch(url);
		const data = await response.json();
	}


	return () {
		<div className='App'>
			<div className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				
				<Link
					to='/'
					exact
					path=
					render={() => <Dashboard  }>
					
				</Link>
			</div>
		</div>
	
}

export default App;
