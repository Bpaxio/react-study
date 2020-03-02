import React, {useEffect} from 'react'
import classes from "./Car.module.css";
import Auxy from "../../../hoc/Auxy";
import withClass from "../../../hoc/withClass";

const Car = (props) => {
    useEffect(
        () => {
            console.log("[Car.js] useEffect");
            return () => {
                console.log("[Car.js]  cleanup work in useEffect", props)
            }
        }, [props]);

    console.log('[Car.js] rendering... ', props);
    return (
        <Auxy>
                <p onClick={props.click}>"{props.mark}" milage: {props.mileage} miles</p>
                <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.mark}/>
        </Auxy>
    )
};

export default withClass(Car, classes.Car);