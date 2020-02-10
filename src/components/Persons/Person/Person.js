import React, {useEffect, useState} from 'react'
import classes from './Person.module.css'
import baseClasses from '../../../containers/App.module.css';

const Person = (props) => {
    useEffect(() => {
        console.log("[Person.js] useEffect");
    });
    const [age, updateAge] = useState(props.age);
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Human "{props.name}" {age} years old</p>
            <p onClick={props.click}>{props.children}</p>
            <button className={baseClasses.Green} onClick={() => updateAge(age + 1)}>Happy Birthday!!!</button>
        </div>
    )
};

export default Person;