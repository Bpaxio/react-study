import React from 'react';
import classes from './App.module.css';
import Cars from "../components/Cars/Cars";
import Cockpit from "../components/Cockpit/Cockpit";
import withClasses from "../hoc/withClasses";
import Auxiliary from "../hoc/Auxiliary";

const App = () => {
    const initialState = {
        title: "Hello, React App",
        persons: [
            {id: 0, name: "Andy", age: 87},
            {id: 1, name: "Glok", age: 23},
            {id: 2, name: "Bill", age: 56}
        ]};

    return (
        <Auxiliary>
            <Cockpit title={initialState.title} persons={initialState.persons}/>
            <Cars/>
        </Auxiliary>
    );
};

export default withClasses(App, classes.App);
