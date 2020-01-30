import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hello, React App</h1>
  //   </div>
  // );
    return React.createElement('div',
        {className: "App"},
        React.createElement('h1', null, 'Hello, React App')
    )
}

export default App;
