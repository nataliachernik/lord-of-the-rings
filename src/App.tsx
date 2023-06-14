import React from 'react';

import Movies from './components/movies/Movies'
import Characters from './components/characters/Characters'
import Game from './components/game/Game'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Movies />
        <Characters />
        <Game />
    </div>
  );
}

export default App;
