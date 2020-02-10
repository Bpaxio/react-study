import React from 'react';
import classes from './App.module.css';
import Cars from "../components/Cars/Cars";
import Cockpit from "../components/Cockpit/Cockpit";

const App = () => {
    return (
        <div className={classes.App}>
            <Cockpit title="Hello, React App"/>
            <Cars/>
        </div>
    );
};

export default App;
