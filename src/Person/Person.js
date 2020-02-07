import React, {useState} from 'react'
import classes from './Person.module.css'

const Person = (props) => {
    const [age, updateAge] = useState(props.age);
    return (
        <div className={classes.Person}>
            <p>Human "{props.name}" {age} years old</p>
            <p>{props.children}</p>
            <button onClick={() => updateAge(age + 1)}>Happy Birthday!!!</button>
        </div>
    )
};

export default Person;