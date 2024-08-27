import React, { useState } from "react";
import RockPaperScissors from "../rock_paper_scissors";


const GameView = ({name}) => {

  const [game, setGame] = useState(new RockPaperScissors(name));
  const [score, setScore] = useState({user: 0, cpu: 0}); 
  const [selection, setSelection] = useState("rock");
  const [history, setHistory] = useState([]);

  const udpateScoreandHistory = () => {
    setScore({...game.score});
    setHistory([...game.gameHistoryLog]);
  }

  const gameButtonClick = () => {
    game.play(selection);
    udpateScoreandHistory();
    setGame(game);
    console.log("game button clicked")
    console.log(score);
  }

  const resetButtonClicked = () => {
    setscore({user: 0, cpu: 0});
    setGame(new RockPaperScissors(name));
    setHistory([]);
  }



  return (
    <div id="game-screen">
      <div id="score-tally">
        <p id="score"> {name}: {score.user} v CPU:{score.cpu}</p>
      
      </div>

      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection">Select your choice: </label>
          <select
            className="custom-select"
            id="user-selection"
            name="user-selection"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}

          >
            <option id="rock" value="rock">
              Rock
            </option>
            <option id="paper" value="paper">
              Paper
            </option>
            <option id="scissors" value="scissors">
              Scissors
            </option>
          </select>
        </div>
        <button className="btn btn-primary" id="play-button" type="button" onClick={gameButtonClick}>
          Play
        </button>
        <button className="btn btn-primary" id="reset-button" type="button" onClick={resetButtonClicked}>
          Reset
        </button>  
        <div id="game-history">
          <ul>
            {
              history.map((item, index) => {
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
      </form>
    </div>
  );
};

export default GameView;