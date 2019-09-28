import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import GenaralList from './GenaralList';
import SortedList from './SortedList';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			message: "Ready",
			counter: 0,
			theme: " bg-secondary",
			names: ["Zoe", "Bob","Alice","Dora","Joe"]
		}
	}
	
	render() {
	  	return (
			  <div className="container-fluid">
				  <div className="row m-4">
					<div className="col-6">
						<GenaralList list={this.state.names} theme="primary" />
					</div>
					<div className="col-6">
						<SortedList list={this.state.names} />
					</div>
				  </div>
			  </div>
			
	)
	}
}

export default App;
