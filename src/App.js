import React, { Component } from 'react';
import logo from './img/activity.svg';
import './App.css';
import './css/responsive.css';
import axios from 'axios';

var httpBaseUrl = "http://localhost:5000";

class App extends Component {
	render() {
		return (
			<div className="App">

				<div id="app-header" className="App-header">
					
					<h1>Epimetheus</h1>
					<a className="button" href="#APP-BODY">Start</a>
				</div>

				<Body />

			</div>
		);
	}
}


class Body extends Component {
	render() {
		return (
			<div id="APP-BODY">
				<Intro />
				<Stream />
			</div>
		);
	}
}


class Intro extends Component {
	render() {
		return(
			<div className="component">
				<h2>Reflect on your life, in numbers</h2>
				<p>
					quantify your shitty life
				</p>
			</div>
		);
	}
}


// user's stream
class Stream extends Component {
	// member vars
	//me;			// empty class

	constructor () {
		super();
		this.state = { "me": {'username':"anon"} };
	}

	render() {
		return (
			<div className="component">
				<h2>Hello {this.state.me.username}</h2>
			</div>
		);
	}

	// recall that the Component lifecycle is:
	//   constructor -> componentWillMount -> render -> componentDidMount
	componentDidMount () {
		var url = httpBaseUrl + '/mystream';		// my pee stream
		axios.get ( url ).then(
			res => {
				const me = res.data;
				this.setState ( { me } );
			}
		).catch(
			err => {
				console.err ( err );
			}
		)
	}
}


export default App;