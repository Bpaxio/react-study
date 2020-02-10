import React, {useState} from 'react';
import Persons from "../Persons/Persons";
import baseClasses from '../../containers/App.module.css';
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

    const [pState, setPersonsState] = useState({
        persons: [
            {id: 0, name: "Andy", age: 87},
            {id: 1, name: "Glok", age: 23},
            {id: 2, name: "Bill", age: 56}
        ]
    });
    const [title, setTitle] = useState(props.title);
    const getNewState = () => {
        setPersonsState({
            persons: [
                {id: 0, name:"Andy Blobert", age:88},
                {id: 1, name:"Murai", age:24},
                {id: 2, name:"Bill Geshua", age:56}
            ]
        });
    };

    const deletePersonHandler = (index) => {
        const persons = [...pState.persons];
        persons.splice(index, 1);
        setPersonsState({persons: persons});
    };

    return (
        <div className={classes.Cockpit}>
            <h1>{title}</h1>
            <button className={baseClasses.Green} onClick={() => setTitle("New Title")}>Change Title</button>
            <div className={classes.Persons}>
                <Persons persons={pState.persons} clicked={deletePersonHandler}/>
                <button className={baseClasses.Red} onClick={getNewState}>Reset</button>
            </div>
        </div>
    );
};

export default Cockpit;