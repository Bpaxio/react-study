import React, {useEffect} from 'react'
import classes from "./Car.module.css";

const Car = (props) => {
    useEffect(
        () => {
            console.log("[Car.js] useEffect");
            return () => {
                console.log("[Car.js]  cleanup work in useEffect", props)
            }
        },
        []);
    useEffect(
        () => {
            console.log("[Car.js] 2nd useEffect");
            return () => {
                console.log("[Car.js] cleanup work in 2nd useEffect on every component every time because of missing second argument", props)
            }
        });

    console.log('[Car.js] rendering... ', props);
    return (
        <div className={classes.Car}>
                <p onClick={props.click}>"{props.mark}" milage: {props.mileage} miles</p>
                <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.mark}/>
        </div>
    )
};

export default Car;