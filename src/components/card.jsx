import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    const {
        header = {},
        color = {},
        
    } = props
    return (
        <div>
            <div className={"card border-" + color } style={{"maxWidth": "18rem"}}>
                <div className="card-header">{header}</div>
                <div className={"card-body text-" + color}>
                    <h5 className="card-title">
                        <FontAwesomeIcon icon={props.icon}  />
                        <span className="float-right">
                            {props.data}
                        </span>
                    </h5>
                    <p className="card-text"></p>
                </div>
            </div>
        </div>
    )
}
