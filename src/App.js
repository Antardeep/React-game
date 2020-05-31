import React from 'react';
import ticTacLogo from './ticTacLogo.png';
import logo from './logo.png';
import './App.css';
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ticTacLogo} className="App-logo" alt="TicTaclogo" />
        <img src={logo} className="logo" alt="logo" />
      </header>
      <Board />
    </div>
  );
}

export default App;
