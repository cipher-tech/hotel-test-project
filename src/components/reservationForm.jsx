import React from 'react'

let handleSubmit = (e) => {
   
}

function ReservationForm() {
    return (
        <div className="position-absolute h-100 w-100 form-bg">
            <div className="row mt-5 mx-auto w-50 p-4 rounded-lg shadow-lg bg-light">
                <form className="needs-validation">
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="name">First Name</label>
                            <input type="text" className="form-control " id="name" placeholder="First name" required />
                            <div className="valid-feedback">
                                Looks good!
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control " id="password" placeholder="Password" required />
                            <div className="valid-feedback">
                                Looks good!
                        </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">Email</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                </div>
                                <input type="email" className="form-control " id="email" placeholder="Email" aria-describedby="inputGroupPrepend3" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                             </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend3">No</span>
                                </div>
                                <input type="tel" className="form-control " id="phonenumber" placeholder="Phonenumber" aria-describedby="inputGroupPrepend3" required />
                                <div className="invalid-feedback">
                                    Please type your Phone Number.
                             </div>
                            </div>
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="date">Check in Date</label>
                            <input type="date" className="form-control " id="date" placeholder="Date" required />
                            <div className="invalid-feedback">
                                Please provide a valid date.
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="duration">Duration of stay</label>
                            <input type="text" className="form-control " id="duration" placeholder="in days..." required />
                            <div className="invalid-feedback">
                                Input not valid.
                        </div>
                        </div>
                        {/* <div className="col-md-3 mb-3">
                        <label htmlFor="validationServer05">Zip</label>
                        <input type="text" className="form-control " id="validationServer05" placeholder="Zip" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div> */}
                    </div>
                    <select id="type" className="custom-select" required>
                        <option selected>Select Room Type</option>
                        <option value="presidential"> Presidential</option>
                        <option value="executive">Executive</option>
                        <option value="suit">Suit</option>
                    </select>


                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input " type="checkbox" value="" id="invalidCheck3" required />
                            <label className="form-check-label" htmlFor="invalidCheck3">
                                Agree to terms and conditions
                        </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                        </div>
                        </div>
                    </div>
                    <p className="align-middle mx-auto row">
                        <button className="btn btn-outline-primary btn-sm col-8 mx-auto" 
                        onClick={handleSubmit} data-toggle="modalww" data-target="#exampleModalww" type="submit"
                            >Book Reservation</button>
                    </p>
                </form>
            </div>
           

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Room booked.  <br/>
                            please proceed to the hotel for payment and key assignment 
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}



export default ReservationForm
