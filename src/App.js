import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import $ from "jquery"
import axios from "axios"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Main from './backend/main';
import {library} from "@fortawesome/fontawesome-svg-core"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle" 
import {
	faMoneyBillWaveAlt,
	faHotel,
	faStar,
	faPhoneAlt,
	faGlassCheers,
	faHourglassHalf,
	
} from "@fortawesome/free-solid-svg-icons"

import {
	faHandshake
  } from "@fortawesome/free-regular-svg-icons"
import { 
	faFacebook,
	faInstagram,
	faTwitter,
	faSnapchat
 } from '@fortawesome/free-brands-svg-icons'
import Home from './components/home';
import ReservationForm from './components/reservationForm';

axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRFToken": "example-of-custom-header",
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  library.add(faMoneyBillWaveAlt,faHotel,faHandshake,faStar,faFacebook,faInstagram,faTwitter,faSnapchat,faPhoneAlt,
	faGlassCheers,faHourglassHalf,)
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {	
		}
		$('#myList a').on('click', function (e) {
			e.preventDefault()
			$(this).tab('show')
		  })
		
	}

	render() {
		return (
			<Router >
				<div className="h-100">

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/bookRoom" component={ReservationForm} />
					<Route path="/admin" component={Main} />
				</Switch>
				</div>
			</Router>

		)
	}
}

export default App;
