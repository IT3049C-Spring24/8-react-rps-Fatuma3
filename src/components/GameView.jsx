import React, { useState } from "react";
import RockPaperScissors from "../models/RockPaperScissors";



const GameView = ({userName}) => {

  const [game, setGame] = useState(new RockPaperScissors(userName));
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [selection, setSelection] = useState("rock");
  const [history, setHistory] = useState([]);

  const udpateScoreandHistory = () => {
    setUserScore(game.userScore);
    setCpuScore(game.cpuScore);
    setHistory(...game.gameHistoryLog);
  }

  const gameButtonClick = () => {
    game.play(selection);
    udpateScoreandHistory();
  }

  const resetButtonClicked = () => {

    setCpuScore(0);
    setUserScore(0);
    setGame(new RockPaperScissors(userName));
    setHistory([]);

  }






  return (
    <div id="game-screen">
      <div id="score-tally">
        <p id="score"> {UserName}: {userScore} v CPU:{cpuScore}</p>
      
      </div>

      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection">Select your choice: </label>
          <select
            className="custom-select"
            id="user-selection"
            name="user-selection"

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
        <button class="btn btn-primary" id="play-button" type="button" onClick={gameButtonClick}>
          Play
        </button>
        <button class="btn btn-primary" id="reset-button" type="button" onClick={resetButtonClicked}>
          Reset
        </button>  
      </form>
    </div>
  );
};

export default GameView;