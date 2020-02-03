import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
    const [persons, setPersons] = useState({
        persons: [
            {name: "Andy", age: 87},
            {name: "Glok", age: 23},
            {name: "Bill", age: 56}
        ]
    });
    const [title, setTitle] = useState("Hello, React App");
    const getNewState = () => {
        setPersons({
            persons: [
                {name:"Andy", age:88},
                {name:"Murai", age:24},
                {name:"Bill", age:56}
            ]
        });
    };
    return (
        <div className="App">
            <h1>{title}</h1>
            <button onClick={() => setTitle("New Title")}>Change Title</button>
            <p>===================================</p>
            <Person onCopy onCut onPaste name={persons.persons[0].name} age={persons.persons[0].age}/>
            <Person name={persons.persons[1].name} age={persons.persons[1].age}/>
            <Person name={persons.persons[2].name} age={persons.persons[2].age}>I don't want to say smth</Person>
            <button onClick={getNewState}>Switch name</button>
        </div>
    );
};

export default App;
