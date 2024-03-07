import './App.css';
import GameView from './components/GameView';
import WelcomeView from './components/WelcomeView';
import {setState} from 'react';


function App() {
  const [userName, setUserName] = useState("");

  return (
    <div className="container">
      <h1 className="mainHeader">Rock Paper Scissors</h1>
      <WelcomeView userName={userName} setUserName={setUserName}/>
      <GameView userName={userName} />
    </div>
  );
}

export default App;
