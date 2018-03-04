import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">

				<div id="app-header" className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
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
				<h2>Life in Numbers</h2>
				<p>Journal your daily life in numbers, and review whenever.</p>
			</div>
		);
	}
}

export default App;