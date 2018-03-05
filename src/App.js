import React, { Component } from 'react';
import logo from './img/activity.svg';
import './App.css';
import './css/responsive.css';

class App extends Component {
	render() {
		return (
			<div className="App">

				<div id="app-header" className="App-header">
					<img src={logo} className="App-logo svgLogo" alt="logo" />
					<h1>Circadian</h1>
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
			</div>
		);
	}
}


class Intro extends Component {
	render() {
		return(
			<div>
				<h2>Life in Numbers</h2>
				<div className="flex-container">
					<p className="flex-1-2">Journal your daily life in numbers, and review whenever.</p>
					<div className="flex-1-2">
						lul
					</div>
				</div>
			</div>
		);
	}
}


export default App;