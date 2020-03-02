import React, {useState} from 'react';
import Persons from "../Persons/Persons";
import baseClasses from '../../containers/App.module.css';
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

    const [pState, setPersonsState] = useState(props.persons);
    const [title, setTitle] = useState(props.title);
    const resetState = () => {
        setPersonsState(props.persons);
    };

    const deletePersonHandler = (index) => {
        console.log("index", index);
        console.log("state", pState);
        const persons = [...pState];
        persons.splice(index, 1);
        setPersonsState(persons);
    };

    return (
        <div className={classes.Cockpit}>
            <h1>{title}</h1>
            <button className={baseClasses.Green} onClick={() => setTitle("[Changed]Hello, React App")}>Change Title</button>
            <div className={classes.Persons}>
                <Persons persons={pState} clicked={deletePersonHandler}/>
                <button className={baseClasses.Red} onClick={resetState}>Reset</button>
            </div>
        </div>
    );
};

export default Cockpit;