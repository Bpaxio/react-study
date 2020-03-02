import React, {useContext, useEffect} from 'react';

import Person from "./Person/Person";
import AuthContext from "../../context/auth-context";


const Persons = (props) => {
    useEffect(() => {
        console.log("[Persons.js] useEffect", props);
    });
    const authContext = useContext(AuthContext);

    return props.persons.map((person, index) => (
        <Person
            click={() => props.clicked(index)}
            key={person.id}
            name={person.name}
            age={person.age}
            logged={authContext.authenticated}
        />
    ));
};

export default Persons;