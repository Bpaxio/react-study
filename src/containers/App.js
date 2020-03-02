import React, {useContext, useState} from 'react';

import classes from './App.module.css';
import Cars from "../components/Cars/Cars";
import Cockpit from "../components/Cockpit/Cockpit";
import Auxiliary from "../hoc/Auxiliary";
import AuthContext from '../context/auth-context'

const App = () => {
    const initialState = {
        title: "Hello, React App",
        persons: [
            {id: 0, name: "Andy", age: 87},
            {id: 1, name: "Glok", age: 23},
            {id: 2, name: "Bill", age: 56}
        ]};

    const [authenticated, auth] = useState(false);
    const authContext = useContext(AuthContext);

    // equals of usage <AuthContext.Provider value={{
    //         authenticated: authenticated,
    //         login:() => {
    //              auth(true)
    //         }}}>
    authContext.login = () => {
        auth(true)
    };
    authContext.authenticated = authenticated;


    return (
        <Auxiliary classes={classes.App}>
            <Cockpit title={initialState.title} persons={initialState.persons}/>
            {/*same sa using <AuthContext.Consumer>{context => <tags>...</tags>}</AuthContext.Consumer>*/}
            {authContext.authenticated ? <Cars/> : <p>'Cars are not alowed to see)'</p>}
        </Auxiliary>
    );
};


export default App;
