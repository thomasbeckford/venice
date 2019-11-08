import React, { Component } from 'react';

export default class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = { visible: false };
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	
	toggleMenu() {
		const currentState = this.state.visible;
		this.setState({ visible: !currentState });
	}

	handleNavigation(x){
		console.log(x.url)
		
	}

	render() {

	const navigation = [
		{id: 0, name: 'Home', url: 'home'},
		{id: 1, name: 'Why', url: 'why'},
		{id: 2, name: 'Where', url: 'where'},
		{id: 3, name: 'Program', url: 'program'},
		{id: 4, name: 'Duration&Structure', url: 'duration'},
		{id: 5, name: 'How To Apply', url: 'howtoapply'},
		{id: 6, name: 'Fees/Terms & Conditions', url: 'terms'},
		{id: 7, name: ' Co-organisers & Tutors', url: 'tutors'},
		{id: 8, name: 'ContactUs', url: 'contactus'},
	]

		return (
			<div className="navbarfixed">
				<div className={this.state.visible ? 'button_container active': 'button_container'}  onClick={this.toggleMenu}>
				<span className="top"></span>
				<span className="middle"></span>
				<span className="bottom"></span>
			</div>

			<div className={this.state.visible ? 'overlay open' : 'overlay' }>
				<nav className={this.state.visible ? 'overlay-menu active': 'overlay-menu'}  onClick={this.toggleMenu}>
				<ul>	
					{navigation.map((x,i)=>
						<li key={i}>
							<a href={'#'+x.url} page={x.name} onClick={this.handleNavigation.bind(this,x)}>{x.name}</a>
						</li>
					)}
				</ul>
				</nav>
				</div>
			</div>
			);
	}


}
