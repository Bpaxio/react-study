import React from 'react'
import './Car.css'

const Car = (props) => {
    return (
        <div className="Car">
            <div onClick={props.click}>
                <p>"{props.mark}"</p>
                <p> milage: {props.mileage} miles</p>
                <p>{props.children}</p>
            </div>
            <input type="text" onChange={props.changed} value={props.mark}/>
            <p>===================================</p>
        </div>
    )
};

export default Car;