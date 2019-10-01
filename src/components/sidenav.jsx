import React from 'react'
import Nav from "./nav"
import Card from './card';
import Table from './table';
import ReservationForm from './reservationForm';
import "./main.css"

export default function Sidenav(props) {
    // const {
    //     totalRooms = [],
    //     in_use = [],
    //     ready = [],
    //     income = []
    // } = props.stats
    let stats = props.stats
    console.log(stats)
    return (
        <div>
            <div className="row no-gutters">
                <div className="col-2 bg-transperent h-100 pt-5">
                    <div className="mt-5 nav flex-column nav-pills" style={{ "height": "600px" }} id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active mt-3" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="false">Home</a>
                        
                        <a className="nav-link  mt-3" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Make Reservation</a>
                        <a className="nav-link mt-3" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                        <a className="nav-link mt-3" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                        
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div  className="tab-pane fade  position-absolute h-100 w-100  form-bg" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <ReservationForm />

                        </div>


                        <div className="tab-pane fade active show " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <Nav />
                            <div className="row m-3">
                                <div className="col-xs-12 col-md-6 col-lg-3 mb-2">
                                    <Card
                                        icon={"hotel"}
                                        header="Total Rooms"
                                        data={props.stats[0].totalRooms}
                                        color="primary" />
                                </div>
                                <div className="col-xs-12 col-md-6 col-lg-3 mb-2">
                                    <Card
                                        icon={['far', "handshake"]}
                                        header="Rooms In-use"
                                        data={props.stats[1].totalUse}
                                        color="success" />
                                </div>
                                <div className="col-xs-12 col-md-6 col-lg-3 mb-2">
                                    <Card
                                        icon="star"
                                        header="Rooms Ready"
                                        data={props.stats[2].ready}
                                        color="info" />
                                </div>
                                <div className="col-xs-12 col-md-6 col-lg-3 mb-2">
                                    <Card
                                        icon={"money-bill-wave-alt"}
                                        header="Expected income"
                                        data={props.stats[3].expertrdIncome}
                                        color="warning" />
                                </div>
                            </div>
                            <div className="row m-3 mt-5">
                                <h3 className="col-12">
                                    ROOMS
                                    <small className="text-muted"> #</small>
                                   
                                </h3>
                                <div className="col-12 mt-5">
                                    <Table data={props.rooms} />
                                </div>
                            </div>
                        </div>





                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
