import React from 'react';
import Game from './game/Game';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Game
        words={['seek', 'test', 'zoom', 'keep']}
        time={{ minutes: 1, seconds: 0 }}
      />
    </div>
  );
}

export default App;
