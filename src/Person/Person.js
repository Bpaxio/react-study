import React, {useState} from 'react'
import './Person.css'

const Person = (props) => {
    const [age, updateAge] = useState(props.age);
    return (
        <div className="Person">
            <p>Human "{props.name}" {age} years old</p>
            <p>{props.children}</p>
            <button onClick={() => updateAge(age + 1)}>Happy Birthday!!!</button>
            <p>===================================</p>
        </div>
    )
};

export default Person;