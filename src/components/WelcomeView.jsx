import PropTypes from "prop-types";
import React from "react";


const WelcomeView = ({name,onNameChange, onGameStart}) => {

function startButtonClick(){
  onGameStart();
  console.log("game button clicked");
}



return (
      <div id="welcome-screen">
        <form id="name-form">
          <div className="form-group">
            <label htmlFor="username">Type your name: </label>
            <input
            value={name}
            onChange={(e) =>{onNameChange(e.target.value)}}
            className="form-control"
            type="text"
            id="username"
            name="username"
            required placeholder="Enter Name Here..."
            minLength="2"
            maxLength="15" />
          </div>
          <button className="btn btn-primary" id="start-game-button" type="button" onClick={startButtonClick}>
            Start Game!
          </button>
        </form>
      </div>
    );
  };

  WelcomeView.prototype = {
    name: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onGameStart: PropTypes.func.isRequired,
  };

export default WelcomeView;

