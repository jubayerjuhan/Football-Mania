import './App.css';
import React from "react";
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home/Home.js';
import TeamDetails from "./Components/TeamDetails/TeamDetails";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					
					<Route exact path='/'>
						<Home></Home>
					</Route>

					<Route path='/teams/:teamId'>
						<TeamDetails></TeamDetails>
					</Route>

				</Switch>
			</Router>
		</div>
	);
}

export default App;
