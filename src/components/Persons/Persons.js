import React from 'react';
import Person from "./Person/Person";


const Persons = (props) => (
    props.persons.map((person, index) => {
        return <Person
            click = {() => props.clicked(index)}
            key = {person.id}
            name= {person.name}
            age= {person.age}
        />
    })
);




export default Persons