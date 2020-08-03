import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
	render() {
		return (
			<header>
				<h1>Lets Talk futbol and API's</h1>
				<nav>
					<Link to='/'>Home</Link>
					
				</nav>
			</header>
		);
	}
}

export default Header;
