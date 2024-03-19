import './App.css';
import React, { useState } from 'react';
import GameView from './components/GameView';
import WelcomeView from './components/WelcomeView';
import Button from './components/Button';


function App() {
  const [userName, setUserName] = useState("");
  const [gameStart, setGameStart] = useState(false);  

  return (
    <>
    <div className="container">
      <h1 className="mainHeader">Rock Paper Scissors</h1>
      <Button />
    </div>

    { 
      gameStart
      ? <GameView userName={userName}/>
      : <WelcomeView userName={userName} setUserName={setUserName} setGameStart={() => setGameStart(true)} />
    }
    </>
  );
}

export default App;
