import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'


import classes from "./Car.module.css";
import Auxy from "../../../hoc/Auxy";
import withClass from "../../../hoc/withClass";

const Car = (props) => {
    const inputRef = useRef(null);
    useEffect(
        () => {
            console.log("[Car.js] useEffect");
            inputRef.current.focus();
            return () => {
                console.log("[Car.js]  cleanup work in useEffect", props)
            }
        }, [props]);

    console.log('[Car.js] rendering... ', props);
    return (
        <Auxy>
                <p key="i1" onClick={props.click}>"{props.mark}" milage: {props.mileage} miles</p>
                <p key="i2">{props.children}</p>
            <input key="i3"
                   type="text"
                   ref={inputRef}
                   onChange={props.changed}
                   value={props.mark}/>
        </Auxy>
    )
};

Car.propTypes = {
    click: PropTypes.func,
    mark: PropTypes.string,
    mileage: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Car, classes.Car);