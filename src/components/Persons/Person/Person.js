import React, {useEffect, useState} from 'react'
import classes from './Person.module.css'
import baseClasses from '../../../containers/App.module.css';
import Auxy from "../../../hoc/Auxy";
import withClass from "../../../hoc/withClass";

const Person = (props) => {
    useEffect(() => {
        console.log("[Person.js] useEffect");
    });
    const [age, updateAge] = useState(props.age);
    return (
        <Auxy>
            <p onClick={props.click}>Human "{props.name}" {age} years old</p>
            <p onClick={props.click}>{props.children}</p>
            <button className={baseClasses.Green} onClick={() => updateAge(age + 1)}>Happy Birthday!!!</button>
        </Auxy>
    )
};

export default withClass(Person, classes.Person);