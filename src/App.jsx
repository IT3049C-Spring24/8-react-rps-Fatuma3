import './App.css';
import React, { useState } from 'react';
import GameView from './components/GameView';
import WelcomeView from './components/WelcomeView';


function App() {


  const [name, setUserName] = useState("Fatuma");
  const [gameStarted, setGameStarted] = useState(false);  

  return (
    <>
    <div className="container">
      <h1 className="mainHeader">Rock Paper Scissors</h1>
    </div>

    { 
      gameStarted
      ? <GameView name={name}/>
      : <WelcomeView 
          name={name} 
          onNameChange={setUserName}
          onGameStart={() => setGameStarted(true)} />
    }
  </>
  );
}

export default App;
