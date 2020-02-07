import React from 'react'
import classes from "./Car.module.css";

const Car = (props) => {
    return (
        <div className={classes.Car}>
                <p onClick={props.click}>"{props.mark}" milage: {props.mileage} miles</p>
                <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.mark}/>
        </div>
    )
};

export default Car;