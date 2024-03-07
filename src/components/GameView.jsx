
const GameView = ({userName}) => {
    return (
      <div id="game-screen">
        <div id="score-tally">
          <p id="score"> {UserName}: 0 v CPU: 0</p>
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
        <button class="btn btn-primary" id="play-button" type="button">
          Play
        </button>
      </form>
    </div>
  );
};
  

export default GameView;