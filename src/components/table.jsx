import React from 'react'

function Table(props) {
    return (
        <div>
            <table className="table table-striped table-dark table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">In_Use</th>
                        <th scope="col">Ready</th>
                        <th scope="col">Price</th>
                        <th scope="col">Check in</th>
                        <th scope="col">Reservation</th>
                        <th scope="col">Deperture</th>
                        <th scope="col">Occupant</th>
                        <th scope="col">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((room, index) => (
                            <tr key={index + 121}>
                                <th scope="row">{room.id}</th>
                                <td>{room.type}</td>
                                <td>{room.in_use}</td>
                                <td>{room.ready}</td>
                                <td>{room.price}</td>
                                <td>{room.check_in}</td>
                                <td>{room.reservation}</td>
                                <td>{room.departure}</td>
                                <td>{room.occupant}</td>
                                <td>{room.created_at}</td>
                                
                            </tr>
                        ))
                    }

                   
                </tbody>
            </table>
        </div>
    )
}

export default Table
