import React, {useEffect} from 'react';
import Person from "./Person/Person";


const Persons = (props) => {
        useEffect(
            () => {
                console.log("[Persons.js] useEffect");
            },
            []
        );

        return props.persons.map((person, index) => {
            return <Person
                click = {() => props.clicked(index)}
                key = {person.id}
                name= {person.name}
                age= {person.age}
            />
        });
};




export default Persons