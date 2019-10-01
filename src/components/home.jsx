import React, { Component } from 'react'
import image from "../images/1.jpeg"
import logo from "../01.jpg"
import "./main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery from './gallery';
import ImageButton from "./imageButton"

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div>
                <div id="header-img" className="row position-relative no-gutters" >
                    <img src={image} alt="img" className="h-100 w-100" />
                    <div className="position-absolute h-100 w-100 overlay">
                        <div id="logo" className="container-fluid pt-4">
                            <img src={logo} alt="" height="100" width="100" className="rounded-circle d-block mx-auto " />

                            <div className="row ">
                                <ul className="col-lg-4 nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link text-white active" href="/">
                                            <span> <FontAwesomeIcon icon={["fab", "facebook"]} /> </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white active" href="/">
                                            <FontAwesomeIcon icon={["fab", "twitter"]} />
                                        </a>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white active" href="/">
                                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                                        </a>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white active" href="/">
                                            <FontAwesomeIcon icon={["fab", "snapchat"]} />
                                        </a>

                                    </li>

                                </ul>

                                <ul className="col-lg-4 nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link text-white active" href="/">Home</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link text-white" href="#services">Services </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#contactUs">Contact Us</a>
                                    </li>
                                    <li className="nav-item float-right">
                                        <a className="nav-link text-white" href="#aboutUs" tabIndex="-1" aria-disabled="true">About Us</a>
                                    </li>
                                </ul>

                                <ul className="col-lg-4 nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link text-white active" href="/">
                                            <FontAwesomeIcon icon={["fas", "phone-alt"]} />
                                            &nbsp; 08066060467
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="center-txt" className="row mt-5">
                            <div className="mx-auto text-white">
                                <p className="">
                                    <u>
                                        Hotel & Suits
                               </u>
                                </p>
                                <h2>
                                    WELCOME TO CIPHER
                        </h2>
                                <p className="text-center">
                                    We take care of you while you take care of things <br />

                                    <a href="/bookRoom" className="btn btn-outline-light mt-4">
                                        Get Started
                        </a>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>

                <div id="aboutUs" className="row">
                    <div className="mx-auto row no-gutter p-2 col-lg-10 bg-light mt-n5">
                        <div className="col-4">
                            <div className="card bg-light" >
                                <FontAwesomeIcon className="mx-auto m-4 text-primary" icon="glass-cheers" size="4x" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Here in Cipher Hotel, coustomer satisfaction is top 
                                        on our priority  list. In Cipher hotel ypu are the boss
                                    
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card" >
                                <FontAwesomeIcon className="mx-auto m-4 text-primary" icon={["far", "handshake"]} size="4x" />
                                <div className="card-body">
                                    <p className="card-text">
                                       When compared to other hotels,
                                        Cipher hotel Brings you the best deals around, laced with the best luxury  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card" >
                                <FontAwesomeIcon className="mx-auto m-4 text-primary" icon="hourglass-half" size="4x" />
                                {/* <img src={image} height="100" width="100" className="card-img-top" alt="..." /> */}
                                <div className="card-body">
                                    <p className="card-text">
                                        With a 24hrs working time, you get what you want, when you want it 
                                        with no time in between 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />


                <div>
                    <p className="col-12 h3 bold text-center mx-auto text-info mt-5 mb-4">
                        <u>
                            Our Gallery
                        </u>
                    </p>
                    <Gallery />

                    <p id="services" className="col-12 h3 bold text-center mx-auto text-info mt-5 mb-5">
                        <u>
                            BOOK A Room
                        </u>
                    </p>


                    <ImageButton />


                </div>
                <div id="contactUs" className="w-100 mt-5 mb-0 bg-dark">
                    <div className="jumbotron text-white w-100 mb-0 bg-dark">
                        <div className="row ">
                            <p className="h5 float-left col-xs-12 col-md-4">
                                <span className="mt-3 pb-4">
                                    <FontAwesomeIcon className="mr-2" icon={["fab", "facebook"]} /> Facebook <br />
                                </span>
                                <span className="mt-3 pb-4">
                                    <FontAwesomeIcon className="mr-2" icon={["fab", "twitter"]} /> Twitter<br />
                                </span>
                                <span className="mt-3 pb-4">
                                    <FontAwesomeIcon className="mr-2" icon={["fab", "instagram"]} /> Instagram <br />
                                </span>
                                <span className="mt-3 pb-4">
                                    <FontAwesomeIcon className="mr-2" icon={["fab", "snapchat"]} /> snapchat <br />
                                </span>
                            </p>
                            <div className="col-xs-12 col-md-4">
                            <dl>
                                <dt>
                                    Address
                                </dt>
                                <dd>
                                    No2 ezewuzie street, off unizik junction, Awka 
                                </dd>
                            </dl>
                        </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
