import React from 'react';
import './App.css';
const logo_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmFLh-OJvCrZmvgXIN41zPRqtF6vTqXcRgcw&usqp=CAU';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo_url} className="App-logo" alt="logo" />
          <br/>
          <p>The Anvil</p>
      </header>
    </div>
  );
}

export default App;
