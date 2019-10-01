import React, { Component } from 'react'
import $ from "jquery"

import Sidenav from '../components/sidenav';
import Axios from 'axios';

class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         rooms: "",
         stats: ""
      }
     
    }
    
    componentDidMount() {
        Axios.get("http://localhost/cipher_web_files/hotel/sever/getUsers.php?getRooms=getRooms")
			.then(response => {
                this.setState({ rooms: response.data  });
            })
            .catch(err => console.log(err))

            Axios.get("http://localhost/cipher_web_files/hotel/sever/getUsers.php?getStats=getStats")
                .then(response =>{
                    this.setState({ stats: response.data });
                })
                .catch(error => {
                    console.log(error)
                })
            
        $('#myList a').on('click', function (e) {
            e.preventDefault()
            $(this).tab('show')
          })
    }
    render() {
        return (
            <div>
               {this.state.rooms && this.state.stats ?
                 <Sidenav 
                 rooms={this.state.rooms}
                 stats={this.state.stats} /> : null } 
            </div>
        )
    }
}

export default Main
