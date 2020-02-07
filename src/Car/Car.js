import React from 'react'
import './Car.css'

const Car = (props) => {
    const style = {
        '@media (mine-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Car" style={style}>
                <p onClick={props.click}>"{props.mark}" milage: {props.mileage} miles</p>
                <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.mark}/>
        </div>
    )
};

export default Car;