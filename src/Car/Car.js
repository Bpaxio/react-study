import React from 'react'

const Car = (props) => {
    return (
        <div className="Car">
            <p onClick={props.click}>"{props.mark}"</p>
            <p> milage: {props.mileage} miles</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
            <p>===================================</p>
        </div>


    )
};

export default Car;